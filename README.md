# Adith R. Lal — Portfolio

> A modern, high-performance personal portfolio built with **Next.js 15**, **Tailwind CSS v4**, and **Framer Motion (motion/react)** — featuring a WebGL particle background, real-time GitHub & LeetCode activity, and silky smooth animations.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

---

## ✨ Features

- **WebGL Particle Background** — GPU-accelerated ambient particles via OGL (WebGL), reacting to mouse movement
- **Live GitHub Activity** — Real contribution heatmap using `react-github-calendar`
- **Live LeetCode Stats** — Embedded dynamic card from leetcard.jacoblin.cool
- **Smooth Animations** — Section reveals, parallax hero, and micro-interactions via Framer Motion
- **Mobile-First Responsive** — Fully responsive across all screen sizes
- **Custom Pixar Font** — Self-hosted `pixar.woff2` for name branding
- **Glassmorphism UI** — Consistent `glass` and `glass-darker` utility layers
- **Zero API Keys Required** — All data is static or fetched client-side from public APIs
- **Project Filtering** — Filterable project grid by category (AI, Frontend, Full-stack)
- **Certifications Modal** — Click-to-open modal with Google Drive links for all certs

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5.9 |
| Styling | Tailwind CSS v4 + tw-animate-css |
| Animation | motion/react (Framer Motion v12) |
| UI Components | Base UI React + shadcn/ui primitives |
| WebGL | OGL (lightweight WebGL framework) |
| Icons | Lucide React |
| GitHub Activity | react-github-calendar |
| Fonts | Google Fonts (Inter, Playfair Display, JetBrains Mono) + local Pixar woff2 |

---

## 📁 Project Structure

```
.
├── app/
│   ├── globals.css          # Global styles, Tailwind theme, CSS variables
│   ├── layout.tsx           # Root layout with fonts, Particles background, TooltipProvider
│   ├── page.tsx             # Main page assembling all sections
│   └── icon.png             # Favicon
├── assets/
│   ├── me.png               # Hero background portrait
│   ├── housmartLogo.svg     # HouSmart project logo
│   ├── cclogo.png           # CodeGuild / ACES CUSAT logo
│   ├── leetcode.png         # LeetCode icon (DSA Journey section)
│   └── pixar_font/          # Self-hosted Pixar typeface (woff / woff2)
├── components/
│   ├── Navbar.tsx           # Fixed top nav with scroll-aware glassmorphism
│   ├── Hero.tsx             # Full-viewport hero with parallax + scroll indicator
│   ├── About.tsx            # Bio, stats, location
│   ├── Experience.tsx       # Timeline of internships & roles
│   ├── Projects.tsx         # Filterable project cards grid
│   ├── TechStack.tsx        # Skills grid + Currently Learning section
│   ├── GitHubActivity.tsx   # Live GitHub contribution calendar
│   ├── DSAJourney.tsx       # LeetCode stats card
│   ├── Academics.tsx        # Education + click-to-open certifications modal
│   ├── Achievements.tsx     # Hackathon wins and notable highlights
│   ├── Contact.tsx          # Email / LinkedIn / GitHub CTA cards
│   ├── Footer.tsx           # Back-to-top + copyright
│   └── ui/
│       ├── Particles.tsx    # WebGL GPU particle system (OGL)
│       ├── badge.tsx        # shadcn Badge component
│       ├── button.tsx       # shadcn Button component
│       ├── tabs.tsx         # shadcn Tabs component (Base UI)
│       └── tooltip.tsx      # shadcn Tooltip component (Base UI)
├── lib/
│   ├── data.ts              # All portfolio content (projects, experience, skills, etc.)
│   └── utils.ts             # cn() utility (clsx + tailwind-merge)
├── next.config.ts           # Next.js config (standalone output, image domains)
├── tsconfig.json            # TypeScript config
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18+ (v24 recommended)
- npm v9+

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/adi-makes/adi_makes.git
cd adi_makes

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **No environment variables are required** — there is no backend and no API keys needed.

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server (with HMR) |
| `npm run build` | Build optimized production bundle |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint across the codebase |
| `npm run clean` | Clean the Next.js build cache |

---

## 🎨 Customization

All portfolio content lives in **`lib/data.ts`** — no hunting through component files:

```ts
// lib/data.ts
export const personalInfo = { name, title, tagline, about, ... };
export const experiences = [ ... ];
export const projects = [ ... ];
export const techStack = [ ... ];
export const academics = { ... };
export const certifications = [ ... ];
export const achievements = [ ... ];
export const dsaJourney = { username: "YourLeetCodeHandle", ... };
```

To swap out the hero photo, replace `assets/me.png`.

---

## 🏗 Production Build

```bash
npm run build
npm run start
```

The project is configured with `output: 'standalone'` for easy containerized / serverless deployment. It exports as fully static content for the `/` route.

---

## 🌐 Deployment

This site can be deployed to any platform that supports Next.js:

- **Vercel** (recommended) — zero-config, automatic preview deployments
- **Netlify** — use the Next.js build plugin
- **Docker** — uses standalone output, ready for containerization

---

## 📄 License

[MIT](./LICENSE) © 2025 Adith R. Lal
