/* =====================================================================
   site.js  ·  THE ENGINE  (you normally don't need to edit this)
   ---------------------------------------------------------------------
   It reads config.js (SITE_CONFIG) and data.js (SITE_DATA) and:
     • builds the top navigation and footer on every page
     • highlights the current page in the nav
     • fills the home-page hero (name, tagline, photo, buttons)
     • renders your lists (publications, courses, products, ...) as cards
   Each page just provides empty containers with the IDs used below.
   ===================================================================== */

(function () {
  "use strict";

  const cfg  = window.SITE_CONFIG || {};
  const data = window.SITE_DATA   || {};

  /* Pages in the navigation. To add/rename a page, edit this one list. */
  const PAGES = [
    { page: "home",     label: "Home",     href: "index.html"    },
    { page: "research", label: "Research", href: "research.html" },
    { page: "teaching", label: "Teaching & Training", href: "teaching.html" },
    { page: "products", label: "AI Products", href: "products.html" }
  ];

  /* small helper: get element by id (returns null if absent) */
  const $ = (id) => document.getElementById(id);

  /* small helper: only show a link if it has a value */
  const has = (v) => typeof v === "string" && v.trim() !== "";

  /* ---- BUILD NAVIGATION -------------------------------------------- */
  function buildNav() {
    const host = $("site-header");
    if (!host) return;
    const current = document.body.getAttribute("data-page");
    const links = PAGES.map(p =>
      `<li><a href="${p.href}" class="${p.page === current ? "is-active" : ""}">${p.label}</a></li>`
    ).join("");
    host.className = "nav";
    host.innerHTML = `
      <div class="nav__inner">
        <a class="nav__brand" href="index.html">${cfg.name || ""}</a>
        <nav><ul class="nav__links">${links}</ul></nav>
      </div>`;
  }

  /* ---- BUILD FOOTER ------------------------------------------------ */
  function buildFooter() {
    const host = $("site-footer");
    if (!host) return;
    const L = cfg.links || {};
    const pairs = [
      ["Google Scholar", L.scholar],
      ["YouTube",        L.youtube],
      ["GitHub",         L.github],
      ["LinkedIn",       L.linkedin],
      ["Email",          has(L.email) ? "mailto:" + L.email : ""]
    ];
    const links = pairs
      .filter(([, url]) => has(url))
      .map(([label, url]) => `<a href="${url}">${label}</a>`)
      .join("");
    host.className = "footer";
    host.innerHTML = `
      <div class="footer__inner">
        <span>&copy; <span id="year"></span> ${cfg.name || ""}</span>
        <div class="footer__links">${links}</div>
      </div>`;
    const y = $("year"); if (y) y.textContent = new Date().getFullYear();
  }

  /* ---- HOME PAGE: fill the hero ------------------------------------ */
  function buildHero() {
    if (!$("hero-name")) return;            // not on the home page
    const set = (id, val) => { const el = $(id); if (el) el.textContent = val || ""; };
    set("hero-name", cfg.name);
    set("hero-role", cfg.role);
    set("hero-tagline", cfg.tagline);
    set("hero-bio", cfg.bio);

    const photo = $("hero-photo-img");
    if (photo && cfg.photo) { photo.src = cfg.photo; photo.alt = cfg.name || "Profile photo"; }

    // CTA buttons (skips any whose link is empty)
    const ctaHost = $("hero-ctas");
    if (ctaHost && Array.isArray(cfg.ctas)) {
      ctaHost.innerHTML = cfg.ctas
        .filter(c => has((cfg.links || {})[c.key]))
        .map(c => `<a class="btn btn--${c.style || "primary"}" href="${cfg.links[c.key]}"
                      target="_blank" rel="noopener">${c.label}</a>`)
        .join("");
    }

    // focus-area pills
    const focusHost = $("focus-areas");
    if (focusHost && Array.isArray(cfg.focusAreas)) {
      focusHost.innerHTML = cfg.focusAreas.map(f => `<li>${f}</li>`).join("");
    }
  }

  /* ---- CARD TEMPLATES ---------------------------------------------
     Each returns the HTML for one card. Edit the markup here if you
     want to change how a card looks.                                  */
  const tpl = {
    publication: (p) => `
      <article class="card">
        <div class="card__meta">${p.year || ""}${p.venue ? " · " + p.venue : ""}</div>
        <h3 class="card__title">${p.title || ""}</h3>
        ${has(p.link) ? `<a class="card__link" href="${p.link}" target="_blank" rel="noopener">Read</a>` : ""}
      </article>`,

    simple: (it) => `
      <article class="card">
        ${it.meta ? `<div class="card__meta">${it.meta}</div>` : ""}
        <h3 class="card__title">${it.title || ""}</h3>
        ${it.note ? `<p>${it.note}</p>` : ""}
      </article>`,

    testimonial: (t) => `
      <blockquote class="quote">${t.quote || ""}<cite>${t.author || ""}</cite></blockquote>`,

    product: (p) => `
      <article class="card ${p.feature ? "card--feature" : ""}">
        ${p.meta ? `<div class="card__meta">${p.meta}</div>` : ""}
        <h3 class="card__title">${p.title || ""}</h3>
        ${p.desc ? `<p>${p.desc}</p>` : ""}
        ${has(p.link) ? `<a class="card__link" href="${p.link}" target="_blank" rel="noopener">${p.linkLabel || "Open"}</a>` : ""}
      </article>`
  };

  /* generic renderer: put rendered items into the container if it exists */
  function render(containerId, items, templateFn) {
    const host = $(containerId);
    if (!host || !Array.isArray(items)) return;
    host.innerHTML = items.map(templateFn).join("");
  }

  /* ---- RUN ON PAGE LOAD -------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    buildNav();
    buildFooter();
    buildHero();

    // Research page
    render("publications-list",  data.publications,  tpl.publication);
    render("workingpapers-list", data.workingPapers, tpl.simple);

    // Teaching page
    render("courses-list",      data.courses,      tpl.simple);
    render("training-list",     data.training,     tpl.simple);
    render("testimonials-list", data.testimonials, tpl.testimonial);

    // Products page
    render("products-list", data.products, tpl.product);
  });
})();
