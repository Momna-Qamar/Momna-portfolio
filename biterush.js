// ===== Screens: duplicate each row so the scroll loops without a gap =====
document.querySelectorAll(".screens-track").forEach((track) => {
  Array.from(track.children).forEach((phone) => {
    const copy = phone.cloneNode(true);
    copy.setAttribute("aria-hidden", "true");
    track.appendChild(copy);
  });
});

// ===== Burger color palette =====
const tip = document.getElementById("burgerTip");
const layers = document.querySelectorAll(".layer");
const items = document.querySelectorAll(".palette__item");
const defaultTip = "Hover a layer";

function highlight(hex) {
  layers.forEach((l) => l.classList.toggle("is-active", l.dataset.hex === hex));
  items.forEach((i) => i.classList.toggle("is-active", i.dataset.hex === hex));
  const layer = document.querySelector(`.layer[data-hex="${hex}"]`);
  if (tip && layer) tip.textContent = `${layer.dataset.name} · ${hex}`;
}

function clear() {
  layers.forEach((l) => l.classList.remove("is-active"));
  items.forEach((i) => i.classList.remove("is-active"));
  if (tip) tip.textContent = defaultTip;
}

function copy(hex) {
  if (!navigator.clipboard) return;
  navigator.clipboard.writeText(hex).then(() => {
    tip.textContent = `Copied ${hex}!`;
    tip.classList.add("copied");
    setTimeout(() => tip.classList.remove("copied"), 1200);
  }).catch(() => {});
}

[...layers, ...items].forEach((el) => {
  el.addEventListener("mouseenter", () => highlight(el.dataset.hex));
  el.addEventListener("mouseleave", clear);
  el.addEventListener("click", () => copy(el.dataset.hex));
});
