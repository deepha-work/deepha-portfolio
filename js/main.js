/* ==========================================================================
   DEEPHA A. - BENTO GRID DESIGN SYSTEM INTERACTION LOGIC
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 1. Theme Management (Light / Dark Theme)
  initThemeEngine();

  // 2. Navigation & Mobile Drawer
  initNavigation();

  // 3. Interactive Bento Mouse Spotlight Glow & 3D Card Tilt
  initBentoGlow();
  init3DCardTilt();

  // 5. Render Dynamic Bento Content from data.js
  renderServices();
  renderProjects("all");
  renderExperience();
  renderEducation();
  renderSkills("all");
  renderPricing();
  renderTestimonials();
  renderFAQs();

  // 6. Interactive Project Filter Tabs
  initProjectFilters();

  // 7. Interactive Case Study Modal
  initCaseStudyModal();

  // 8. Interactive Freelance Cost Estimator
  initCostEstimator();

  // 9. Interactive Live CV / Resume Modal
  initResumeModal();

  // 10. Contact Form Handling & Copy Actions
  initContactSection();

  // 11. Stats Counter Animation on Scroll
  initStatsCounters();

  // 12. FAQ Accordions
  initFaqAccordion();

  // 13. Scroll Reveal Animations
  initScrollReveal();

  // 14. Ambient Glow Follower
  initAmbientGlow();

  // Re-bind interactive 3D listeners after content is populated
  setTimeout(() => {
    init3DCardTilt();
  }, 100);
});

/* ==========================================================================
   1. Theme Engine (Light / Dark Mode)
   ========================================================================== */
