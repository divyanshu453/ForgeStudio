# Forge Studio — Agency Website

A modern, production-ready digital product agency website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: CSS animations + Framer Motion
- **Fonts**: Syne (display) + DM Sans (body) + DM Mono
- **Icons**: Lucide React
- **Deployment**: Vercel

## Features

- 🎨 Custom cursor with smooth follower
- 🌊 Scroll-triggered animations throughout
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Marquee ticker
- 🗂️ Services grid with hover effects
- 💼 Portfolio/Work section
- 🔄 4-step process section
- 💬 Testimonials
- ❓ FAQ accordion
- 📬 Contact form with service/budget selectors
- 🌙 Dark theme with volt accent system

## Email Setup (Contact Form)

The contact form uses **Nodemailer + Gmail SMTP**. Two emails fire on every submission:
- **You** receive a formatted HTML email with all inquiry details + one-click reply
- **The client** gets an auto-reply confirmation with a summary of what they sent

### Step 1 — Create a Gmail App Password

> 2-Step Verification must be ON for your Google account.

1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. App: **Mail** · Device: **Other** · Name it `Forge Studio` → Generate oxuu ctvr ldvy nezn
3. Copy the **16-character password**

### Step 2 — Set env vars locally

```bash
cp .env.local.example .env.local
# Then fill in:
# GMAIL_USER=you@gmail.com
# GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```

### Step 3 — Add env vars on Vercel (production)

1. Vercel dashboard → Your project → **Settings → Environment Variables**
2. Add `GMAIL_USER` and `GMAIL_APP_PASSWORD`
3. Redeploy — done ✓

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2 — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click **Deploy** (zero config needed — Vercel auto-detects Next.js)

## Customization

### Colors
Edit `tailwind.config.ts` → `theme.extend.colors`:
- `ink` — primary dark background
- `volt` — accent green (#C8FF00)
- `cream` — primary text
- `mist` — secondary text

### Content
- **Services**: `components/Services.tsx` → `services` array
- **Projects**: `components/Work.tsx` → `projects` array
- **Testimonials**: `components/Testimonials.tsx` → `testimonials` array
- **FAQ**: `components/FAQ.tsx` → `faqs` array
- **Contact Email**: `components/Contact.tsx` + `components/Footer.tsx`

### Fonts
Fonts are loaded from Google Fonts in `app/layout.tsx`. Change the import URL and update `tailwind.config.ts` → `fontFamily`.

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles, animations, utilities
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── Cursor.tsx        # Custom cursor
│   ├── Navbar.tsx        # Sticky navigation
│   ├── Hero.tsx          # Hero section
│   ├── Marquee.tsx       # Scrolling ticker
│   ├── Services.tsx      # Services grid
│   ├── Work.tsx          # Portfolio section
│   ├── Process.tsx       # 4-step process
│   ├── About.tsx         # About + tech stack
│   ├── Testimonials.tsx  # Client quotes
│   ├── FAQ.tsx           # Accordion FAQ
│   ├── CTABanner.tsx     # Full-width CTA
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
├── vercel.json           # Vercel config
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```
