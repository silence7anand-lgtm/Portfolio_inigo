// ===== Mobile menu toggle =====
const toggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('navMobile');
toggle?.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
mobileNav?.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// ===== Year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Active nav link on scroll =====
const navLinks = document.querySelectorAll('.nav-desktop .nav-link');
const sections = ['home', 'projects', 'contact']
  .map(id => document.getElementById(id))
  .filter(Boolean);

const setActive = (id) => {
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) setActive(entry.target.id);
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => observer.observe(s));

// ===== Reveal on scroll =====
document.querySelectorAll('.section, .card, .cta').forEach(el => el.classList.add('reveal'));
const revealer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealer.observe(el));
