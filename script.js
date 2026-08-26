/* ==========================================================================
   Chamalka Heshani — Portfolio Interactive Engine
   Clean, Professional, Performant JavaScript
   ========================================================================== */

// Project database for Modal details
const projectData = {
  'proj-1': {
    title: 'Elderly Home Care Records Management System',
    category: 'Full Stack Web Application',
    badge: 'Healthcare & Management',
    desc: 'A comprehensive, role-based healthcare management platform designed to streamline patient care, medical record-keeping, and caregiver operations in elderly care facilities. Built with an intuitive React frontend and a robust NestJS backend utilizing PostgreSQL and TypeORM for strict relational data modeling.',
    features: [
      'Role-Based Access Control (RBAC) ensuring dedicated views and permissions for administrators, caregivers, and medical staff.',
      'Modular RESTful APIs engineered with NestJS offering secure CRUD endpoints, request validation pipes, and error filters.',
      'Relational schema design with PostgreSQL and TypeORM migrations ensuring data integrity and fast querying.',
      'Responsive, component-driven user interfaces built using modern React principles and state management.',
      'Collaborative team workflow following Git feature-branching, code reviews, and Agile software engineering practices.'
    ],
    tech: ['React', 'NestJS', 'PostgreSQL', 'TypeORM', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'GitHub'],
    github: 'https://github.com/Chamalka-heshi',
    demo: 'https://github.com/Chamalka-heshi'
  },
  'proj-2': {
    title: 'Autonomous Chess Playing Robot',
    category: 'First Year Hardware Project',
    badge: 'Robotics & Computer Vision',
    desc: 'An intelligent hardware and software robotic system capable of playing chess against human opponents in physical space. The system integrates computer vision for chessboard state detection, processes real-time tactical moves with an embedded chess engine, and coordinates a robotic arm for physical piece movement.',
    features: [
      'Real-time chessboard state detection and piece localization using OpenCV and Computer Vision algorithms.',
      'Embedded chess engine integration on Raspberry Pi for real-time move calculation and tactical evaluation.',
      'Low-level hardware actuation and robotic arm motor control programmed using Arduino microcontrollers.',
      'Multidisciplinary integration of Python, Pygame interface, servo controllers, and physical sensors.',
      'Automated mechanical calibration, error recovery for illegal physical moves, and end-to-end integration testing.'
    ],
    tech: ['Python', 'Raspberry Pi', 'Arduino', 'OpenCV', 'Pygame', 'Embedded Systems', 'Computer Vision', 'Robotics'],
    github: 'https://github.com/Chamalka-heshi',
    demo: 'https://github.com/Chamalka-heshi'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  /* 1. Year Update in Footer */
  const yearPlaceholder = document.getElementById('year-placeholder');
  if (yearPlaceholder) yearPlaceholder.textContent = new Date().getFullYear();

  /* 2. Scroll Progress & Sticky Nav Link Highlight */
  const scrollProgress = document.getElementById('scroll-progress');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // Progress bar fill
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (scrollProgress) scrollProgress.style.width = scrolled + '%';

    // Highlight active menu link
    let currentId = '';
    sections.forEach(sec => {
      const sectionTop = sec.offsetTop;
      if (window.scrollY >= (sectionTop - 240)) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });

  /* 3. Theme Toggle Setup */
  const themeToggle = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', storedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
      showToast(`Switched to ${newTheme} theme`, 'success');
    });
  }

  /* 4. Mobile Menu Navigation */
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileOverlay) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('open');
      mobileOverlay.classList.toggle('open');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('open');
        mobileOverlay.classList.remove('open');
      });
    });
  }

  /* 5. Skills Category Filter Tabs */
  const skillCategoryButtons = document.querySelectorAll('.skill-cat-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  skillCategoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      skillCategoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedCategory = btn.dataset.cat;
      skillCards.forEach(card => {
        const cardCategory = card.dataset.category;
        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
          card.style.display = 'flex';
          card.style.animation = 'toastIn 0.3s forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* 6. Projects Category Filter Tabs */
  const projectTabBtns = document.querySelectorAll('.project-tab-btn');
  const projectCards = document.querySelectorAll('.project-card');

  projectTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      projectTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const cat = card.dataset.category;
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.animation = 'toastIn 0.35s forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* 7. Project Breakdown Modal Logic */
  const modalOverlay = document.getElementById('project-modal');
  const modalClose = modalOverlay ? modalOverlay.querySelector('.modal-close') : null;
  const modalBadge = document.getElementById('modal-badge');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalFeaturesList = document.getElementById('modal-features-list');
  const modalTech = document.getElementById('modal-tech');
  const modalLinkGithub = document.getElementById('modal-link-github');
  const modalVisual = modalOverlay ? modalOverlay.querySelector('.modal-header-visual') : null;

  document.querySelectorAll('.project-card').forEach(card => {
    const detailBtn = card.querySelector('.btn-detail');
    const handleOpen = () => {
      const projId = card.dataset.id;
      const data = projectData[projId];
      if (!data) return;

      if (modalBadge) modalBadge.textContent = data.badge;
      if (modalTitle) modalTitle.textContent = data.title;
      if (modalDesc) modalDesc.textContent = data.desc;

      // Populate features
      if (modalFeaturesList) {
        modalFeaturesList.innerHTML = '';
        data.features.forEach(feat => {
          const li = document.createElement('li');
          li.textContent = feat;
          modalFeaturesList.appendChild(li);
        });
      }

      // Populate tech
      if (modalTech) {
        modalTech.innerHTML = '';
        data.tech.forEach(t => {
          const span = document.createElement('span');
          span.textContent = t;
          modalTech.appendChild(span);
        });
      }

      if (modalLinkGithub) modalLinkGithub.href = data.github;

      if (modalVisual) {
        modalVisual.className = 'modal-header-visual';
        modalVisual.classList.add(projId === 'proj-1' ? 'grad-1' : 'grad-2');
      }

      if (modalOverlay) modalOverlay.classList.add('open');
    };

    if (detailBtn) detailBtn.addEventListener('click', handleOpen);
    card.addEventListener('click', (e) => {
      if (!e.target.closest('a') && !e.target.closest('.btn-detail')) handleOpen();
    });
  });

  if (modalClose && modalOverlay) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('open');
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('open');
      }
    });
  }

  /* 8. Contact Form Submission & Validation */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let hasError = false;

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const msgInput = document.getElementById('form-message');
      const submitBtn = contactForm.querySelector('.btn-submit');

      // Validation
      if (!nameInput.value.trim()) {
        nameInput.parentElement.classList.add('has-error');
        hasError = true;
      } else {
        nameInput.parentElement.classList.remove('has-error');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailInput.parentElement.classList.add('has-error');
        hasError = true;
      } else {
        emailInput.parentElement.classList.remove('has-error');
      }

      if (!msgInput.value.trim()) {
        msgInput.parentElement.classList.add('has-error');
        hasError = true;
      } else {
        msgInput.parentElement.classList.remove('has-error');
      }

      if (hasError) {
        showToast('Please fill in all required fields accurately.', 'error');
        return;
      }

      // Simulate sending
      if (submitBtn) submitBtn.classList.add('loading');

      setTimeout(() => {
        if (submitBtn) submitBtn.classList.remove('loading');
        contactForm.reset();
        showToast('Thank you! Your message has been sent.', 'success');
      }, 900);
    });
  }

  /* 9. Scroll Reveal Engine */
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 80;
      if (elementTop < windowHeight - elementVisible) {
        el.classList.add('revealed');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  /* 10. Initialize Particles Mesh */
  initParticlesMesh();
});

