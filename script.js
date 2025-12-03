// Dark/Light Mode Toggle
const toggle = document.getElementById('themeToggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    document.documentElement.toggleAttribute('data-theme');
    toggle.textContent = document.documentElement.hasAttribute('data-theme') ? '☀️' : '🌙';
  });
}

// Back to Top Button
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  backToTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
}
