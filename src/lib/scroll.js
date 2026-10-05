export function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}