/* Particle Background with Subtle Mesh */
function initParticlesMesh() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particlesArray = [];
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const mouse = {
    x: null,
    y: null,
    radius: 120
  };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.size = Math.random() * 1.8 + 0.6;
      this.speedX = Math.random() * 0.35 - 0.175;
      this.speedY = Math.random() * 0.35 - 0.175;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > w || this.x < 0) this.speedX = -this.speedX;
      if (this.y > h || this.y < 0) this.speedY = -this.speedY;
    }
    draw() {
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent-color') + '22';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function setupParticles() {
    particlesArray = [];
    const maxParticles = Math.min((w * h) / 16000, 60);
    for (let i = 0; i < maxParticles; i++) {
      particlesArray.push(new Particle());
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, w, h);
    particlesArray.forEach(p => {
      p.update();
      p.draw();
    });

    // Draw connecting links
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent-color') + '06';
    for (let a = 0; a < particlesArray.length; a++) {
      if (mouse.x !== null && mouse.y !== null) {
        const dxMouse = particlesArray[a].x - mouse.x;
        const dyMouse = particlesArray[a].y - mouse.y;
        const distMouse = Math.hypot(dxMouse, dyMouse);
        if (distMouse < mouse.radius) {
          ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent-color') + '1c';
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      for (let b = a + 1; b < particlesArray.length; b++) {
        const dx = particlesArray[a].x - particlesArray[b].x;
        const dy = particlesArray[a].y - particlesArray[b].y;
        const distance = Math.hypot(dx, dy);
        if (distance < 100) {
          ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent-color') + '05';
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].y, particlesArray[b].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animateParticles);
  }

  setupParticles();
  animateParticles();
}

/* Toast Engine */
function showToast(msg, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let iconHtml = '';
  if (type === 'success') {
    iconHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
  } else {
    iconHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
  }

  toast.innerHTML = `
    <span class="toast-icon">${iconHtml}</span>
    <span class="toast-msg">${msg}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('removing');
    toast.addEventListener('animationend', () => {
      toast.remove();
    });
  }, 3500);
}
