document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.header__toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const desktopHeaderQuery = window.matchMedia('(min-width: 990px)');

  if (!toggle || !mobileNav) return;

  const closeMobileNav = () => {
    mobileNav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileNav();
    });
  });

  desktopHeaderQuery.addEventListener('change', event => {
    if (event.matches) {
      closeMobileNav();
    }
  });
});
