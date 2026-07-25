# 🏢 Landing Page — Technical Inspections & Real Estate Reports

A modern, responsive, and SEO-optimized landing page built for technical real estate inspection services (residential, commercial, and property handover). The project features dynamic sections, an interactive visual simulation of a technical report (A4 PDF styled in pure HTML/Tailwind CSS), transparent pricing cards, and an appointment booking form.

---

## 🚀 Tech Stack

- **[Next.js](https://nextjs.org/)** (App Router)
- **[React](https://react.dev/)**
- **[Tailwind CSS](https://tailwindcss.com/)**
- **[TypeScript](https://www.typescriptlang.org/)**

---

## ✨ Features and Sections

1. **Header / Navbar:** Sticky navigation bar with smooth scrolling and quick CTA contact button.
2. **Hero Section:** Main headline featuring statistics on issued reports and social proof.
3. **Anatomy of a Technical Report:** A pure HTML/CSS recreation of an A4 report structure highlighting thermal imaging, geolocated photo logs, and ABNT/CREA compliance.
4. **Plans and Pricing:** Transparent comparison cards (Compact, Standard, and High-End) with visual emphasis on the most popular plan.
5. **Booking Form:** Lead capture form with property/inspection type selectors and direct WhatsApp integration.
6. **Complete Footer:** Navigation links, inspection types, terms, and company contact details.
7. **Integrated SEO:** Built-in `sitemap.ts` and `robots.ts` using Next.js native routing.

---

## 📁 Project Structure

```text
.
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── sitemap.ts
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── PricingSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── public/
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.ts