function initThemeEngine() {
  const themeToggleBtns = document.querySelectorAll(".theme-toggle-btn");
  const savedTheme = localStorage.getItem("portfolio_theme") || "light";

  setTheme(savedTheme);

  themeToggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      setTheme(newTheme);
      showToast(`Switched to ${newTheme.toUpperCase()} mode`, "sun");
    });
  });

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio_theme", theme);

    themeToggleBtns.forEach((btn) => {
      btn.innerHTML = theme === "dark" 
        ? `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>` 
        : `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
}

/* ==========================================================================
   2. Navigation, Sticky Header & Scroll Spy
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector(".header");
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileDrawer = document.querySelector(".mobile-nav-drawer");
  const mobileBackdrop = document.querySelector(".mobile-nav-backdrop");
  const mobileCloseBtn = document.querySelector(".mobile-drawer-close");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sticky header on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  // Mobile Drawer Toggle
  function toggleMobileMenu(open) {
    if (open) {
      mobileDrawer?.classList.add("open");
      mobileBackdrop?.classList.add("open");
      document.body.style.overflow = "hidden";
    } else {
      mobileDrawer?.classList.remove("open");
      mobileBackdrop?.classList.remove("open");
      document.body.style.overflow = "";
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => toggleMobileMenu(true));
  }
  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener("click", () => toggleMobileMenu(false));
  }
  if (mobileBackdrop) {
    mobileBackdrop.addEventListener("click", () => toggleMobileMenu(false));
  }

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => toggleMobileMenu(false));
  });

  // Scroll Spy for active nav items
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset + 140;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}

/* ==========================================================================
   3. Bento Card Mouse Spotlight Hover Glow & 3D Interactive Physics
   ========================================================================== */
function initBentoGlow() {
  document.addEventListener("mousemove", (e) => {
    const cards = document.querySelectorAll(
      ".bento-card, .bento-service-card, .bento-project-card, .bento-pricing-card, .bento-review-card, .bento-timeline-card, .bento-education-card, .bento-skills-card, .bento-estimator-config, .bento-estimator-receipt, .bento-contact-info, .bento-contact-form-card, .bento-footer-card"
    );
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}

function init3DCardTilt() {
  if (!window.matchMedia("(pointer: fine)").matches) return;

  const tiltCards = document.querySelectorAll(
    ".bento-card, .bento-service-card, .bento-project-card, .bento-metric-card, .bento-pricing-card, .bento-timeline-card, .bento-education-card, .bento-skills-card, .bento-review-card, .bento-estimator-config, .bento-estimator-receipt, .bento-contact-info, .bento-contact-form-card"
  );

  tiltCards.forEach((card) => {
    card.classList.add("tilt-card");

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Subtle editorial tilt physics (max 3.2 degrees)
      const rotateX = ((y - centerY) / centerY) * -2.8;
      const rotateY = ((x - centerX) / centerX) * 2.8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-3px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  });
}


/* ==========================================================================
   5. Render Services Section
   ========================================================================== */
function renderServices() {
  const container = document.getElementById("services-grid-container");
  if (!container || !window.portfolioData) return;

  container.innerHTML = window.portfolioData.services
    .map(
      (s, idx) => `
    <div class="bento-service-card ${idx < 2 ? "featured" : ""}" data-service-id="${s.id}">
      <div class="service-card-top">
        <div class="service-card-header">
          <div class="bento-icon-badge">
            ${
              s.icon === "figma"
                ? `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>`
                : `<i data-lucide="${s.icon || "code"}"></i>`
            }
          </div>
          <span class="service-card-number">${s.number}</span>
        </div>

        <span class="bento-pill-tag accent" style="margin-bottom: 12px;">${s.category}</span>
        <h3 class="service-card-title">${s.title}</h3>
        <p class="service-card-desc">${s.desc}</p>

        <div class="service-deliverables-list">
          ${s.deliverables
            .map(
              (d) => `
            <div class="service-deliverable-item">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="var(--accent-primary)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
              <span>${d}</span>
            </div>
          `
            )
            .join("")}
        </div>
      </div>

      <div class="service-card-action">
        <button class="service-action-link select-service-cta magnetic-btn" data-service-title="${s.title}" style="background: none; border: none; cursor: pointer;">
          <span>Inquire for Scope</span>
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </button>
      </div>
    </div>
  `
    )
    .join("");

  // Attach click listener to direct service inquiry
  container.querySelectorAll(".select-service-cta").forEach((btn) => {
    btn.addEventListener("click", () => {
      const serviceTitle = btn.getAttribute("data-service-title");
      const serviceSelect = document.getElementById("contact-service");
      if (serviceSelect) {
        serviceSelect.value = serviceTitle;
      }
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      showToast(`Selected "${serviceTitle}" for inquiry`, "check");
    });
  });

  if (window.lucide) window.lucide.createIcons();
  init3DCardTilt();
}

/* ==========================================================================
   6. Render Projects & Filter Logic
   ========================================================================== */
function renderProjects(filter = "all") {
  const container = document.getElementById("projects-grid-container");
  if (!container || !window.portfolioData) return;

  const projects = window.portfolioData.projects.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  container.innerHTML = projects
    .map(
      (p) => `
    <article class="bento-project-card" data-id="${p.id}">
      <div class="project-media-frame open-case-study" data-project-id="${p.id}">
        <span class="project-category-badge">${p.categoryLabel}</span>
        <img src="${p.image}" alt="${p.title}" class="project-thumbnail-img" loading="lazy" />
      </div>

      <div class="project-card-body open-case-study" data-project-id="${p.id}">
        <div>
          <h3 class="project-card-title">${p.title}</h3>
          <p class="project-card-tagline">${p.tagline}</p>

          <div class="project-metrics-strip">
            ${p.metrics.map((m) => `<span class="project-metric-pill">${m.label}: <strong>${m.value}</strong></span>`).join("")}
          </div>

          <div class="project-tech-tags">
            ${p.technologies.map((t) => `<span class="project-tech-pill">${t}</span>`).join("")}
          </div>
        </div>

        <div class="project-card-footer">
          <button class="btn btn-primary btn-sm open-case-study magnetic-btn" data-project-id="${p.id}">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            <span>Case Study</span>
          </button>
          <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm magnetic-btn" onclick="event.stopPropagation();">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </article>
  `
    )
    .join("");

  // Attach modal triggers
  container.querySelectorAll(".open-case-study").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pId = btn.getAttribute("data-project-id");
      openProjectModal(pId);
    });
  });

  if (window.lucide) window.lucide.createIcons();
  init3DCardTilt();
}

function initProjectFilters() {
  const filterTabs = document.querySelectorAll(".filter-tab");
  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const category = tab.getAttribute("data-filter");
      renderProjects(category);
    });
  });
}

/* ==========================================================================
   7. Interactive Case Study Modal
   ========================================================================== */
function initCaseStudyModal() {
  const modalBackdrop = document.getElementById("case-study-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  if (!modalBackdrop) return;

  function closeModal() {
    modalBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("open")) {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  const project = window.portfolioData.projects.find((p) => p.id === projectId);
  const modal = document.getElementById("case-study-modal");
  const contentContainer = document.getElementById("modal-dynamic-content");

  if (!project || !modal || !contentContainer) return;

  contentContainer.innerHTML = `
    <div class="modal-header-hero">
      <img src="${project.image}" alt="${project.title}" class="modal-header-img" />
    </div>

    <div class="modal-content-body">
      <span class="bento-pill-tag accent" style="margin-bottom: 12px;">${project.categoryLabel} • Case Study</span>
      <h2 style="font-size: 2rem; margin-bottom: 8px;">${project.title}</h2>
      <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 24px;">${project.tagline}</p>

      <div class="modal-metrics-grid">
        ${project.metrics
          .map(
            (m) => `
          <div class="modal-metric-card">
            <div style="font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; color: var(--accent-primary);">${m.value}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">${m.label}</div>
          </div>
        `
          )
          .join("")}
      </div>

      <div style="margin: 28px 0;">
        <h4 style="font-size: 1.15rem; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
          <i data-lucide="info" style="color: var(--accent-primary);"></i> Project Overview
        </h4>
        <p style="font-size: 0.98rem; line-height: 1.7; color: var(--text-secondary);">${project.overview}</p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 28px;">
        <div style="background: var(--bg-secondary); padding: 20px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
          <h5 style="font-size: 1rem; margin-bottom: 8px; color: var(--text-primary); display: flex; align-items: center; gap: 8px;">
            <i data-lucide="alert-circle" style="color: #EF4444; width: 18px; height: 18px;"></i> The Challenge
          </h5>
          <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">${project.challenge}</p>
        </div>

        <div style="background: var(--bg-secondary); padding: 20px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
          <h5 style="font-size: 1rem; margin-bottom: 8px; color: var(--text-primary); display: flex; align-items: center; gap: 8px;">
            <i data-lucide="check-circle" style="color: #10B981; width: 18px; height: 18px;"></i> The Solution
          </h5>
          <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">${project.solution}</p>
        </div>
      </div>

      <div style="margin-bottom: 28px;">
        <h4 style="font-size: 1.15rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <i data-lucide="sparkles" style="color: var(--accent-primary);"></i> Key Features & Deliverables
        </h4>
        <div class="modal-feature-list">
          ${project.features
            .map(
              (f) => `
            <div class="modal-feature-item">
              <i data-lucide="check"></i>
              <span>${f}</span>
            </div>
          `
            )
            .join("")}
        </div>
      </div>

      <div style="margin-bottom: 32px;">
        <h4 style="font-size: 1.15rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <i data-lucide="code" style="color: var(--accent-primary);"></i> Technologies & Tools
        </h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${project.technologies.map((t) => `<span class="bento-pill-tag">${t}</span>`).join("")}
        </div>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 12px; padding-top: 24px; border-top: 1px solid var(--border-subtle);">
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-accent magnetic-btn">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
          <span>Launch Live Preview</span>
        </a>
        <a href="${project.figmaUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary magnetic-btn">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>
          <span>View Figma Specs</span>
        </a>
        <button class="btn btn-outline request-similar-cta magnetic-btn" data-project-title="${project.title}">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          <span>Request Similar Solution</span>
        </button>
      </div>
    </div>
  `;

  // Attach Request Similar button
  contentContainer.querySelector(".request-similar-cta")?.addEventListener("click", () => {
    modal.classList.remove("open");
    document.body.style.overflow = "";
    const msgArea = document.getElementById("contact-message");
    if (msgArea) {
      msgArea.value = `Hi Deepha, I explored your case study for "${project.title}". I would love to build a similar high-performance web solution for my project.`;
    }
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    showToast(`Pre-filled message for ${project.title}`, "check");
  });

  if (window.lucide) window.lucide.createIcons();

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

/* ==========================================================================
   8. Interactive Cost Estimator & Quote Calculator
   ========================================================================== */
function initCostEstimator() {
  const typeButtons = document.querySelectorAll(".estimator-type-btn");
  const scopeButtons = document.querySelectorAll(".estimator-scope-btn");
  const addonCheckboxes = document.querySelectorAll(".estimator-addon-check");
  const exportBtn = document.getElementById("estimator-export-btn");
  const scopeWrapper = document.getElementById("scope-selection-wrapper");

  const priceDisplay = document.getElementById("estimator-price-val");
  const timelineDisplay = document.getElementById("estimator-timeline-val");
  const specTypeDisplay = document.getElementById("spec-type-val");
  const specScopeDisplay = document.getElementById("spec-scope-val");
  const specAddonsDisplay = document.getElementById("spec-addons-val");

  let selectedType = { name: "Single Landing Page", basePrice: 3500, baseDays: 3 };
  let selectedScope = { name: "1 Page (Landing Page)", multiplier: 1, daysAdd: 0 };
  let selectedAddons = [];
  let lastScopeChoice = { name: "3 – 5 Pages Scope", multiplier: 4, daysAdd: 2 };

  // Type selection
  typeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      typeButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const typeName = btn.getAttribute("data-name");
      selectedType = {
        name: typeName,
        basePrice: parseInt(btn.getAttribute("data-price"), 10),
        baseDays: parseInt(btn.getAttribute("data-days"), 10)
      };

      if (typeName === "Single Landing Page") {
        if (scopeWrapper) scopeWrapper.classList.add("muted");
        scopeButtons.forEach((b) => b.classList.remove("active"));
        selectedScope = { name: "1 Page (Landing Page)", multiplier: 1, daysAdd: 0 };
      } else {
        if (scopeWrapper) scopeWrapper.classList.remove("muted");
        let activeScopeBtn = document.querySelector(".estimator-scope-btn.active");
        if (!activeScopeBtn && scopeButtons.length > 0) {
          const matchBtn = Array.from(scopeButtons).find(b => b.getAttribute("data-name") === lastScopeChoice.name) || scopeButtons[0];
          matchBtn.classList.add("active");
          activeScopeBtn = matchBtn;
        }
        if (activeScopeBtn) {
          selectedScope = {
            name: activeScopeBtn.getAttribute("data-name"),
            multiplier: parseFloat(activeScopeBtn.getAttribute("data-multiplier")),
            daysAdd: parseInt(activeScopeBtn.getAttribute("data-days-add"), 10)
          };
          lastScopeChoice = { ...selectedScope };
        }
      }

      calculateTotal();
    });
  });

  // Scope selection
  scopeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (selectedType.name === "Single Landing Page") return;
      scopeButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedScope = {
        name: btn.getAttribute("data-name"),
        multiplier: parseFloat(btn.getAttribute("data-multiplier")),
        daysAdd: parseInt(btn.getAttribute("data-days-add"), 10)
      };
      lastScopeChoice = { ...selectedScope };
      calculateTotal();
    });
  });

  // Addons selection
  addonCheckboxes.forEach((chk) => {
    chk.addEventListener("change", () => {
      selectedAddons = [];
      addonCheckboxes.forEach((c) => {
        if (c.checked) {
          selectedAddons.push({
            name: c.getAttribute("data-name"),
            price: parseInt(c.getAttribute("data-price"), 10),
            days: parseInt(c.getAttribute("data-days"), 10)
          });
        }
      });
      calculateTotal();
    });
  });

  let lastEstimatedPrice = 3500;

  function animatePriceCount(from, to) {
    if (!priceDisplay) return;
    const duration = 280;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(from + (to - from) * ease);
      priceDisplay.textContent = `₹${current.toLocaleString('en-IN')}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        priceDisplay.textContent = `₹${to.toLocaleString('en-IN')}`;
        lastEstimatedPrice = to;
      }
    }
    requestAnimationFrame(step);
  }

  function calculateTotal() {
    let totalBase = selectedType.basePrice * selectedScope.multiplier;
    let addonsTotal = selectedAddons.reduce((acc, curr) => acc + curr.price, 0);
    let totalEstimated = Math.round(totalBase + addonsTotal);

    let totalDays = selectedType.baseDays + selectedScope.daysAdd + selectedAddons.reduce((acc, curr) => acc + curr.days, 0);

    animatePriceCount(lastEstimatedPrice, totalEstimated);

    if (timelineDisplay) {
      timelineDisplay.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -2px; margin-right: 4px;"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg> Estimated Turnaround: <strong>${totalDays} – ${totalDays + 4} Business Days</strong>`;
    }
    if (specTypeDisplay) specTypeDisplay.textContent = selectedType.name;
    if (specScopeDisplay) specScopeDisplay.textContent = selectedScope.name;
    if (specAddonsDisplay) {
      specAddonsDisplay.textContent = selectedAddons.length > 0 
        ? selectedAddons.map(a => a.name).join(", ") 
        : "Standard Inclusions";
    }

    if (window.lucide) window.lucide.createIcons();
  }

  // Export to contact form
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      const budgetSelect = document.getElementById("contact-budget");
      const serviceSelect = document.getElementById("contact-service");
      const msgArea = document.getElementById("contact-message");

      if (serviceSelect) {
        serviceSelect.value = selectedType.name.includes("Dashboard") 
          ? "Admin Dashboards & Portals" 
          : "Custom Website Development";
      }

      if (budgetSelect) {
        let price = parseInt(priceDisplay.textContent.replace(/[^0-9]/g, ""), 10);
        if (price <= 8000) budgetSelect.value = "₹3,500 - ₹10,000";
        else if (price <= 25000) budgetSelect.value = "₹10,000 - ₹25,000";
        else budgetSelect.value = "₹25,000+";
      }

      if (msgArea) {
        msgArea.value = `Hi Deepha,\n\nI generated a project estimate on your portfolio:\n- Project Type: ${selectedType.name}\n- Scope: ${selectedScope.name}\n- Add-ons: ${selectedAddons.length > 0 ? selectedAddons.map(a => a.name).join(", ") : "Standard Inclusions"}\n- Estimated Budget: ${priceDisplay.textContent}\n\nLet's connect and discuss the next steps!`;
      }

      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      showToast("Estimate specs copied to Contact Form!", "arrow-down");
    });
  }

  // Initial computation
  calculateTotal();
}

