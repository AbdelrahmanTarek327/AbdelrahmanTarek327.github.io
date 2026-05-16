# Abdelrahman Tarek — Portfolio Website

A world-class personal portfolio for an AI & Data Science Engineer, built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React + custom SVG brand icons
- **Fonts**: Inter + JetBrains Mono (Google Fonts)
- **Deployment**: Vercel (free tier)

## Features

- Dark-mode glassmorphism UI
- Smooth scroll-triggered animations
- Typing animation hero section
- Animated skill progress bars
- Filterable project cards
- Contact form (opens mailto)
- SEO metadata + Open Graph + sitemap + robots.txt
- Static export — deploys anywhere (Vercel, Netlify, GitHub Pages)
- Fully responsive (mobile-first)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Deploy on Vercel (Free — Recommended)

1. Push this folder to a new GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Leave all settings default
4. Click **Deploy** — live in ~60 seconds with a free `.vercel.app` URL

## Deploy on Netlify

1. Push to GitHub
2. Netlify → New site from Git
3. Build command: `npm run build` | Publish directory: `out`

## Updating Content

**All content lives in one file: `lib/data.ts`**

- `personalInfo` — name, email, social links
- `experience` — work history entries
- `projects` — project cards
- `skills` — skill categories and levels
- `certifications` — certificates list
- `stats` — hero stats numbers

## Adding Your Resume

Place your PDF at `public/resume.pdf` — the navbar "Download Resume" button links to it automatically.

## Project Structure

```
portfolio-site/
├── app/
│   ├── layout.tsx        # SEO metadata, fonts
│   ├── page.tsx          # Page — assembles all sections
│   ├── globals.css       # Global styles
│   ├── sitemap.ts        # SEO sitemap
│   └── robots.ts         # SEO robots
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, About, Experience, Projects, Skills, Education, Contact
│   └── common/           # LoadingScreen, BrandIcons
└── lib/
    └── data.ts           # ALL CONTENT — edit this
```

---

Built by Abdelrahman Tarek · 2026
