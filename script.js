document.addEventListener('DOMContentLoaded', () => {
  // 1. Dark / Light Neumorphism Theme Toggle
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      themeIcon.className = isDark ? 'bi bi-sun' : 'bi bi-moon-stars';
      themeText.textContent = isDark ? 'Light' : 'Dark';
    });
  }

  // 2. Auto-close mobile Hamburger menu when clicking an Anchor Link
  const navLinks = document.querySelectorAll('.nav-link-neu');
  const resumeNavbar = document.getElementById('resumeNavbar');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
      if (resumeNavbar && resumeNavbar.classList.contains('show') && window.bootstrap) {
        const bsCollapse = window.bootstrap.Collapse.getInstance(resumeNavbar);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });

  // 3. Skill Category Filter
  const filterButtons = document.querySelectorAll('.skill-filter-btn');
  const skillItems = document.querySelectorAll('.skill-item');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      skillItems.forEach((item) => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.classList.remove('d-none');
        } else {
          item.classList.add('d-none');
        }
      });
    });
  });
});
