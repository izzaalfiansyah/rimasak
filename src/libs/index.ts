export function goToSection(el: string) {
  document.querySelector(el)?.scrollIntoView();
}