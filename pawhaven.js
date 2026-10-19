// ===== Paw cards: draw each paw with separate toes so they can spread on hover =====
const PAW = `
  <ellipse cx="50" cy="66" rx="24" ry="20" />
  <ellipse class="toe toe-1" cx="22" cy="40" rx="9" ry="12" transform="rotate(-20 22 40)" />
  <ellipse class="toe toe-2" cx="40" cy="24" rx="9" ry="12" transform="rotate(-6 40 24)" />
  <ellipse class="toe toe-3" cx="60" cy="24" rx="9" ry="12" transform="rotate(6 60 24)" />
  <ellipse class="toe toe-4" cx="78" cy="40" rx="9" ry="12" transform="rotate(20 78 40)" />`;
document.querySelectorAll(".paw-card__paw").forEach((svg) => { svg.innerHTML = PAW; });

// ===== Click a paw card to copy its hex code =====
document.querySelectorAll(".paw-card").forEach((card) => {
  card.addEventListener("click", () => {
    const hex = card.dataset.hex;
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(hex).then(() => {
      card.classList.add("copied");
      setTimeout(() => card.classList.remove("copied"), 1300);
    }).catch(() => {});
  });
});

// ===== Color usage bar =====
const ratioLabel = document.getElementById("ratioLabel");
document.querySelectorAll(".ph-ratio__bar span").forEach((slice) => {
  slice.addEventListener("mouseenter", () => {
    ratioLabel.textContent = `${slice.dataset.label} · about ${getComputedStyle(slice).getPropertyValue("--w").trim()}% of the interface`;
  });
  slice.addEventListener("mouseleave", () => { ratioLabel.textContent = "Hover the bar to explore"; });
  slice.addEventListener("click", () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(slice.dataset.hex).then(() => { ratioLabel.textContent = `Copied ${slice.dataset.hex}!`; }).catch(() => {});
  });
});