/* ==========================================================================
   9. Experience, Education & Skills Rendering
   ========================================================================== */
function renderExperience() {
  const container = document.getElementById("timeline-container");
  if (!container || !window.portfolioData) return;

  const expData = window.portfolioData.experience;
  let activeIndex = 0;

  function renderExpTabs() {
    container.innerHTML = `
      <div class="timeline-tabs">
        ${expData.map((e, idx) => `
          <button class="timeline-tab-btn ${idx === activeIndex ? "active" : ""}" data-exp-idx="${idx}">
            ${e.company}
          </button>
        `).join("")}
      </div>

      <div class="timeline-detail-box">
        <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 8px; margin-bottom: 6px;">
          <h4 class="timeline-role-title">${expData[activeIndex].role}</h4>
          <span class="bento-pill-tag accent">${expData[activeIndex].period}</span>
        </div>
        <div class="timeline-company-row">
          <strong>${expData[activeIndex].company}</strong> • <span>${expData[activeIndex].location}</span> • <span style="color: var(--accent-primary); font-weight: 600;">${expData[activeIndex].type}</span>
        </div>
        <p style="font-size: 0.94rem; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.6;">${expData[activeIndex].description}</p>
        
        <div class="timeline-achievements-list">
          ${expData[activeIndex].achievements.map(ach => `
            <div class="timeline-achievement-item">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="var(--accent-primary)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              <span>${ach}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    container.querySelectorAll(".timeline-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        activeIndex = parseInt(btn.getAttribute("data-exp-idx"), 10);
        renderExpTabs();
      });
    });

    if (window.lucide) window.lucide.createIcons();
    init3DCardTilt();
  }

  renderExpTabs();
}

