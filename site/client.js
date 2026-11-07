// Makes the dashboard's graph explorable. Everything it works on is already in the page,
// so the graph, its links and the table view all work without this script.
const root = document.querySelector("[data-explorer]");

if (root) {
  const svg = root.querySelector(".graph");
  const viewport = svg.querySelector(".viewport");
  const nodes = [...svg.querySelectorAll(".node")];
  const edges = [...svg.querySelectorAll(".edge")];
  const rows = [...root.querySelectorAll("tbody tr")];
  const panelDefault = root.querySelector("[data-panel-default]");
  const panelContent = root.querySelector("[data-panel-content]");
  const tooltip = root.querySelector("[data-tooltip]");
  const search = root.querySelector("[data-filter-search]");
  const count = root.querySelector("[data-filter-count]");
  const nodeById = new Map(nodes.map((node) => [node.dataset.id, node]));
  let selected = null;

  const setClass = (element, name, on) => element.classList.toggle(name, on);
  const normalize = (text) => text.normalize("NFD").replace(/\p{M}/gu, "").replace(/[-–—]/g, " ").toLowerCase();
  const searchText = new Map(rows.map((row) => [row.dataset.id, normalize(row.dataset.search)]));

  // Emphasizes one node and its neighbours, or clears emphasis when given no node.
  function emphasize(id) {
    svg.classList.toggle("has-focus", Boolean(id));
    const neighbours = new Set(id ? [id] : []);
    let touching = 0;
    for (const edge of edges) {
      const touches = Boolean(id) && (edge.dataset.from === id || edge.dataset.to === id);
      setClass(edge, "is-focus", touches);
      if (touches) {
        touching += 1;
        neighbours.add(edge.dataset.from);
        neighbours.add(edge.dataset.to);
      }
    }
    // Labels on every arrow would collide around a hub. The panel lists them in any case.
    svg.classList.toggle("has-few-edges", touching <= 6);
    for (const node of nodes) setClass(node, "is-focus", neighbours.has(node.dataset.id));
  }

  function select(id, { updateHash = true } = {}) {
    const template = id && document.getElementById(`panel-${id}`);
    selected = template && nodeById.has(id) ? id : null;
    for (const node of nodes) setClass(node, "is-selected", node.dataset.id === selected);
    emphasize(selected);
    panelDefault.hidden = Boolean(selected);
    panelContent.hidden = !selected;
    panelContent.replaceChildren(...(selected ? [template.content.cloneNode(true)] : []));
    if (updateHash) history.replaceState(null, "", selected ? `#${selected}` : location.pathname);
  }

  function selectFromHash() {
    const id = location.hash.slice(1);
    if (id.startsWith("wanted-")) return;
    select(id, { updateHash: false });
  }

  // Filters scope the graph and the table together.
  function applyFilters() {
    const words = normalize(search.value).split(/\s+/).filter(Boolean);
    const kindsOn = new Set([...root.querySelectorAll("[data-filter-kind]:checked")].map((input) => input.dataset.filterKind));
    const labelsOn = new Set([...root.querySelectorAll("[data-filter-label]:checked")].map((input) => input.dataset.filterLabel));
    const matches = (id, kind) => {
      const text = searchText.get(id) ?? normalize(id);
      return kindsOn.has(kind) && words.every((word) => text.includes(word));
    };

    const visible = new Set();
    for (const node of nodes) {
      const shown = matches(node.dataset.id, node.dataset.kind);
      setClass(node, "is-filtered", !shown);
      if (shown) visible.add(node.dataset.id);
    }
    for (const edge of edges) {
      setClass(edge, "is-filtered", !(labelsOn.has(edge.dataset.label) && visible.has(edge.dataset.from) && visible.has(edge.dataset.to)));
    }
    let shownRows = 0;
    for (const row of rows) {
      row.hidden = !matches(row.dataset.id, row.dataset.kind);
      if (!row.hidden) shownRows += 1;
    }
    count.textContent = shownRows === rows.length ? `${rows.length} ${rows.length === 1 ? "entry" : "entries"}` : `Showing ${shownRows} of ${rows.length} entries`;
  }

  // Panning and zooming change the SVG's viewBox.
  const [x, y, width, height] = svg.getAttribute("viewBox").split(" ").map(Number);
  const fit = { x, y, width, height };
  let view = { ...fit };
  // Keeps text the same size on screen, whatever the graph's scale. Marks scale with the graph.
  function updateTextScale() {
    const { width: shownWidth, height: shownHeight } = svg.getBoundingClientRect();
    if (shownWidth > 0) svg.style.setProperty("--unit", Math.max(view.width / shownWidth, view.height / shownHeight));
  }
  const applyView = () => {
    svg.setAttribute("viewBox", `${view.x} ${view.y} ${view.width} ${view.height}`);
    updateTextScale();
  };
  new ResizeObserver(updateTextScale).observe(svg);

  function zoom(factor, centerX = view.x + view.width / 2, centerY = view.y + view.height / 2) {
    const width = Math.min(fit.width * 1.5, Math.max(fit.width / 8, view.width * factor));
    const applied = width / view.width;
    view = { x: centerX - (centerX - view.x) * applied, y: centerY - (centerY - view.y) * applied, width, height: view.height * applied };
    applyView();
  }

  const toSvgPoint = (event) => {
    const point = new DOMPoint(event.clientX, event.clientY).matrixTransform(svg.getScreenCTM().inverse());
    return { x: point.x, y: point.y };
  };

  let drag = null;
  svg.addEventListener("pointerdown", (event) => {
    if (event.button === 0) drag = { start: toSvgPoint(event), clientX: event.clientX, clientY: event.clientY, moved: false, pointerId: event.pointerId };
  });
  svg.addEventListener("pointermove", (event) => {
    if (!drag) return;
    if (!drag.moved) {
      // A little movement during a click isn't a drag.
      if (Math.hypot(event.clientX - drag.clientX, event.clientY - drag.clientY) < 4) return;
      drag.moved = true;
      svg.setPointerCapture(drag.pointerId);
      svg.classList.add("is-dragging");
    }
    const point = toSvgPoint(event);
    view.x -= point.x - drag.start.x;
    view.y -= point.y - drag.start.y;
    applyView();
  });
  const endDrag = () => {
    if (drag?.moved) suppressClick = true;
    drag = null;
    svg.classList.remove("is-dragging");
  };
  let suppressClick = false;
  svg.addEventListener("pointerup", endDrag);
  svg.addEventListener("pointercancel", endDrag);
  // Ordinary scrolling keeps moving the page. Holding Ctrl or Cmd zooms the graph, as does pinching.
  svg.addEventListener("wheel", (event) => {
    if (!event.ctrlKey && !event.metaKey) return;
    event.preventDefault();
    const point = toSvgPoint(event);
    zoom(event.deltaY > 0 ? 1.15 : 1 / 1.15, point.x, point.y);
  }, { passive: false });

  root.querySelector(".graph-controls").addEventListener("click", (event) => {
    const action = event.target.dataset.zoom;
    if (action === "in") zoom(1 / 1.3);
    if (action === "out") zoom(1.3);
    if (action === "fit") {
      view = { ...fit };
      applyView();
    }
  });

  svg.addEventListener("click", (event) => {
    if (suppressClick) {
      suppressClick = false;
      event.preventDefault();
      return;
    }
    const node = event.target.closest(".node");
    if (!node) {
      select(null);
      return;
    }
    // Modified clicks open the entry as a normal link does.
    if (event.metaKey || event.ctrlKey || event.shiftKey) return;
    event.preventDefault();
    select(node.dataset.id);
    if (window.matchMedia("(max-width: 960px)").matches) root.querySelector("[data-panel]").scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  const showTooltip = (node) => {
    tooltip.replaceChildren();
    const title = document.createElement("strong");
    title.textContent = node.dataset.title;
    const kind = document.createElement("span");
    kind.textContent = node.dataset.kindName;
    tooltip.append(title, kind);
    tooltip.hidden = false;
    const box = node.querySelector(".mark").getBoundingClientRect();
    const card = tooltip.parentElement.getBoundingClientRect();
    const left = Math.min(box.left - card.left + box.width + 8, card.width - tooltip.offsetWidth - 8);
    tooltip.style.left = `${Math.max(8, left)}px`;
    tooltip.style.top = `${Math.max(8, box.top - card.top - tooltip.offsetHeight - 6)}px`;
  };
  const enter = (node) => {
    if (drag?.moved) return;
    emphasize(node.dataset.id);
    showTooltip(node);
  };
  const leave = () => {
    tooltip.hidden = true;
    emphasize(selected);
  };
  for (const node of nodes) {
    node.addEventListener("pointerenter", () => enter(node));
    node.addEventListener("pointerleave", leave);
    node.addEventListener("focus", () => enter(node));
    node.addEventListener("blur", leave);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && selected) select(null);
  });
  const filters = root.querySelector(".filters");
  filters.addEventListener("input", applyFilters);
  filters.addEventListener("submit", (event) => event.preventDefault());
  window.addEventListener("hashchange", selectFromHash);

  // On a small screen the whole graph would be too small to read, so start closer in.
  const shown = svg.getBoundingClientRect().width;
  if (shown < 640 && fit.width > shown * 1.5) zoom((shown * 1.5) / fit.width);

  // A long label near the edge would be cut off, so it waits until its node is hovered or selected.
  updateTextScale();
  const card = svg.getBoundingClientRect();
  for (const node of nodes.filter((item) => item.classList.contains("is-labelled"))) {
    const label = node.querySelector("text").getBoundingClientRect();
    if (shown >= 640 && (label.left < card.left || label.right > card.right || label.top < card.top || label.bottom > card.bottom)) node.classList.remove("is-labelled");
  }

  applyFilters();
  selectFromHash();
}
