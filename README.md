# Momna Qamar — UI/UX Portfolio

A static portfolio site (HTML, CSS, JavaScript) with a Vercel serverless function for the contact form.

## Folder structure

```
momna-portfolio/
├── index.html        page structure and content
├── style.css         all styles and hover effects
├── script.js         menu, FAQ accordion, scroll animations, form
├── api/
│   └── contact.js    backend: emails form submissions via Resend
└── assets/           put your images here
```

## Add your images

Export these from Figma into the `assets` folder with exactly these names:

- `hero.png` — the 3D hero image
- `artify.jpg` — Artify AI project image
- `biterush.jpg` — Bite Rush project image
- `pawhaven.jpg` — Pawhaven project image

## Run locally

Open `index.html` in your browser, or use the VS Code "Live Server" extension.
The contact form only works once deployed on Vercel (or with `vercel dev`).

## Contact form setup

1. Create a free account at https://resend.com and copy an API key.
2. In Vercel → Project → Settings → Environment Variables, add:
   - `RESEND_API_KEY` = your key
   - `CONTACT_TO_EMAIL` = momnaqamar68@gmail.com
3. Redeploy.
