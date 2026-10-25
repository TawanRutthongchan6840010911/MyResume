
document.addEventListener('DOMContentLoaded', () => {
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

  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  const resetFormBtn = document.getElementById('resetFormBtn');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName').value.trim();
      const email = document.getElementById('senderEmail').value.trim();
      const msg = document.getElementById('senderMessage').value.trim();

      formFeedback.classList.remove('d-none');
      if (!name || !email || !msg) {
        formFeedback.innerHTML =
          '<span class="text-danger fw-semibold"><i class="bi bi-exclamation-circle me-1"></i>กรุณากรอกข้อมูลให้ครบทุกช่องก่อนกดส่งครับ</span>';
        return;
      }

      formFeedback.innerHTML =
        '<span class="text-success fw-semibold"><i class="bi bi-check2-circle me-1"></i>บันทึกข้อความจากคุณ <strong>' +
        name.replace(/</g, '&lt;') +
        '</strong> เรียบร้อยแล้ว! (ระบบจำลองการส่งข้อความ)</span>';
      contactForm.reset();
    });
  }

  if (resetFormBtn && formFeedback) {
    resetFormBtn.addEventListener('click', () => {
      formFeedback.classList.add('d-none');
      formFeedback.innerHTML = '';
    });
  }
});
