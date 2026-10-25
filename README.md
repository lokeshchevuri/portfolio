# Chevuri Lokesh — Engineering Portfolio Website
**Domain:** [https://lokeshkumar.tech](https://lokeshkumar.tech)

Enterprise-grade, timeless portfolio website designed with a monochromatic aesthetic inspired by **Nothing OS**, **Vercel**, and **Stripe**. Built specifically to showcase software engineering rigor, systems thinking, Linux-first workflows, and machine learning architectures.

---

## ⚡ Tech Stack & Architecture

- **Core Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4 (monochrome palette, dot-grid blueprint background, micro-borders)
- **Typography:** Sans-Serif (`Inter`) + Monospaced (`JetBrains Mono`)
- **Icons:** Lucide React + custom inline SVGs
- **Deployment:** Vercel (Edge network) with custom domain binding to `lokeshkumar.tech` (via get.tech)

---

## 🛠️ Key Sections & Features

1. **Top System Status & Nav:**
   - Real-time `OPEN_TO_WORK` status indicator
   - Smooth dark / light theme switcher
   - Instant CLI launcher trigger
2. **Hero & Biometrics:**
   - Complete formal name & bio: **Chevuri Lokesh Koti Sai Kumar**
   - Profile photo with Nothing OS blueprint framing, status indicator, and dynamic **FILTER: MONO / NATURAL** toggle
   - Key stats row (8.89 B.Tech CGPA, Ubuntu Linux workstation, AWS Certified Cloud Practitioner, 72h ML Bootcamp Mentor)
3. **Engineering Manifesto & Linux Daily Driver:**
   - Highlights the dual-boot Ubuntu daily-driver setup, POSIX parity with cloud servers, and avoiding black-box abstractions.
4. **Curated Systems & Codebases:**
   - **Dhwani Sutra (Flagship):** Full architectural breakdown of the dual-engine core (Classical KNN spatial vectors + Local Llama 3.2 Ollama curator, IP-Persistent state, Shorts-Killer stream validation).
   - **Bus Pass Management System:** Complete MERN stack role-based application.
   - **Agrimitra:** Community Service Project (CSP) delivering agricultural tools.
   - **Dark Maze:** Interactive canvas game deployed on an AWS EC2 instance.
5. **Stack Matrix:**
   - Structured breakdown across Core Languages, Frameworks & Machine Learning, and Cloud & DevOps with practical applicability notes.
6. **Technical Logs & LinkedIn Dissections:**
   - 72-Hour ML & DL Bootcamp Instruction (Logistic Regression & Random Forest from scratch).
   - Dhwani Sutra Architecture Deep Dive.
   - Deploying interactive games on Amazon EC2.
7. **Experience & Education:**
   - Sri Vasavi Engineering College (CGPA 8.89 / 10).
   - AWS Certified Cloud Practitioner.
   - Vasavi Viznan Junior College (96.4%).
   - MLSC Technical Contributor & Organizer.
8. **Interactive Terminal CLI & Contact:**
   - Functional terminal emulator with commands (`help`, `whoami`, `projects`, `skills`, `linux`, `domain`, `contact`, `clear`).
   - One-click copy for email (`chevurilokesh07@gmail.com`) and phone (`+91 9393969353`).
   - Direct mailto link.

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🌐 Deploying to Vercel & Connecting `lokeshkumar.tech`

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: complete enterprise portfolio for lokeshkumar.tech"
   git branch -M main
   git remote add origin https://github.com/lokeshchevuri/portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Keep the default settings (Framework Preset: **Vite**, Root Directory: `./`).
5. Click **Deploy**.
6. Once deployed, go to **Project Settings > Domains** in Vercel:
   - Add `lokeshkumar.tech` and `www.lokeshkumar.tech`.
7. In your **get.tech** DNS manager:
   - Add an **A Record** pointing `@` to `76.76.21.21` (or Vercel's provided IP).
   - Add a **CNAME Record** pointing `www` to `cname.vercel-dns.com`.
8. Your portfolio will be live with full SSL at `https://lokeshkumar.tech`!
