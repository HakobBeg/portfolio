// ─────────────────────────────────────────────────────────────────────────────
//  PORTFOLIO DATA  —  edit anything here to update the site
// ─────────────────────────────────────────────────────────────────────────────
window.PORTFOLIO_DATA = {

  meta: {
    name:         "Hakob",
    initial:      "H",
    domain:       "hakobbeglaryan",
    domainTld:    ".dev",
    pageTitle:    "Hakob Beglaryan — Senior Angular Engineer",
    email:        "hakobbeg@gmail.com",
    copyright:    "© 2026 Hakob. Crafted with care in Yerevan.",
    availability: "Open to senior & lead roles · Remote · 2026",
    socialLinks: [
      { label: "GitHub",   url: "https://github.com/HakobBeg",                                    icon: "github"   },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/hakob-beglaryan/",                   icon: "linkedin" },
      { label: "Upwork",   url: "https://www.upwork.com/freelancers/~011eae89adf23896d6",         icon: "upwork"   },
      { label: "Resume",   url: "#",                                                               icon: "resume"   },
    ],
  },

  hero: {
    titleGrad: "Senior frontend engineer",
    titleRest: "building scalable, enterprise-grade&nbsp;web&nbsp;platforms.",
    intro: "Hi, I'm <strong>Hakob</strong> — a senior frontend engineer with 7+ years building large-scale Angular platforms at companies like <strong>T-Bank</strong> and <strong>Warner Music Group</strong>, shipping products that serve millions of users.",
    highlights: [
      { value: "7+ yrs",       label: "Angular"             },
      { value: "12M+",         label: "users served"        },
      { value: "Yerevan, AM",  label: "· remote-first"      },
    ],
    ctaPrimary:   { label: "View selected work", href: "#work"    },
    ctaSecondary: { label: "Get in touch",        href: "#contact" },
    codeCard: {
      filename: "~/portfolio/about.ts",
      lines: [
        { n:  1, parts: [{ c:"key",t:"import" },{ t:" { " },{ c:"fn",t:"Engineer" },{ t:" } " },{ c:"key",t:"from" },{ t:" " },{ c:"str",t:"'@hakob/core'" },{ t:";" }] },
        { n:  2, parts: [] },
        { n:  3, parts: [{ c:"key",t:"export const" },{ t:" " },{ c:"fn",t:"hakob" },{ t:": " },{ c:"fn",t:"Engineer" },{ t:" = {" }] },
        { n:  4, parts: [{ t:"  " },{ c:"prop",t:"role" },{ t:": " },{ c:"str",t:"'Senior Angular Engineer'" },{ t:"," }] },
        { n:  5, parts: [{ t:"  " },{ c:"prop",t:"years" },{ t:": " },{ c:"num",t:"7" },{ t:"," }] },
        { n:  6, parts: [{ t:"  " },{ c:"prop",t:"stack" },{ t:": [" },{ c:"str",t:"'Angular'" },{ t:", " },{ c:"str",t:"'TypeScript'" },{ t:", " },{ c:"str",t:"'RxJS'" },{ t:"]," }] },
        { n:  7, parts: [{ t:"  " },{ c:"prop",t:"focus" },{ t:": " },{ c:"str",t:"'design systems · MFEs · DX'" },{ t:"," }] },
        { n:  8, parts: [{ t:"  " },{ c:"prop",t:"currentlyOpenTo" },{ t:": " },{ c:"key",t:"true" },{ t:"," }] },
        { n:  9, parts: [{ t:"};" }] },
        { n: 10, parts: [] },
        { n: 11, parts: [{ c:"cmt",t:"// let's build something thoughtful." }], caret: true },
      ],
    },
  },

  about: {
    eyebrow: "01 — About",
    title:   "Calm, precise software engineering with an eye for craft.",
    portrait: "assets/portrait.jpg",
    paragraphs: [
      "I specialize in <strong>large-scale Angular architecture</strong> — platforms with hundreds of components, complex real-time state, and demanding performance budgets shared across dozens of engineering teams. My strength sits at the intersection of architecture, type-safety, and developer experience.",
      "At <strong>T-Bank</strong> and <strong>Warner Music Group</strong> I've led microfrontend rollouts, designed component libraries adopted by 50+ engineers, and tuned RxJS pipelines delivering live data to millions of concurrent users — while maintaining 99.9% uptime.",
      "Beyond the code, I care deeply about <strong>craft</strong> — interfaces that feel obvious because every detail was deliberate, and motion you only notice when it's missing.",
    ],
    stats: [
      { value: "7+",    label: "Years building Angular at scale"      },
      { value: "12M+",  label: "Monthly active users served"          },
      { value: "99.9%", label: "Uptime on shipped systems"            },
      { value: "50+",   label: "Engineers using libraries I authored" },
    ],
  },

  skills: {
    eyebrow: "02 — Toolkit",
    title:   "A focused stack, sharpened over years.",
    lede:    "I go deep before I go wide. These are the tools I reach for daily, and the ones I've built production systems around.",
    items: [
      { name: "Angular 21",     category: "Framework",    level: 97, desc: "Signals, standalone components, route-level code-splitting, SSR with Hydration. Tracking every major release up to v21." },
      { name: "RxJS",           category: "Reactivity",   level: 93, desc: "Higher-order observables, custom operators, real-time data pipelines at production scale." },
      { name: "NgRx",           category: "State",        level: 89, desc: "Feature stores, effects, entity adapters; lately leaning heavily on Signal Store."       },
      { name: "TypeScript",     category: "Language",     level: 94, desc: "Advanced generics, branded types, strict mode by default, declaration authoring."        },
      { name: "Nx / Monorepos", category: "Architecture", level: 90, desc: "Large-scale Nx monorepos, shared libs, build caching, affected-based CI pipelines."      },
      { name: "Microfrontends", category: "Architecture", level: 87, desc: "Module Federation, Native Federation, cross-team design-system handoff."                 },
      { name: "jsPlumb",        category: "Visualization",level: 85, desc: "Complex interactive graph UIs — drag-and-drop nodes, dynamic connectors, custom overlays." },
      { name: "Monaco Editor",  category: "UI",           level: 82, desc: "Embedded code editors with custom language support, theming, and IntelliSense integration." },
      { name: "Transloco",      category: "i18n",         level: 86, desc: "Lazy-loaded translations, scoped loaders, multi-language support across enterprise apps." },
      { name: "Lottie",         category: "Animation",    level: 80, desc: "JSON-driven animations integrated into Angular components for rich UI motion." },
      { name: "CI / CD",        category: "DevOps",       level: 85, desc: "GitHub Actions, GitLab CI, Jenkins — preview environments and automated pipelines."       },
      { name: "NestJS",         category: "Backend",      level: 82, desc: "REST & GraphQL APIs, dependency injection, queue-driven workers."                        },
      { name: "JavaScript",     category: "Language",     level: 95, desc: "Modern ES, async patterns, performance-aware authoring, deep platform fluency."           },
      { name: "Docker",         category: "Tooling",      level: 80, desc: "Multi-stage builds, slim images, local dev parity with production."                       },
      { name: "PostgreSQL",     category: "Database",     level: 78, desc: "Schema design, indexing, query plans, pgBouncer, read-replica routing."                   },
      { name: "React",          category: "Framework",    level: 82, desc: "Hooks, Suspense, server components, and shipping production apps with Next.js."            },
    ],
  },

  experience: {
    eyebrow: "03 — Experience",
    title:   "7+ years. Enterprise fintech, global media, product startups.",
    items: [
      {
        role:    "Senior Software Engineer",
        company: "T-Bank (formerly Tinkoff)",
        period:  "Nov 2023 — Present",
        desc:    "Leading frontend architecture on T-Bank's enterprise Nx monorepo — one of the largest fintech frontend codebases in the region. Own reusable product libraries adopted across 10+ teams, drove CI/CD optimisation that significantly reduced build times, and built end-to-end testing infrastructure from scratch. Core contributor to the Procedure Builder platform, a low-code workflow engine now used by hundreds of internal teams.",
        tags:    ["Angular", "TypeScript", "RxJS", "NgRx", "Nx", "Jenkins", "GitLab CI", "Jest", "Cypress"],
      },
      {
        role:    "Frontend Software Engineer",
        company: "Warner Music Group",
        period:  "Oct 2022 — Oct 2023 · New York (remote)",
        desc:    "Owned performance engineering on Angular applications across Warner's high-traffic digital platforms. Implemented lazy loading and AOT compilation strategies that measurably cut initial load times, reduced memory footprint via NgRx state restructuring, and delivered a reusable component system that accelerated feature delivery across teams serving millions of music fans globally.",
        tags:    ["Angular", "TypeScript", "RxJS", "NgRx", "SCSS", "Cypress", "Jest"],
      },
      {
        role:    "Software Engineer",
        company: "Synergy International Systems",
        period:  "Jan 2020 — Dec 2023",
        desc:    "Architected and shipped multiple CMS platforms from greenfield, building a reusable product core that cut delivery time on subsequent projects. Extended the stack cross-platform with Flutter for mobile, and contributed to a microservices architecture serving enterprise clients across international markets.",
        tags:    ["Angular", "TypeScript", "Flutter", "Dart", "RxJS", "Akita", "Microservices", "REST"],
      },
      {
        role:    "Frontend Lecturer",
        company: "Synergy Academy",
        period:  "2021 — 2023 · Part-time",
        desc:    "Designed and delivered Angular and JavaScript curriculum for cohorts of 20–40 students — from fundamentals through production-grade architecture. Built practical assignment frameworks rooted in real engineering problems. Strong track record of graduates transitioning directly into software engineering roles.",
        tags:    ["JavaScript", "TypeScript", "Angular", "Frontend Architecture", "Mentoring"],
      },
      {
        role:    "Robotics Engineer",
        company: "Armath Engineering Laboratories",
        period:  "Sep 2022 — Oct 2022 · Contract",
        desc:    "Short-term contract engineering autonomous drone systems with Pixhawk autopilot, IoT smart-home prototypes, and STEM robotics kits. A cross-disciplinary engagement at the hardware-software boundary, contributing to engineering-education initiatives.",
        tags:    ["Python", "Embedded", "IoT", "Robotics", "Pixhawk", "Sensors"],
      },
    ],
  },

  education: {
    eyebrow: "04 — Education",
    title:   "Foundations & continued learning.",
    items: [
      { degree: "Master's · Computer Science",                    school: "Yerevan State University", period: "2022 — 2025", icon: "graduation"       },
      { degree: "Bachelor's · Applied Mathematics & Informatics", school: "Yerevan State University", period: "2016 — 2022", icon: "graduationSimple" },
    ],
  },

  projects: {
    eyebrow: "05 — Featured work",
    title:   "A few projects I'm proud of.",
    lede:    "Selected from recent work. Hover to peek under the hood.",
    items: [
      {
        kicker: "Real estate · Full-stack Platform",
        title:  "AAREA",
        desc:   "Full-stack multilingual real estate platform (hy / en / ru) covering listings, auctions, CMS, member directory, news, courses, and bookings. Angular frontend backed by a NestJS REST API with JWT auth, role-based access control, Prisma ORM, and PostgreSQL.",
        url:    "https://aarea.am",
        image:  "assets/proj-aarea.png",
        tags:   ["Angular", "NestJS", "PostgreSQL", "Prisma", "TypeScript", "JWT", "i18n"],
        extra:  [{ label: "Role", value: "Full-stack" }, { label: "Lang", value: "hy / en / ru" }, { label: "Year", value: "2026" }],
      },
      {
        kicker: "Enterprise · Low-code Platform",
        title:  "Procedure Builder",
        desc:   "Enterprise low-code workflow platform at T-Bank — teams visually design, test, and execute automated business processes using configurable blocks, dynamic UI components, and integrations with Jira and internal services. Deployed across web, mobile SDKs, and REST APIs serving hundreds of internal teams.",
        url:    null,
        private: true,
        image:  "assets/proj-procedure-builder.jpg",
        tags:   ["Angular 21", "NgRx", "RxJS", "Nx", "jsPlumb", "Transloco", "Monaco Editor", "Lottie"],
        extra:  [{ label: "Role", value: "Senior Software Engineer" }, { label: "Company", value: "T-Bank" }, { label: "Year", value: "2024" }],
      },
    ],
  },

  contact: {
    eyebrow:     "06 — Contact",
    title:       "Have a project that deserves real craft?",
    lede:        "Open to senior and lead frontend roles — contract or full-time, fully remote.",
    cardHeading: "Let's build something exceptional — together.",
  },

};
