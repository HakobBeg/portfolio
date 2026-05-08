(function () {
  'use strict';

  // ── Load data (injected via data.js <script> tag) ──────────────────
  const data = window.PORTFOLIO_DATA;
  const { meta, hero, about, skills, experience, education, projects, contact } = data;

  // ── SVG icon map ───────────────────────────────────────────────────
  const ICONS = {
    github: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.7-1.4-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.6 3.3-1.2 3.3-1.2.7 1.7.2 3 .1 3.3.8.9 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>`,
    linkedin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.4 3H3.6A.6.6 0 0 0 3 3.6v16.8a.6.6 0 0 0 .6.6h16.8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6ZM8.9 18.4H6V9.6h2.9v8.8ZM7.4 8.3a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4Zm11 10.1H15.5v-4.3c0-1 0-2.4-1.5-2.4s-1.7 1.1-1.7 2.3v4.4H9.5V9.6h2.7v1.2A3 3 0 0 1 15 9.4c2.9 0 3.4 1.9 3.4 4.4v4.6Z"/></svg>`,
    twitter: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-7.5 8.6L23 22h-6.9l-5.4-7-6.2 7H1.4l8-9.1L1 2h7l4.9 6.5L18.9 2Zm-1.2 18h1.7L6.4 4H4.6l13.1 16Z"/></svg>`,
    upwork: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.6 6.3c-2.4 0-4.3 1.6-5.1 4-1.2-1.8-2-4-2.4-6H8.4v7.4c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7V4.3H.4v7.4c0 3 2.4 5.5 5.3 5.5s5.3-2.5 5.3-5.5v-1.2c.4 1 .9 2 1.5 2.9l-1.3 6.3h2.6l1-4.6c.8.5 1.7.8 2.8.8 2.9 0 5.3-2.5 5.3-5.6 0-3.1-2.4-5.5-5.3-5.5Zm0 8.5c-1.1 0-2.1-.5-2.9-1.2l.2-.9.1-.1c.2-1 .8-2.7 2.6-2.7 1.4 0 2.5 1.2 2.5 2.5 0 1.4-1.1 2.5-2.5 2.5Z"/></svg>`,
    resume: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>`,
    mail: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16v16H4z"/><path d="m4 6 8 7 8-7"/></svg>`,
    arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>`,
    extLink: `<svg class="ext" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>`,
    graduation: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="m2 9 10-5 10 5-10 5L2 9Z"/><path d="M6 11v5c0 1 2.5 3 6 3s6-2 6-3v-5"/><path d="M22 9v5"/></svg>`,
    graduationSimple: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="m2 9 10-5 10 5-10 5L2 9Z"/><path d="M6 11v5c0 1 2.5 3 6 3s6-2 6-3v-5"/></svg>`,
    lock: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  };

  // ── Helpers ────────────────────────────────────────────────────────
  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function tags(arr) {
    return arr.map(t => `<span class="tag">${esc(t)}</span>`).join('');
  }

  function secHeader(eyebrow, title, lede) {
    return `<span class="sec-eyebrow">${eyebrow}</span>
            <h2 class="sec-title">${title}</h2>
            ${lede ? `<p class="sec-lede">${lede}</p>` : ''}`;
  }

  // Mock layout patterns for project cards (decorative, cycles through variants)
  const MOCK_LAYOUTS = [
    `<div class="side"><i></i><i></i><i></i><i></i><i></i><i></i></div>
     <div class="main">
       <div class="row"><i class="acc"></i><i></i><i></i></div>
       <div class="bar"></div><div class="bar short"></div>
       <div class="row"><i></i><i class="acc"></i></div>
     </div>`,
    `<div class="side"><i></i><i></i><i></i><i></i><i></i></div>
     <div class="main">
       <div class="row"><i class="acc"></i><i></i></div>
       <div class="row"><i></i><i class="acc"></i><i></i></div>
       <div class="bar"></div>
     </div>`,
    `<div class="side"><i></i><i></i><i></i><i></i></div>
     <div class="main">
       <div class="row"><i class="acc"></i><i></i><i></i></div>
       <div class="bar"></div><div class="bar short"></div>
     </div>`,
    `<div class="side"><i></i><i></i><i></i><i></i><i></i><i></i></div>
     <div class="main">
       <div class="row"><i></i><i class="acc"></i></div>
       <div class="bar"></div>
       <div class="row"><i class="acc"></i><i></i><i></i></div>
     </div>`,
  ];

  // ── Page title ─────────────────────────────────────────────────────
  document.title = meta.pageTitle;

  // ── Nav ────────────────────────────────────────────────────────────
  document.getElementById('nav-logo').innerHTML =
    `<span>${esc(meta.domain)}<span style="color:var(--muted-2)">${esc(meta.domainTld)}</span></span>`;

  const NAV_SECTIONS = [
    { id: 'about',      label: 'About'        },
    { id: 'skills',     label: 'Skills'       },
    { id: 'experience', label: 'Experience'   },
    { id: 'education',  label: 'Education'    },
    { id: 'work',       label: 'Work'         },
    { id: 'contact',    label: 'Get in touch →', cta: true },
  ];

  function buildNavLinks(container) {
    NAV_SECTIONS.forEach(({ id, label, cta }) => {
      const a = document.createElement('a');
      a.href = '#' + id;
      a.textContent = label;
      if (cta) a.className = 'nav-cta';
      container.appendChild(a);
    });
  }
  buildNavLinks(document.getElementById('nav-links'));
  buildNavLinks(document.getElementById('mobile-nav-links'));

  // ── Hero ───────────────────────────────────────────────────────────
  document.getElementById('hero-content').innerHTML = `
    <div class="reveal" style="transition-delay:0ms">
      <span class="pill"><span class="pill-dot"></span>${esc(meta.availability)}</span>
    </div>
    <h1 class="hero-title reveal" style="transition-delay:80ms">
      <span class="grad">${hero.titleGrad}</span><br>
      ${hero.titleRest}
    </h1>
    <p class="hero-sub reveal" style="transition-delay:200ms">${hero.intro}</p>
    <div class="hero-meta reveal" style="transition-delay:320ms">
      ${hero.highlights.map(h => `<span><b>${esc(h.value)}</b>&nbsp; ${esc(h.label)}</span>`).join('')}
    </div>
    <div class="cta-row reveal" style="transition-delay:420ms">
      <a class="btn btn-primary" href="${esc(hero.ctaPrimary.href)}">
        ${esc(hero.ctaPrimary.label)} <span class="arrow">→</span>
      </a>
      <a class="btn btn-ghost" href="${esc(hero.ctaSecondary.href)}">
        ${ICONS.mail} ${esc(hero.ctaSecondary.label)}
      </a>
    </div>`;

  // Code card
  const codeLines = hero.codeCard.lines.map(line => {
    const ln = `<span class="ln">${line.n}</span> `;
    if (!line.parts || line.parts.length === 0) return ln + '\n';
    const content = line.parts.map(p =>
      p.c ? `<span class="tk-${esc(p.c)}">${esc(p.t)}</span>` : esc(p.t)
    ).join('');
    const caret = line.caret ? '<span class="caret"></span>' : '';
    return ln + content + caret + '\n';
  }).join('');

  document.getElementById('code-card-wrap').innerHTML = `
    <div class="code-card">
      <div class="code-card-inner">
        <div class="code-head">
          <span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>
          <span class="file">${esc(hero.codeCard.filename)}</span>
        </div>
        <pre class="code-body" style="margin:0;">${codeLines}</pre>
      </div>
    </div>`;

  // ── About ──────────────────────────────────────────────────────────
  document.getElementById('about-header').innerHTML =
    `<span class="sec-eyebrow">${about.eyebrow}</span>
     <h2 class="sec-title">${about.title}</h2>`;

  document.getElementById('about-grid').innerHTML = `
    <div class="about-copy reveal">
      ${about.paragraphs.map(p => `<p>${p}</p>`).join('')}
    </div>
    <div class="stats reveal stagger">
      ${about.stats.map(s => `
        <div class="stat">
          <div class="stat-num">${esc(s.value)}</div>
          <div class="stat-lbl">${esc(s.label)}</div>
        </div>`).join('')}
    </div>`;

  // ── Skills ─────────────────────────────────────────────────────────
  document.getElementById('skills-header').innerHTML =
    secHeader(skills.eyebrow, skills.title, skills.lede);

  document.getElementById('skills-grid').innerHTML =
    skills.items.map(s => `
      <div class="skill-card mouse-track" style="--lvl:${s.level}%">
        <div class="skill-head">
          <div class="skill-name">${esc(s.name)}</div>
          <div class="skill-cat">${esc(s.category)}</div>
        </div>
        <div class="skill-meter"></div>
        <p class="skill-desc">${esc(s.desc)}</p>
      </div>`).join('');

  // ── Experience ─────────────────────────────────────────────────────
  document.getElementById('experience-header').innerHTML =
    `<span class="sec-eyebrow">${experience.eyebrow}</span>
     <h2 class="sec-title">${experience.title}</h2>`;

  document.getElementById('timeline').innerHTML =
    experience.items.map(e => `
      <li class="tl-item">
        <div class="tl-row">
          <div class="tl-role">${esc(e.role)} · <span class="tl-co">${esc(e.company)}</span></div>
          <div class="tl-when">${esc(e.period)}</div>
        </div>
        <p class="tl-desc">${esc(e.desc)}</p>
        <div class="tl-tags">${tags(e.tags)}</div>
      </li>`).join('');

  // ── Education ──────────────────────────────────────────────────────
  document.getElementById('education-header').innerHTML =
    `<span class="sec-eyebrow">${education.eyebrow}</span>
     <h2 class="sec-title">${education.title}</h2>`;

  document.getElementById('edu-grid').innerHTML =
    education.items.map(e => `
      <div class="edu-card mouse-track">
        <div class="edu-head">
          <div class="edu-mark">${ICONS[e.icon] || ICONS.graduation}</div>
          <div class="edu-meta">
            <div class="edu-degree">${esc(e.degree)}</div>
            <div class="edu-school">${esc(e.school)}</div>
            <div class="edu-when">${esc(e.period)}</div>
          </div>
        </div>
        ${e.desc ? `<p class="edu-desc">${esc(e.desc)}</p>` : ''}
      </div>`).join('');

  // ── Projects ───────────────────────────────────────────────────────
  document.getElementById('work-header').innerHTML =
    secHeader(projects.eyebrow, projects.title, projects.lede);

  document.getElementById('proj-grid').innerHTML =
    projects.items.map((proj, i) => {
      const isPrivate = !!proj.private;
      const tag   = isPrivate ? 'div' : 'a';
      const attrs = isPrivate
        ? `class="proj mouse-track proj-private"`
        : `class="proj mouse-track" href="${esc(proj.url)}" target="_blank" rel="noopener"`;

      const titleSuffix = isPrivate
        ? `<span class="proj-lock">${ICONS.lock} Enterprise</span>`
        : ICONS.extLink;

      return `
      <${tag} ${attrs}>
        <div class="proj-media">
          <div class="stripes"></div>
          <div class="glow"></div>
          ${proj.image
            ? `<img class="proj-img" src="${esc(proj.image)}" alt="${esc(proj.title)}" loading="lazy">`
            : `<div class="proj-mock">
                <div class="proj-mock-bar"><i></i><i></i><i></i></div>
                <div class="proj-mock-body">${MOCK_LAYOUTS[i % MOCK_LAYOUTS.length]}</div>
               </div>`
          }
          ${isPrivate ? `<div class="proj-private-overlay"><span class="proj-private-badge">${ICONS.lock} Private · NDA</span></div>` : ''}
        </div>
        <div class="proj-body">
          <div class="proj-kicker">${esc(proj.kicker)}</div>
          <h3 class="proj-title">${esc(proj.title)} ${titleSuffix}</h3>
          <p class="proj-desc">${esc(proj.desc)}</p>
          <div class="proj-tags">${tags(proj.tags)}</div>
          <div class="proj-extra">
            <div class="proj-extra-list">
              ${proj.extra.map(x => `<span><b>${esc(x.label)}</b> · ${esc(x.value)}</span>`).join('')}
            </div>
          </div>
        </div>
      </${tag}>`;
    }).join('');

  // ── Contact ────────────────────────────────────────────────────────
  document.getElementById('contact-header').innerHTML =
    secHeader(contact.eyebrow, contact.title, contact.lede);

  document.getElementById('contact-card').innerHTML = `
    <div class="contact-inner">
      <h3 class="contact-h">${contact.cardHeading}</h3>
      <a class="contact-mail" href="mailto:${esc(meta.email)}">
        ${esc(meta.email)} ${ICONS.arrowRight}
      </a>
      <div class="contact-row">
        ${meta.socialLinks.map(s => `
          <a class="icon-link" href="${esc(s.url)}" target="_blank" rel="noopener">
            ${ICONS[s.icon] || ''} ${esc(s.label)}
          </a>`).join('')}
      </div>
    </div>`;

  // ── Footer ─────────────────────────────────────────────────────────
  document.getElementById('foot-inner').innerHTML = `
    <div>${esc(meta.copyright)}</div>
    <div><a href="#top">Back to top ↑</a></div>`;

  // ══════════════════════════════════════════════════════════════════
  //  INTERACTIONS
  // ══════════════════════════════════════════════════════════════════

  // Nav scroll state
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Reveal / stagger on scroll (IntersectionObserver)
  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealIO.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

  document.querySelectorAll('.reveal, .stagger').forEach(el => revealIO.observe(el));

  // Cursor glow (RAF-throttled, desktop only)
  const glowEl = document.querySelector('.cursor-glow');
  let rafId = 0, curX = -9999, curY = -9999;
  function moveGlow() {
    glowEl.style.left = curX + 'px';
    glowEl.style.top  = curY + 'px';
    rafId = 0;
  }
  window.addEventListener('mousemove', e => {
    document.body.classList.add('has-cursor');
    curX = e.clientX; curY = e.clientY;
    if (!rafId) rafId = requestAnimationFrame(moveGlow);
  }, { passive: true });
  window.addEventListener('mouseleave', () => document.body.classList.remove('has-cursor'));

  // Mouse-tracked card radial glow (--mx / --my CSS vars)
  document.querySelectorAll('.mouse-track').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top)  + 'px');
    }, { passive: true });
  });

  // Hero code card parallax (desktop, respects reduced-motion)
  const codeCard = document.querySelector('.code-card');
  if (codeCard &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
      window.innerWidth > 960) {
    document.addEventListener('mousemove', e => {
      const dx = (e.clientX - window.innerWidth  / 2) / 160;
      const dy = (e.clientY - window.innerHeight / 2) / 160;
      codeCard.style.transform = `translate3d(${dx}px,${dy}px,0)`;
    }, { passive: true });
  }

  // Mobile hamburger menu
  const hamburger = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  function openMenu() {
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    hamburger.classList.contains('open') ? closeMenu() : openMenu();
  });

  // Close on link click or Escape
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

})();
