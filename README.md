# 💎 Abstract Website

A modern, responsive, and performant web application rebuilt using **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**. 

This project was originally created with React and Vite and has been successfully migrated to the latest Next.js features to leverage Server Components, enhanced SEO, file-based routing, and optimized layout rendering.

---

## 🚀 Features & Components

The home page has been fully refactored and tailored for all screen sizes (Desktop, Tablet, and Mobile):

- **Responsive Navigation Bar (`Navbar`)**: Mobile-friendly navigation with interactive layout support.
- **Hero / Introduce Section (`Introduce`)**: Engaging call-to-action and primary introduction layout.
- **Search Functionality (`SearchBox`)**: Interactive search box component for filtering help topics and resources.
- **Option Grid (`Option`)**: Grid-based section displaying Abstract features and categories.
- **Interactive Form (`Form`)**: Fully styled, accessible, and responsive user contact/submission form.
- **Footer (`Footer`)**: Multi-column responsive footer with links and copyright information.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Version Control**: Git & GitHub

---

## 📂 Project Structure

```
abstract/
├── app/
│   ├── globals.css         # Global styles & Tailwind directives
│   ├── layout.tsx          # Root layout with global metadata
│   └── page.tsx            # Main Home page integrating all sections
├── components/             # Reusable responsive UI components
│   ├── Navbar.tsx
│   ├── Introduce.tsx
│   ├── SearchBox.tsx
│   ├── Option.tsx
│   ├── Form.tsx
│   └── Footer.tsx
├── public/                 # Static assets (images, icons)
│   └── images/
└── README.md
```

🏁 Getting Started
To run this project locally, follow these steps:

1. Clone the repository
```bash
git clone [https://github.com/saba-sh80/abstract.git](https://github.com/saba-sh80/abstract.git)
cd abstract
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Then open http://localhost:3000 with your browser to see the application in action.

---

<div align="center">

⭐ If you liked this project, support it by giving it a star!

Made with 🤍

</div>

---

👤 Author
Saba Shirazi