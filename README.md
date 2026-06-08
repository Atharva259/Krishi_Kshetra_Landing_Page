# 🌾 Krishi Kshetra Website

Official investor-grade web portal for **Krishi Kshetra** — an IoT-driven agricultural robotics and smart irrigation startup focused on sustainable farming automation.

This project is built using **Next.js 16 (Turbopack)**, **Vanilla CSS Modules**, and **Framer Motion** for a premium glassmorphic visual aesthetic.

---

## 🚀 Getting Started (Local Development)

Follow these simple steps to set up and run the project locally on your machine:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18.x or higher recommended) and `npm` installed.

### 2. Install Dependencies
In the root directory of the project, run:
```bash
npm install
```

### 3. Configure Environment Variables
1. Duplicate the `.env.example` file and rename it to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Fill in the values for the environment variables (e.g., Gemini API keys, Google OAuth credentials). Alternatively, if you have access to the Vercel CLI, you can pull them directly:
   ```bash
   npx vercel env pull .env.local
   ```

### 4. Run the Development Server
Start the Next.js local server with:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📂 Project Structure

Here is a summary of the codebase organization:

```text
├── app/                  # Next.js App Router Pages
│   ├── layout.jsx        # Root HTML shell, fonts, global wrappers
│   ├── page.jsx          # Home landing page composition
│   └── globals.css       # Core styles, variables, tailwind rules
│
├── components/           # Modular visual components
│   ├── HeroSection.jsx   # Top landing hero page with live telemetry card
│   ├── TeamSection.jsx   # Founders profiles & age-restricted LinkedIn logic
│   ├── GithubSection.jsx # Live links to public repositories
│   └── ...               # Story, Features, Impact, Roadmap, etc.
│
├── public/               # Static assets (images, icons, logo)
│
├── .env.example          # Environment variables template
├── next.config.mjs       # Next.js framework configuration
└── package.json          # Build scripts & node dependencies
```

---

## 🛠️ Build & Deployment

The application is configured to deploy directly to Vercel.

### Production Build
To test the production build locally:
```bash
npm run build
npm run start
```

### Deploying to Vercel
To deploy your current local branch changes directly to Vercel:

1. **Deploy to Preview:**
   ```bash
   npx vercel
   ```
2. **Deploy to Production (Live):**
   ```bash
   npx vercel --prod
   ```

---

## 👥 Core Founding Team

* **Atharva Anand** - Founder ([GitHub](https://github.com/Atharva259))
* **Nihar Dudhabaware** - Co-Founder ([GitHub](https://github.com/masternihar9847-dot))
* **Angad** - Co-Founder ([GitHub](https://github.com/angad659))

---

## 🌐 Official URLs

* **Production Site:** [krishi-kshetra.vercel.app](https://krishi-kshetra.vercel.app/)
* **Repository:** [Atharva259/krishi-kshetra-website](https://github.com/Atharva259/krishi-kshetra-website)