function renderEducation() {
  const container = document.getElementById("education-cards-container");
  const certContainer = document.getElementById("certifications-container");
  if (!window.portfolioData) return;

  if (container) {
    container.innerHTML = window.portfolioData.education
      .map(
        (edu) => `
      <div class="edu-item-box">
        <div class="edu-degree-title">${edu.degree}</div>
        <div class="edu-institution">${edu.institution} • ${edu.location}</div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 8px;">
          <span style="font-size: 0.82rem; color: var(--text-muted);">${edu.period}</span>
          <span class="edu-score-chip">${edu.score}</span>
        </div>
      </div>
    `
      )
      .join("");
  }

  if (certContainer) {
    certContainer.innerHTML = window.portfolioData.certifications
      .map(
        (cert) => `
      <div class="edu-item-box">
        <div class="edu-degree-title">${cert.title}</div>
        <div class="edu-institution">${cert.issuer} • ${cert.year}</div>
      </div>
    `
      )
      .join("");
  }

  if (window.lucide) window.lucide.createIcons();
  init3DCardTilt();
}

function renderSkills(category = "all") {
  const container = document.getElementById("skills-progress-container");
  if (!container || !window.portfolioData) return;

  let skillList = [];
  if (category === "all" || category === "frontend") {
    skillList.push(...window.portfolioData.skills.frontend);
  }
  if (category === "all" || category === "design") {
    skillList.push(...window.portfolioData.skills.design);
  }
  if (category === "tools") {
    skillList.push(...window.portfolioData.skills.tools);
  }

  container.innerHTML = skillList
    .map(
      (s) => `
    <div class="skill-progress-item">
      <div class="skill-label-row">
        <span>${s.name}</span>
        <span style="color: var(--accent-primary); font-weight: 700;">${s.level}%</span>
      </div>
      <div class="skill-progress-track">
        <div class="skill-progress-fill" style="width: ${s.level}%;"></div>
      </div>
    </div>
  `
    )
    .join("");

  // Filter tabs for skills
  const skillTabs = document.querySelectorAll(".skill-tab-btn");
  skillTabs.forEach((tab) => {
    tab.onclick = () => {
      skillTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      renderSkills(tab.getAttribute("data-skill-cat"));
    };
  });
}

