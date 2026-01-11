/* main.js - placeholder
 * Keeps script minimal. Adds simple HTML include for reusable components.
 */

async function includeHTML(selector, path) {
  const el = document.querySelector(selector);
  if (!el) return;
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error('Failed to fetch ' + path);
    el.innerHTML = await res.text();
  } catch (err) {
    console.warn('includeHTML error:', err);
  }
}

// Wire components on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  includeHTML('#navbar-include', 'components/navbar.html');
  includeHTML('#footer-include', 'components/footer.html');
  // Only include hero on the home page (index.html)
  if (document.querySelector('#hero-include')) {
    includeHTML('#hero-include', 'components/hero.html');
  }

  // Placeholder for future JS
  // Add interactive behavior here if needed.
});