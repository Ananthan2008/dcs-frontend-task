/* PACELINE — Interactive behaviors */

// ---------- 1. Mobile nav ----------
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------- 2. Newsletter validation ----------
const form = document.getElementById('newsletter-form');
if (form) {
  const msg = form.querySelector('.newsletter__msg');
  const input = form.querySelector('input[type="email"]');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value.trim();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (!ok) {
      msg.textContent = 'Please enter a valid email address.';
      msg.className = 'newsletter__msg is-err';
      input.focus();
      return;
    }
    msg.textContent = "Thanks — you're on the list.";
    msg.className = 'newsletter__msg is-ok';
    input.value = '';
  });
}

// ---------- 3. Product filter tabs ----------
const filters = document.querySelectorAll('.filter');
const products = document.querySelectorAll('.product');
if (filters.length && products.length) {
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const filter = btn.dataset.filter;
      products.forEach(p => {
        const tags = (p.dataset.tags || '').split(/\s+/);
        const show = filter === 'new' ? tags.includes('new') : tags.includes(filter);
        p.style.display = show ? '' : 'none';
      });
    });
  });
}

// ---------- 4. Wishlist toggle ----------
document.querySelectorAll('.wishlist').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('is-on');
    const on = btn.classList.contains('is-on');
    btn.setAttribute('aria-label', on ? 'Remove from wishlist' : 'Add to wishlist');
  });
});