# CV Platform — Frontend

Interactive CV web app with dark/light mode, LLM chat assistant, and contact form.
Built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **React 18** + TypeScript + Vite
- **Tailwind CSS v3** — dark/light mode via CSS variables
- **Framer Motion** — page and section animations
- **React Router** — client-side routing
- **Vitest** + Testing Library — unit tests

## Pages

| Route | Access | Description |
|-------|--------|-------------|
| `/` | VIEWER | Full CV view |

## Features

- 🌙 Dark / light mode toggle
- 📥 CV PDF download
- 📬 Contact form with email confirmation

## Local Setup

**Prerequisites:** Node 18+
```bash
git clone https://github.com/NuriaOlivares/cv-frontend
cd cv-frontend
npm install
```

Create `.env`:
```
VITE_EMAILJS_PUBLIC_KEY
VITE_EMAILJS_TEMPLATE_NOTIFY
VITE_EMAILJS_TEMPLATE_CONFIRM
```

Run:
```bash
npm run dev
```

App available at `http://localhost:5173`

## Tests
```bash
npm run test:run
```

## Deployment

Deployed as a Static Site on [Netlify](https://app.netlify.com/).
Build command: `npm run build`
Publish directory: `dist`