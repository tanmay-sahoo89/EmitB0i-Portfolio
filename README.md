# Tanmay Chiranjib Sahoo | Portfolio Website

<div align="center">

A modern, interactive portfolio website showcasing AI/ML projects, technical expertise, and professional work. Built with cutting-edge web technologies for an exceptional user experience.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-blue?style=for-the-badge&logo=vercel)](https://tanmay-portfolio-hazel.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/tanmay-sahoo89/EmitB0i-Portfolio)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Key Components](#key-components)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About

This is a professional portfolio website designed to showcase:

- **AI/ML Projects** - Intelligent systems and machine learning implementations, including Ship Risk AI (ML-driven shipment risk prediction)
- **Technical Expertise** - Full-stack development, cloud deployment, and modern web technologies
- **Creative Work** - Dynamic animations, interactive 3D models, and polished UI/UX design
- **In-Depth Case Studies** - Detailed project breakdowns showing architecture, implementation, and real-world impact
- **Professional Achievements** - Timeline, certifications, and technical arsenal

The site is optimized for performance, accessibility, and mobile responsiveness with smooth animations and interactive components that create an engaging user experience.

---

## ✨ Features

- **Interactive Hero Section** - Engaging landing section with animated background and particle effects
- **Dynamic Background** - Custom inverted cursor and background light effects for visual depth
- **3D Integration** - Interactive 3D models using Spline technology
- **Smooth Animations** - Framer Motion-powered transitions and interactions
- **Dark Theme** - Developer-grade dark UI with high-contrast elements (Obsidian design system)
- **Case Studies** - Detailed project showcases with architecture diagrams and results
- **Technical Arsenal** - Comprehensive display of skills and technologies
- **Timeline View** - Professional history and milestones
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **Loading States** - Professional loading screens and transitions
- **Contact Integration** - Expandable contact button for easy reach

---

## 🛠️ Tech Stack

### Frontend

| Technology        | Purpose     | Version  |
| ----------------- | ----------- | -------- |
| **React**         | UI Library  | ^19.2.4  |
| **TypeScript**    | Type Safety | ~5.9.3   |
| **Vite**          | Build Tool  | ^8.0.1   |
| **Tailwind CSS**  | Styling     | ^3.4.17  |
| **Framer Motion** | Animations  | ^12.15.0 |
| **Spline**        | 3D Models   | ^4.0.0   |

### Development & Tooling

| Tool                    | Purpose        |
| ----------------------- | -------------- |
| **ESLint**              | Code Linting   |
| **PostCSS**             | CSS Processing |
| **Autoprefixer**        | CSS Prefixing  |
| **TypeScript Compiler** | Type Checking  |

### Deployment

| Platform   | Status  |
| ---------- | ------- |
| **Vercel** | Live ✅ |

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0 or higher
- **npm** v9+ or **yarn** v3+
- **Git**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/tanmay-sahoo89/EmitB0i-Portfolio.git
   cd tanmay-portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173` (or the URL shown in terminal)

### Building for Production

```bash
npm run build
# or
yarn build
```

The optimized production build will be generated in the `dist/` directory.

---

## 📁 Project Structure

```
tanmay-portfolio/
├── src/
│   ├── components/              # React components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Landing hero section
│   │   ├── About.tsx           # About section
│   │   ├── Projects.tsx        # Projects showcase
│   │   ├── CaseStudy.tsx       # Detailed case study
│   │   ├── TechnicalArsenal.tsx # Skills & technologies
│   │   ├── Timeline.tsx        # Professional timeline
│   │   ├── Achievements.tsx    # Certifications & awards
│   │   ├── CTA.tsx             # Call-to-action section
│   │   ├── Footer.tsx          # Footer
│   │   ├── ExpandableContactButton.tsx  # Contact widget
│   │   ├── InteractiveParticles.tsx     # Particle effects
│   │   ├── InteractiveSpline.tsx        # 3D model integration
│   │   ├── BackgroundLights.tsx         # Background effects
│   │   ├── InvertedCursor.tsx           # Custom cursor
│   │   ├── LoadingScreen.tsx            # Loading animation
│   │   └── index.ts            # Component barrel export
│   ├── assets/                 # Static assets
│   ├── App.tsx                 # Root component
│   ├── App.css                 # App styles
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── public/                     # Static files
├── package.json                # Dependencies & scripts
├── tsconfig.json               # TypeScript config
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS config
├── postcss.config.js           # PostCSS config
├── vercel.json                 # Vercel deployment config
└── README.md                   # This file
```

---

## 📝 Available Scripts

### Development

```bash
npm run dev
```

Starts the development server with hot module replacement (HMR) for instant updates.

### Production Build

```bash
npm run build
```

Compiles TypeScript and builds the optimized production bundle using Vite.

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally for testing before deployment.

### Linting

```bash
npm run lint
```

Runs ESLint to check code quality and adherence to coding standards.

---

## 🧩 Key Components

### Header

Navigation component with smooth scrolling and responsive menu.

### Hero Section

Eye-catching landing section with animated text, background effects, and call-to-action button.

### About

Personal introduction with background, motivation, and key highlights.

### Projects

Showcase of selected projects with descriptions, tech stacks, and links.

### Case Study: Ship Risk AI

In-depth breakdown of an ML-driven shipment risk prediction system:

- **Architecture:** ML pipeline, REST API, React Dashboard
- **Model:** Gradient Boosting classifier with 87% accuracy
- **Features:** Real-time risk scoring, recommendations, AI advisor
- **Deployment:** Firebase Hosting + Python backend
- **Impact:** 5000+ shipments analyzed, 10K+ API calls/day

### Technical Arsenal

Comprehensive display of:

- Programming languages
- Frameworks & libraries
- Machine Learning tools
- DevOps & deployment technologies
- Design & productivity tools

### Timeline

Professional history including education and work experience.

### Interactive Elements

- **Interactive Particles:** Animated particle system in background
- **Spline 3D Models:** Interactive 3D visualizations
- **Inverted Cursor:** Custom cursor effect
- **Background Lights:** Dynamic lighting effects
- **Loading Screen:** Professional loading animation

---

## 🚢 Deployment

### Vercel (Current)

The portfolio is deployed on **Vercel** and accessible at:
🔗 [https://tanmay-portfolio-hazel.vercel.app/](https://tanmay-portfolio-hazel.vercel.app/)

**Deployment Steps:**

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel automatically detects Vite configuration
4. Build and deploy on every push to main branch

**Configuration:** See `vercel.json` for deployment settings

### Local Deployment

For testing locally:

```bash
npm run build
npm run preview
```

---

## 🎨 Design System

The portfolio follows a **Dark Mode** design system inspired by Obsidian with:

- **Primary Accent:** Soft Violet (`#a78bfa`)
- **Background:** Near-black (`#09090b`)
- **Success:** Emerald Green (`#34d399`)
- **Error:** Red (`#ef4444`)
- **Typography:** Geist font family
- **Elevation:** Border-based separation with minimal shadows

---

## 🛠️ Development & Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Add TypeScript with proper typing
3. Import in `App.tsx`
4. Style with Tailwind CSS

### Modifying Styles

- Global styles: `src/index.css`
- Component styles: `src/App.css`
- Tailwind config: `tailwind.config.js`

### Environment Variables

Create `.env.local` if needed for API keys or secrets:

```env
VITE_API_URL=your_api_url
```

---

## 📦 Dependencies Overview

### Production Dependencies

- **react & react-dom:** UI framework
- **framer-motion:** Animation library
- **@splinetool/react-spline:** 3D model integration

### Dev Dependencies

- **@vitejs/plugin-react:** React plugin for Vite
- **typescript & typescript-eslint:** Type checking and linting
- **tailwindcss & postcss:** Styling utilities
- **eslint:** Code quality

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure:

- Code follows ESLint rules (`npm run lint`)
- TypeScript types are properly defined
- Build succeeds (`npm run build`)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**Tanmay Chiranjib Sahoo**

- 🌐 **Portfolio:** [https://tanmay-portfolio-hazel.vercel.app/](https://tanmay-portfolio-hazel.vercel.app/)
- 💼 **LinkedIn:** [LinkedIn Profile](#)
- 🐙 **GitHub:** [github.com/tanmay-sahoo89](https://github.com/tanmay-sahoo89)
- 📧 **Email:** [Your Email](#)

Feel free to reach out for collaborations or inquiries!

````

2. Install dependencies:

```bash
npm install
````

3. Start development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run lint` - Run ESLint checks
- `npm run preview` - Preview production build locally

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.tsx          - Navigation header
│   ├── Hero.tsx            - Hero section with intro
│   ├── About.tsx           - About me section
│   ├── TechnicalArsenal.tsx - Skills and tech stack
│   ├── Projects.tsx        - Portfolio projects showcase
│   ├── CaseStudy.tsx       - Detailed project case studies
│   ├── Achievements.tsx    - Accomplishments and awards
│   ├── Timeline.tsx        - Experience timeline
│   ├── CTA.tsx             - Call-to-action section
│   ├── Footer.tsx          - Footer with links
│   ├── InteractiveSpline.tsx - 3D Spline models
│   ├── InteractiveParticles.tsx - Animated particle effects
│   ├── InvertedCursor.tsx  - Custom cursor animation
│   ├── BackgroundLights.tsx - Animated background
│   └── LoadingScreen.tsx   - Initial loading animation
├── App.tsx                 - Main application
├── main.tsx                - Entry point
├── App.css                 - Global styles
└── index.css               - Base styles
```

## 🎨 Features

✨ **Modern UI/UX**

- Smooth animations with Framer Motion
- Interactive 3D models with Spline
- Custom cursor and particle effects
- Loading screen with animations

⚡ **Performance**

- Optimized with Vite
- TypeScript for type safety
- ESLint for code quality
- Responsive design

🌐 **SEO Optimized**

- Meta tags for social sharing
- Open Graph integration
- Twitter Card support

## 📱 Responsive Design

Fully responsive across all devices:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript settings
- `tailwind.config.js` - Tailwind CSS customization
- `postcss.config.js` - PostCSS configuration
- `eslint.config.js` - ESLint rules

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

## 🤝 Connect

- **Website:** [tanmay-portfolio-hazel.vercel.app](https://tanmay-portfolio-hazel.vercel.app/)
- **GitHub:** [github.com/tanmay-sahoo89](https://github.com/tanmay-sahoo89)
- **Email:** Contact through portfolio website

## 📞 Support

For issues or suggestions, feel free to:

- Open an issue on GitHub
- Submit a pull request
- Contact through the portfolio website

---

Built with ❤️ by Tanmay Chiranjib Sahoo