function renderPricing() {
  const container = document.getElementById("pricing-grid-container");
  if (!container || !window.portfolioData) return;

  container.innerHTML = window.portfolioData.pricingPackages
    .map(
      (pkg) => `
    <div class="bento-pricing-card ${pkg.popular ? "popular" : ""}">
      ${pkg.popular ? `<span class="pricing-badge-popular">Most Popular Choice</span>` : ""}
      <div>
        <h3 class="pricing-tier-name">${pkg.name}</h3>
        <p class="pricing-tier-tagline">${pkg.tagline}</p>

        <div class="pricing-price-box">
          <span class="pricing-price-amount">${pkg.price}</span>
          <span class="pricing-price-period">/${pkg.pricePeriod}</span>
        </div>

        <div class="pricing-features-list">
          ${pkg.features
            .map(
              (f) => `
            <div class="pricing-feature-item">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="var(--accent-primary)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><polyline points="20 6 9 17 4 12"/></svg>
              <span>${f}</span>
            </div>
          `
            )
            .join("")}
        </div>
      </div>

      <button class="btn ${pkg.popular ? "btn-accent" : "btn-primary"} select-package-btn" data-pkg-name="${pkg.name}" data-pkg-price="${pkg.price}">
        <span>${pkg.ctaText}</span>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
      </button>
    </div>
  `
    )
    .join("");

  // Attach package triggers
  container.querySelectorAll(".select-package-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pkgName = btn.getAttribute("data-pkg-name");
      const pkgPrice = btn.getAttribute("data-pkg-price");
      const msgArea = document.getElementById("contact-message");
      if (msgArea) {
        msgArea.value = `Hi Deepha, I want to book your "${pkgName}" package (${pkgPrice}). Here is what I am looking to build: `;
      }
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      showToast(`Selected "${pkgName}" package`, "check");
    });
  });

  if (window.lucide) window.lucide.createIcons();
  init3DCardTilt();
}

