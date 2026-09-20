/* ==========================================================================
   Chamalka Heshani — Portfolio Interactive Engine
   Clean, Professional, Performant JavaScript
   ========================================================================== */

// Project database for Modal details
const projectData = {
  'proj-sc-frost-heaven': {
    title: 'SC-Frost Heaven – Cake Business & Bakery E-Commerce Platform',
    category: 'Cake Business & Bakery E-Commerce',
    badge: 'Bakery E-Commerce & Custom Cakes',
    image: 'project-frost-heaven.png',
    desc: 'An elegant, full-stack bakery and custom cake e-commerce platform ("Sweet moments, beautifully crafted") engineered for an artisan cake business in Sri Lanka. Provides an end-to-end digital experience with interactive celebration menus, custom cake order requests, live order tracking, customer testimonials, persistent cart state, user authentication, and administrative order management.',
    features: [
      'Designed an elegant, responsive storefront ("Sweet moments, beautifully crafted") with categories for birthday, wedding, and celebration cakes.',
      'Implemented an online custom cake ordering workflow enabling customers to specify cake requirements, design preferences, and celebration dates.',
      'Built a dedicated Track Order feature allowing customers to monitor preparation, baking, and delivery status in real time.',
      'Integrated user authentication (Login/Sign Up), shopping cart state management, and seamless online order submission.',
      'Developed modular RESTful APIs using Node.js/NestJS connecting to relational PostgreSQL database storage.',
      'Constructed a high-performance responsive UI using React, TypeScript, and modern styling with smooth transitions.'
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'Tailwind CSS', 'RESTful APIs', 'Order Tracking', 'Git', 'GitHub'],
    github: 'https://github.com/Chamalka-heshi',
    demo: 'https://github.com/Chamalka-heshi'
  },
  'proj-relaymesh': {
    title: 'RelayMesh – Decentralized Emergency Communication System',
    category: 'Mesh Networking & Mobile Distributed Systems',
    badge: 'Offline P2P Mesh Communication',
    image: 'project-relaymesh.png',
    desc: 'A resilient peer-to-peer mobile communication system ("Offline. Connected. Together.") built to function with zero cellular or internet connectivity during disaster and emergency scenarios. Turns nearby phones into a decentralized mesh network using Bluetooth Low Energy (BLE) and Wi-Fi Direct protocols for hop-by-hop message delivery, emergency SOS broadcasts, and offline resource mapping.',
    features: [
      'Developed a resilient peer-to-peer communication system enabling message transmission without internet or cellular connectivity ("Works with zero connectivity").',
      'Implemented device-to-device communication using Bluetooth Low Energy (BLE) and Wi-Fi Direct for decentralized mesh networking.',
      'Designed a mobile application interface using React Native for real-time messaging, emergency SOS broadcasts, and field coordination.',
      'Integrated Mapbox and OpenStreetMap with PostGIS spatial data and compact Protocol Buffers for bandwidth-efficient transmission.',
      'Utilized WatermelonDB and SQLite for offline-first local persistence, synchronized across distributed nodes when connectivity recovers.'
    ],
    tech: ['React Native', 'TypeScript', 'Go', 'PostgreSQL', 'PostGIS', 'WatermelonDB', 'SQLite', 'Protocol Buffers', 'BLE Mesh', 'Wi-Fi Direct', 'Mapbox', 'Tailwind CSS', 'Git', 'GitHub'],
    github: 'https://github.com/Chamalka-heshi',
    demo: 'https://github.com/Chamalka-heshi'
  },
  'proj-1': {
    title: 'Elderly Care Home Records Management System',
    category: 'Modernized Care Home Management Platform',
    badge: 'Caregiver Operations & Day-to-Day Records',
    image: 'project-elderly-care.png',
    desc: 'A modernized digital healthcare and residential carehome platform ("Stay Comfortable Like Your Home") engineered specifically to ease day-to-day operations, resident care, and clinical workflows. Connects families, doctors, caregivers, and administrators with dedicated panels to monitor assigned patients, record daily care notes, log patient vitals with active critical alerts (BP, HR, SpO2, Temp), track medication administration status, and manage daily care schedules.',
    features: [
      'Engineered a specialized Caregiver Operations Dashboard providing real-time daily overviews, assigned patient counts, pending medications, and active vital alerts.',
      'Implemented Vital Records management with automatic clinical threshold checking to trigger immediate critical alerts for abnormal BP, Heart Rate, SpO2, or Temperature.',
      'Developed Medication Updates tracking (administered vs. pending) to ensure zero missed doses and strict scheduling compliance across patient rounds.',
      'Built Daily Care Notes and Care Schedule modules allowing caregivers to document routine observations and coordinate scheduled tasks.',
      'Created a warm, accessible public portal ("Stay Comfortable Like Your Home") with service breakdowns, cost & payment plans, and role-based authentication.',
      'Designed relational PostgreSQL schemas with TypeORM migrations and modular NestJS RESTful APIs for secure, role-based access control (RBAC).'
    ],
    tech: ['React', 'NestJS', 'PostgreSQL', 'TypeORM', 'TypeScript', 'Caregiver Panel', 'Vital Records', 'Medication Tracking', 'RBAC', 'Git', 'GitHub'],
    github: 'https://github.com/Chamalka-heshi',
    demo: 'https://github.com/Chamalka-heshi'
  },
  'proj-2': {
    title: 'Autonomous Chess Playing Robot',
    category: 'First Year Hardware Project',
    badge: 'Robotics & Computer Vision',
    image: 'project-chess-robot.svg',
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
        modalVisual.innerHTML = `
          <div class="modal-window-bar">
            <span class="window-dot red"></span>
            <span class="window-dot yellow"></span>
            <span class="window-dot green"></span>
            <span class="window-title">${data.title}</span>
          </div>
          <img src="${data.image}" alt="${data.title}" class="modal-preview-img" />
        `;
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

});

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
