// ─────────────────────────────────────────────────────────────────────────────
//  PORTFOLIO DATA  —  edit anything here to update the site
// ─────────────────────────────────────────────────────────────────────────────
window.PORTFOLIO_DATA = {

  meta: {
    name:         "Hakob",
    initial:      "H",
    domain:       "hakobbeglaryan",
    domainTld:    ".dev",
    pageTitle:    "Hakob — Senior Angular Developer",
    email:        "hakobbeg@gmail.com",
    copyright:    "© 2026 Hakob. Crafted with care in Yerevan.",
    availability: "Available for senior roles · Q3 2026",
    socialLinks: [
      { label: "GitHub",   url: "https://github.com/HakobBeg",                                    icon: "github"   },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/hakob-beglaryan/",                   icon: "linkedin" },
      { label: "Upwork",   url: "https://www.upwork.com/freelancers/~011eae89adf23896d6",         icon: "upwork"   },
      { label: "Resume",   url: "#",                                                               icon: "resume"   },
    ],
  },

  hero: {
    titleGrad: "Senior software engineer",
    titleRest: "building polished, performant&nbsp;web&nbsp;products.",
    intro: "Hi, I'm <strong>Hakob</strong> — a senior software engineer with 7+ years shipping enterprise-grade web platforms, design systems, and microfrontend architectures that scale to millions of users.",
    highlights: [
      { value: "8+ yrs",       label: "Angular"             },
      { value: "40+",          label: "production releases" },
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
        { n:  4, parts: [{ t:"  " },{ c:"prop",t:"role" },{ t:": " },{ c:"str",t:"'Senior Angular Developer'" },{ t:"," }] },
        { n:  5, parts: [{ t:"  " },{ c:"prop",t:"years" },{ t:": " },{ c:"num",t:"8" },{ t:"," }] },
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
    paragraphs: [
      "I specialize in building <strong>large Angular applications</strong> — the kind with hundreds of components, complex state graphs, and demanding performance budgets. My happy place is the intersection of architecture, type-safety, and motion design.",
      "Over the last seven years I've led microfrontend rollouts at fintech and SaaS companies, designed shared component libraries used by 50+ engineers, and tuned RxJS pipelines that stream live data to thousands of concurrent users.",
      "Outside of code, I think a lot about <strong>restraint</strong> — UI that feels obvious because every detail was considered, and motion that you only notice when it's missing.",
    ],
    stats: [
      { value: "8+",    label: "Years building Angular at scale"      },
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
    title:   "Seven years, four teams, one obsession with scale and quality.",
    items: [
      {
        role:    "Senior Software Engineer",
        company: "T-Bank (formerly Tinkoff)",
        period:  "Nov 2023 — Present",
        desc:    "Developing enterprise-scale frontend platforms on an Nx monorepo, designing reusable product libraries, and leading architectural decisions for multi-team scalability. Optimised library dependencies and build performance, set up CI/CD pipelines, and built automation testing infrastructure for large-scale fintech products.",
        tags:    ["Angular", "TypeScript", "RxJS", "NgRx", "Nx", "Jenkins", "GitLab CI", "Jest", "Cypress"],
      },
      {
        role:    "Frontend Software Engineer",
        company: "Warner Music Group",
        period:  "Oct 2022 — Oct 2023 · New York",
        desc:    "Improved Angular application performance via lazy loading, AOT compilation, and tuned change-detection strategies. Reduced frontend memory footprint through better state management, and built reusable component systems that accelerated delivery on high-traffic digital platforms.",
        tags:    ["Angular", "TypeScript", "RxJS", "NgRx", "SCSS", "Cypress", "Jest"],
      },
      {
        role:    "Frontend Lecturer",
        company: "Synergy Academy",
        period:  "Parallel with engineering roles",
        desc:    "Led and mentored frontend student groups, designing courses from beginner to advanced. Delivered in-depth JavaScript and frontend-architecture training, with practical assignments rooted in real-world engineering. Helped students build strong foundations in modern web development.",
        tags:    ["JavaScript", "TypeScript", "Angular", "Frontend Architecture", "Teaching"],
      },
      {
        role:    "Software Engineer",
        company: "Synergy International Systems",
        period:  "Jan 2020 — Dec 2023",
        desc:    "Built multiple CMS platforms from scratch and engineered a reusable product core that significantly cut delivery time on future projects. Shipped cross-platform applications with Flutter, and contributed to a microservices-oriented architecture for scalability and maintainability across international engagements.",
        tags:    ["Angular", "TypeScript", "Flutter", "Dart", "RxJS", "Akita", "Microservices", "REST"],
      },
      {
        role:    "Robotics Engineer",
        company: "Armath Engineering Laboratories",
        period:  "Sep 2022 — Oct 2022",
        desc:    "Designed and programmed autonomous drones with Pixhawk and Autopilot systems, developed IoT-based smart-home solutions, and created educational robotics kits for STEM programs. Worked on autonomous navigation and obstacle-avoidance, and contributed to engineering-education initiatives.",
        tags:    ["Python", "Embedded", "IoT", "Robotics", "Pixhawk", "Sensors"],
      },
    ],
  },

  education: {
    eyebrow: "04 — Education",
    title:   "Foundations & continued learning.",
    items: [
      { degree: "Master's · Computer Science",                school: "Yerevan State University", period: "2022 — 2025", icon: "graduation"       },
      { degree: "Bachelor's · Applied Mathematics & Informatics", school: "Yerevan State University", period: "2016 — 2022", icon: "graduationSimple" },
    ],
  },

  projects: {
    eyebrow: "05 — Featured work",
    title:   "A few projects I'm proud of.",
    lede:    "Selected from the last year. Hover to peek under the hood.",
    items: [
      {
        kicker: "Real estate · Full-stack Platform",
        title:  "AAREA",
        desc:   "Full-stack multilingual platform (hy / en / ru) covering real estate listings, auctions, CMS, member directory, news, courses, and bookings — Angular frontend backed by a NestJS REST API with JWT auth, RBAC, Prisma ORM, and PostgreSQL.",
        url:    "https://aarea.am",
        image:  "assets/proj-aarea.png",
        tags:   ["Angular", "NestJS", "PostgreSQL", "Prisma", "TypeScript", "JWT", "i18n"],
        extra:  [{ label: "Role", value: "Full-stack" }, { label: "Lang", value: "hy / en / ru" }, { label: "Year", value: "2026" }],
      },
      {
        kicker: "Enterprise · Low-code Platform",
        title:  "Procedure Builder",
        desc:   "Enterprise low-code workflow platform at T-Bank for designing, testing, and executing automated business processes. Teams build procedures visually using configurable blocks, dynamic UI components, and integrations with Jira and internal services — deployed across web, mobile SDKs, and REST APIs.",
        url:    null,
        private: true,
        image:  "assets/proj-procedure-builder.jpg",
        tags:   ["Angular 21", "NgRx", "RxJS", "Nx", "jsPlumb", "Transloco", "Monaco Editor", "Lottie"],
        extra:  [{ label: "Role", value: "Senior Software Engineer" }, { label: "Company", value: "T-Bank" }, { label: "Year", value: "2024" }],
      },
      {
        kicker: "E-Commerce · Full-stack",
        title:  "Hilite",
        desc:   "Multi-channel B2C + B2B e-commerce platform. Built a full discount & promo engine (percentage, flat-rate, scheduled, scoped), diagnosed and fixed a critical timezone-mismatch pricing bug across Laravel/MySQL, integrated discount UI across storefront, and optimised the B2B API layer with request deduplication and in-memory caching.",
        url:    "https://jurupalighting.com/",
        image:  "assets/proj-hilite.png",
        tags:   ["Laravel", "PHP", "React", "Next.js", "TypeScript", "MySQL", "REST API", "Vite"],
        extra:  [{ label: "Role", value: "Full-stack" }, { label: "Channels", value: "B2C + B2B" }, { label: "Year", value: "2026" }],
      },
    ],
  },

  contact: {
    eyebrow:     "06 — Contact",
    title:       "Have a project that deserves real craft?",
    lede:        "I'm currently considering senior and lead roles, contract or full-time, remote-friendly.",
    cardHeading: "Let's design something thoughtful — together.",
  },

};