function renderTestimonials() {
  const container = document.getElementById("testimonials-grid-container");
  if (!container || !window.portfolioData) return;

  const goldStar = `<svg viewBox="0 0 24 24" width="16" height="16" fill="#F59E0B" stroke="#F59E0B" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;

  container.innerHTML = window.portfolioData.testimonials
    .map(
      (t) => `
    <div class="bento-review-card">
      <div>
        <div class="review-stars-row" style="display: flex; gap: 4px; margin-bottom: 14px;">
          ${Array(t.rating).fill(goldStar).join("")}
        </div>
        <p class="review-quote-text">"${t.quote}"</p>
      </div>

      <div class="review-author-box">
        <div class="review-author-avatar">${t.avatarText}</div>
        <div>
          <div class="review-author-name">${t.name}</div>
          <div class="review-author-role">${t.role}</div>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  if (window.lucide) window.lucide.createIcons();
  init3DCardTilt();
}

function renderFAQs() {
  const container = document.getElementById("faq-accordion-container");
  if (!container || !window.portfolioData) return;

  container.innerHTML = window.portfolioData.faqs
    .map(
      (faq, idx) => `
    <div class="bento-faq-card ${idx === 0 ? "open" : ""}">
      <button class="faq-header-trigger">
        <span>${faq.q}</span>
        <svg class="faq-icon-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="faq-body-collapse">
        <p>${faq.a}</p>
      </div>
    </div>
  `
    )
    .join("");

  if (window.lucide) window.lucide.createIcons();
  init3DCardTilt();
}

