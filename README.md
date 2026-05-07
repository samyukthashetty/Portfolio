# 🌐 Samyuktha P — Bilingual Backend Developer Portfolio

A premium, state-of-the-art, fully responsive, and highly interactive bilingual portfolio website built using **Next.js 16 (React 19)**, **Tailwind CSS v4**, and **Framer Motion**.

This portfolio features a permanent, high-contrast, modern **Light Theme** styled with white glassmorphism (`.glass-card`), vibrant linear gradients, and a real-time **English & Japanese (日英) Language Toggle** to highlight Samyuktha's technical bilingual capabilities.

---

## ✨ Outstanding Features & Design System

### 🎨 1. Premium Light Theme Design
* **Base Color Palette**: Uses a bright, refreshing Slate background (`#f8fafc`) paired with crisp slate typography (`slate-900`) for high-contrast readability.
* **White Glassmorphism (`.glass-card`)**: Multi-layered panels designed with a semi-transparent white background, backdrop-blur (`16px`), and ultra-soft indigo shadows that float beautifully.
* **Vibrant Linear Colors**: Major section titles feature gorgeous, eye-catching linear gradients (`bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600`) for a modern, elite look.
* **Advanced Mask Borders**: Built with CSS mask-compositing to render razor-thin, glowing gradient borders on hover that transition dynamically from purple to cyan.

### ⚡ 2. Fluid Framer-Motion Animations
* **Micro-Animations**: Custom scroll animations, floating particles, and rotating world indicators.
* **Dynamic Hover Scales**: Cards throughout the site (About, Stats, Projects, Education) elevate, expand (`scale: 1.03`), and display soft shadow displacement on hover.
* **Interactive Stats**: Redesigned individual motion metric cards that display key stats with glowing gradient values.
* **Active Cursor pointer**: Explicitly programmed `cursor-pointer` (and `cursor: pointer` in CSS) across all clickable panels, buttons, toggles, tabs, and copy pills.

### 🌐 3. Dual Language Toggle (`EN` ↔ `日本語`)
* Real-time language switching for all sections covering biography, skills matrix, employment timeline, multi-tenant database project details, credentials, and contact forms.

### 📐 4. Pixel-Perfect Smooth Navigation
* Programmed with customized coordinate scroll calculations that offset the fixed navigation header (`90px`), ensuring that scrolling to any section aligns perfectly with no heading overlap.

### 🗄️ 5. Visual Backend Mockups
* **Interactive Terminal**: An on-screen representation of an API Gateway and database worker mockup, rendered with light-slate styling to showcase backend expertise (JWT OAuth, PostgreSQL, SMTP tasks).

---

## 🛠️ Technology Stack

* **Core Framework**: [Next.js](https://nextjs.org/) (React 19, App Router)
* **Styling Engine**: [Tailwind CSS v4](https://tailwindcss.com/) (Using CSS-variable-based theme tokens)
* **Animation Library**: [Framer Motion](https://www.framer.com/motion/) (Hardware-accelerated transitions)
* **Icon Suite**: [Lucide React](https://lucide.dev/) (Vibrant vector outlines)
* **Build System**: Next.js Turbopack compiler (Optimized and incredibly fast)

---

## 🚀 Local Development

Follow these steps to run the project locally on your machine:

### 1. Clone & Navigate
```bash
git clone <your-repository-url>
cd Protfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the live application.

### 4. Build and Compile
To test compiling the production files locally:
```bash
npm run build
```
The static HTML, CSS, and JS assets will compile successfully into the `./out` folder with zero errors or warnings.

---

## 📦 Automated GitHub Pages Deployment (CI/CD)

The portfolio is pre-configured with a **GitHub Actions** deployment pipeline. Pushing to your GitHub repository automatically compiles and deploys your site to GitHub Pages!

### Step 1: Push Code to GitHub
1. Create a new repository on GitHub (e.g., named `portfolio` or `Protfolio`).
2. Run the following in your local terminal:
```bash
git init
git add .
git commit -m "feat: premium light theme and interactive visual polish"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on **GitHub.com**.
2. Click on **Settings** (gear icon) in the top tabs.
3. Select **Pages** from the left navigation sidebar.
4. Under **Build and deployment** → **Source**, choose **GitHub Actions** from the dropdown.
5. Within 1–2 minutes, your portfolio will be live at `https://<your-username>.github.io/<your-repo-name>/`.

> [!NOTE]
> The `.github/workflows/deploy.yml` file is configured to dynamically handle the Next.js static export prefix, making sure all your styles, scripts, and media files load with perfectly mapped relative paths.

---

## 📝 Customization Guide

### Updating Content & Portfolio Info
All content details, achievements, and text translations are localized inside:
📂 `src/app/page.tsx`

* **Bilingual Translation Matrix**: Find the `const translations` dictionary starting around line 35 to update English or Japanese bio details, descriptions, and experience.
* **Skills Categories**: Find the `const skillCategories` array starting around line 377 to add new tools, update levels, or customize category icons.
* **SEO & Metadata**: To update search engine descriptions and title tags, open `src/app/layout.tsx` and adjust the `metadata` object.

---

*Crafted with 💜 for Samyuktha P.*
