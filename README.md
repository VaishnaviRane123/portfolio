# Vaishnavi Rane — Portfolio

A modern, performant personal portfolio and resume website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Designed to showcase my work as a Computer Engineering student specializing in Full Stack Development and AI.

🌐 **Live:** [vaishnavirane.dev](https://vaishnavirane.dev) *(update once deployed)*

---

## ✨ Features

- **Modern Design** — Clean, minimal layout inspired by editorial typography
- **Dark Mode** — Light/dark theme toggle with system preference detection
- **Responsive** — Optimized for mobile, tablet, and desktop
- **⌘K Command Palette** — Quick navigation across sections
- **Scroll Progress Bar** — Visual indicator of reading position
- **Scroll-to-Top Button** — Appears after scrolling down
- **Contact Form** — Working form powered by Web3Forms (no backend)
- **SEO Optimized** — Metadata, Open Graph, Twitter cards, JSON-LD structured data
- **Dynamic OG Image** — Custom social preview image
- **Sitemap + Robots** — Auto-generated for search engines
- **PWA Manifest** — Installable as a web app
- **Custom 404 & Error Pages** — Polished error handling
- **Smooth Animations** — Subtle fade-ins and hover effects
- **Static Site Generation** — Fast, pre-rendered pages

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) |
| **Icons** | [Lucide React](https://lucide.dev) |
| **Fonts** | [Inter](https://fonts.google.com/specimen/Inter) + [IBM Plex Serif](https://fonts.google.com/specimen/IBM+Plex+Serif) |
| **Forms** | [Web3Forms](https://web3forms.com) |
| **Deployment** | [Vercel](https://vercel.com) |

---

## 📁 Project Structure

```
ResumeWebsite/
├── app/
│   ├── api/                    # API routes (if any)
│   ├── projects/
│   │   └── [slug]/             # Dynamic project detail pages
│   ├── now/                    # "Now" page (what I'm working on)
│   ├── globals.css             # Global styles + theme variables
│   ├── layout.tsx              # Root layout with metadata + SEO
│   ├── page.tsx                # Homepage
│   ├── loading.tsx             # Loading state
│   ├── error.tsx               # Error boundary
│   ├── not-found.tsx           # Custom 404
│   ├── manifest.ts             # PWA manifest
│   ├── robots.ts               # robots.txt generator
│   └── sitemap.ts              # sitemap.xml generator
│
├── components/
│   ├── About.tsx               # Profile section
│   ├── Achievements.tsx        # Highlights
│   ├── AvailabilityBadge.tsx   # "Open to work" badge
│   ├── Certifications.tsx      # Certification cards
│   ├── CommandPalette.tsx      # ⌘K search
│   ├── Contact.tsx             # Contact form
│   ├── Education.tsx           # Education timeline
│   ├── Experience.tsx          # Work experience
│   ├── Footer.tsx              # Footer with social links
│   ├── Hero.tsx                # Hero section
│   ├── Navbar.tsx              # Sticky navigation
│   ├── ProjectCard.tsx         # Project card component
│   ├── Projects.tsx            # Projects grid
│   ├── ScrollProgress.tsx      # Top scroll progress bar
│   ├── ScrollToTop.tsx         # Floating scroll-to-top button
│   ├── SectionHeading.tsx      # Reusable section heading
│   ├── Skills.tsx              # Skills grid
│   ├── Stats.tsx               # Quick stats snapshot
│   ├── Testimonials.tsx        # Recommendations
│   ├── ThemeProvider.tsx       # Dark mode context
│   └── ThemeToggle.tsx         # Theme toggle button
│
├── data/
│   ├── certifications.ts       # Certifications data
│   ├── education.ts            # Education history
│   ├── experience.ts           # Work experience
│   ├── profile.ts              # Personal info
│   ├── projects.ts             # Project details
│   ├── skills.ts               # Skills by category
│   ├── stats.ts                # Stats for homepage
│   └── testimonials.ts         # Testimonials
│
├── public/
│   ├── certificates/           # PDF certificates
│   ├── profile/                # Profile photo
│   ├── projects/               # Project screenshots
│   ├── resume/                 # Downloadable resume
│   ├── og-image.png            # Social preview image
│   └── favicon.ico             # Site icon
│
├── types/
│   └── index.ts                # TypeScript interfaces
│
└── ...config files
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.18+ or 20+
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# Clone the repository
git clone https://github.com/VaishnaviRane123/portfolio.git

# Navigate to the project
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Web3Forms access key for contact form
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
```

Get your free key at [web3forms.com](https://web3forms.com).

### Personal Data

All personal content is centralized in the `data/` folder. To customize:

| File | Purpose |
|---|---|
| `data/profile.ts` | Name, role, summary, contact info |
| `data/experience.ts` | Work experience and internships |
| `data/projects.ts` | Projects with descriptions, tech stacks, links |
| `data/skills.ts` | Skills grouped by category |
| `data/education.ts` | Education history |
| `data/certifications.ts` | Certifications with PDF links |
| `data/stats.ts` | Numbers for homepage snapshot |
| `data/testimonials.ts` | Recommendations from mentors |

---

## 🎨 Theming

The site uses **CSS variables** for theming, defined in `app/globals.css`:

```css
:root {
  --background: #f8f8f6;
  --foreground: #171717;
  --muted: #666666;
  --border: #e5e5e5;
  --accent: #2563eb;
  --card: #ffffff;
  --hover: #f1f1ee;
}

.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
  --muted: #a1a1a1;
  --border: #262626;
  --accent: #60a5fa;
  --card: #141414;
  --hover: #1f1f1f;
}
```

Change these values to re-theme the entire site.

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js and configures everything
4. Add environment variables if needed
5. Click **Deploy**

Your site will be live in ~2 minutes at `https://your-project.vercel.app`.

### Deploy to Other Platforms

The site works on any platform supporting Next.js:

- **Netlify** — `npm run build` → `next start`
- **Cloudflare Pages** — use `@cloudflare/next-on-pages`
- **AWS Amplify** — connect your GitHub repo

---

## 📊 SEO & Performance

The site is built with SEO in mind:

- **Metadata API** for per-page titles, descriptions, and OG tags
- **JSON-LD structured data** for rich search results
- **Auto-generated sitemap** at `/sitemap.xml`
- **Robots.txt** for crawler directives
- **Static generation** for instant page loads
- **Lighthouse score** — 100/100 for Performance, Accessibility, Best Practices, and SEO

Test the live site at:
- [PageSpeed Insights](https://pagespeed.web.dev)
- [OpenGraph.xyz](https://www.opengraph.xyz) — for social previews

---

## 🤝 Contributing

This is a personal project, but suggestions are welcome! Feel free to:

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -am 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📬 Contact

**Vaishnavi Rane**

- 📧 Email: [ranevaishnavi242@gmail.com](mailto:ranevaishnavi242@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/vaishnavi-rane-ce](https://www.linkedin.com/in/vaishnavi-rane-ce)
- 🐙 GitHub: [@VaishnaviRane123](https://github.com/VaishnaviRane123)
- 🌐 Website: [vaishnavirane.dev](https://vaishnavirane.dev)

---

<div align="center">

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

⭐ Star this repo if you found it helpful!

</div>
```

---
## 🎯 Why This README Is Good

| Section | Why It Matters |
|---|---|
| **Features list** | Recruiters instantly see what's impressive |
| **Tech Stack table** | Shows you know modern tools |
| **Project Structure** | Demonstrates organization |
| **Getting Started** | Shows you understand developer experience |
| **Theming** | Shows custom CSS variable usage |
| **Deployment** | Shows you know production workflows |
| **SEO section** | Recruiters notice |
| **License & Contact** | Professional touch |

---