function initFaqAccordion() {
  const container = document.getElementById("faq-accordion-container");
  if (!container) return;

  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".faq-header-trigger");
    if (!btn) return;

    const item = btn.parentElement;
    const isOpen = item.classList.contains("open");

    // Close others
    container.querySelectorAll(".bento-faq-card").forEach((i) => i.classList.remove("open"));

    if (!isOpen) {
      item.classList.add("open");
    }
  });
}

/* ==========================================================================
   10. Live Resume / CV Modal
   ========================================================================== */
function initResumeModal() {
  const resumeModal = document.getElementById("resume-modal");
  const openResumeBtns = document.querySelectorAll(".open-resume-modal");
  const closeResumeBtn = document.getElementById("resume-modal-close");
  const printResumeBtn = document.getElementById("print-resume-btn");

  if (!resumeModal) return;

  openResumeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      resumeModal.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  function closeResume() {
    resumeModal.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (closeResumeBtn) closeResumeBtn.addEventListener("click", closeResume);

  resumeModal.addEventListener("click", (e) => {
    if (e.target === resumeModal) closeResume();
  });

  if (printResumeBtn) {
    printResumeBtn.addEventListener("click", () => {
      window.print();
    });
  }
}

/* ==========================================================================
   11. Contact Form & Action Handlers
   ========================================================================== */
function initContactSection() {
  const form = document.getElementById("portfolio-contact-form");
  const copyEmailBtns = document.querySelectorAll(".copy-email-trigger");
  const copyPhoneBtns = document.querySelectorAll(".copy-phone-trigger");

  // Copy Email
  copyEmailBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      navigator.clipboard.writeText("deephaarunachalam@gmail.com");
      showToast("Email address copied to clipboard!", "copy");
    });
  });

  // Copy Phone
  copyPhoneBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      navigator.clipboard.writeText("+916369387192");
      showToast("Phone number copied to clipboard!", "phone");
    });
  });

  // WhatsApp direct form submission
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("contact-name")?.value.trim() || "";
      const email = document.getElementById("contact-email")?.value.trim() || "";
      const service = document.getElementById("contact-service")?.value || "Custom Website Development";
      const budget = document.getElementById("contact-budget")?.value || "₹10,000 - ₹25,000";
      const message = document.getElementById("contact-message")?.value.trim() || "";

      if (!name || !message) {
        showToast("Please enter your name and project message.", "alert");
        return;
      }

      const submitBtn = form.querySelector("button[type='submit']");
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Opening WhatsApp...</span>`;

      const formattedMsg = `Hi Deepha! 👋\n\nI would like to discuss a project inquiry from your portfolio:\n\n• *Name:* ${name}\n• *Email:* ${email || "Not provided"}\n• *Service:* ${service}\n• *Estimated Budget:* ${budget}\n\n*Project Details:*\n${message}`;

      const waUrl = `https://wa.me/916369387192?text=${encodeURIComponent(formattedMsg)}`;

      showToast("Redirecting to WhatsApp chat...", "check");

      setTimeout(() => {
        window.open(waUrl, "_blank");
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 500);
    });
  }
}

