export function initFaq() {
  const items = document.querySelectorAll(".faq-item");

  items.forEach((item) => {
    const button = item.querySelector(".faq-question");
    const panel = item.querySelector(".faq-answer");

    if (!button || !panel) return;

    const panelId = panel.id || `faq-panel-${Math.random().toString(36).slice(2, 9)}`;
    panel.id = panelId;
    button.setAttribute("aria-controls", panelId);

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      items.forEach((other) => {
        other.classList.remove("is-open");
        other.querySelector(".faq-question")?.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
}
