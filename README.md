
# React Portfolio (Starter)

Final portfolio submission - Sahil
This starter meets the assignment requirements:
- 5 pages (Home, About, Projects, Services, Contact) with navigation bar and custom logo.
- Home has welcome + Mission statement + links to other pages.
- About shows legal name, headshot image, a short paragraph, and a **Resume (PDF)** link.
- Projects shows at least **3 projects** with images and descriptions of your role/outcome.
- Services lists what you offer.
- Contact shows contact info panel **and** an interactive form (captures data into `localStorage` and redirects to Home).
- Clean CSS, JS works, assets in `src/assets` and `public`.
- Internal documentation via meaningful variable names and inline comments.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy (Vercel quick way)

1. Push this repository to GitHub.
2. On https://vercel.com import the repo, framework = **Vite**, build = `npm run build`, output folder = `dist`.
3. Deploy. Copy the live URL into your assignment.

## Replace placeholders

- **Your Name** in NavBar, About, Footer.
- **Email/Phone/Links** in Footer and Contact.
- Replace `/public/resume.pdf` with your real resume file.
- Update `projects` data in `src/pages/Projects.jsx` and services in `src/pages/Services.jsx`.
- Replace `src/assets/headshot.svg` with your photo (keep same filename or update the import).

## Folder notes

- `public/` files are served at the site root (e.g., `/resume.pdf`).
- Do **not** check in `node_modules`.
- `.gitignore` is set for Node/Vite.