/* ==========================================================================
   12. Toast Notification System
   ========================================================================== */
function showToast(message, icon = "info") {
  let toastContainer = document.querySelector(".toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <i data-lucide="${icon}"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

/* ==========================================================================
   13. Stats Counter Animation
   ========================================================================== */
function initStatsCounters() {
  const statNumbers = document.querySelectorAll(".stat-number[data-target]");
  let animated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          statNumbers.forEach((counter) => {
            const target = +counter.getAttribute("data-target");
            const suffix = counter.getAttribute("data-suffix") || "";
            let count = 0;
            const step = Math.ceil(target / 40);

            const timer = setInterval(() => {
              count += step;
              if (count >= target) {
                counter.innerHTML = `${target}<span style="color: var(--accent-primary);">${suffix}</span>`;
                clearInterval(timer);
              } else {
                counter.innerHTML = `${count}<span style="color: var(--accent-primary);">${suffix}</span>`;
              }
            }, 35);
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  const statsSection = document.querySelector(".bento-hero-metrics");
  if (statsSection) observer.observe(statsSection);
}

/* ==========================================================================
   14. Scroll Reveal Observer
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    ".section-header, .bento-hero-main, .bento-hero-studio, .bento-hero-location, .bento-hero-metrics, .bento-service-card, .bento-project-card, .bento-pricing-card, .bento-review-card, .bento-timeline-card, .bento-education-card, .bento-skills-card, .bento-estimator-config, .bento-estimator-receipt, .bento-contact-info, .bento-contact-form-card, .bento-faq-card"
  );

  revealElements.forEach((el, index) => {
    el.classList.add("reveal");
    if (index % 3 === 1) el.classList.add("delay-100");
    if (index % 3 === 2) el.classList.add("delay-200");
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}

/* ==========================================================================
   15. Ambient Glow Cursor Follower
   ========================================================================== */
function initAmbientGlow() {
  if (window.matchMedia("(pointer: fine)").matches) {
    const follower = document.createElement("div");
    follower.className = "ambient-glow-follower";
    document.body.appendChild(follower);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateFollower() {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;
      follower.style.left = `${currentX}px`;
      follower.style.top = `${currentY}px`;
      requestAnimationFrame(animateFollower);
    }

    animateFollower();
  }
}
