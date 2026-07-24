# Sophia Phelps — Academic Portfolio

A responsive academic portfolio built with Next.js, TypeScript, Tailwind CSS, and the vinext build tool. The content is organized in reusable data structures so experience, links, awards, and skills can be updated without rewriting page layouts.

## Run locally

Requirements: Node.js 18.17 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. To check a production build:

```bash
npm run build
npm start
```

## Edit content

- Main content and repeated records: `data/content.ts`
- Homepage narrative: `app/page.tsx`
- Research statement and project outputs: `app/research/page.tsx`
- Teaching philosophy: `app/teaching/page.tsx`
- Metadata and social preview copy: `app/layout.tsx`
- Colors and typography: `tailwind.config.ts`

Search the project for `placeholder`, `YOUR_`, or `#placeholder` to find every item that still needs personal information.

## Add personal assets

1. Replace the visual headshot block in `app/page.tsx` or use `public/headshot-placeholder.svg` as a guide. Add an optimized portrait to `public/`.
2. Add the final CV as `public/sophia-phelps-cv.pdf`, then replace the print button or add a direct download link.
3. Add public project images to `public/research/`.
4. Replace placeholder contact and profile URLs in `data/content.ts`.
5. Replace publication, poster, slide, repository, and DOI placeholders once they are public.

## Deploy with Vercel

1. Push this folder to a Git repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel will detect Next.js automatically. Keep the default build command (`next build`) and output settings.
4. Select **Deploy**.
5. Add your custom domain under **Project Settings → Domains**, if desired.

No environment variables are required.

## Pre-launch checklist

- [ ] Professional headshot and descriptive alternative text
- [ ] Email address
- [ ] LinkedIn URL
- [ ] GitHub URL
- [ ] Google Scholar URL
- [ ] ORCID
- [ ] Final CV PDF
- [ ] Publication citation and DOI
- [ ] Research poster PDF
- [ ] Presentation slides
- [ ] JPL/PARVI project images and captions
- [ ] Project repository URL
- [ ] NASA TechRise article URL
- [ ] Preferred production domain added to metadata

## Accessibility and maintenance

The site uses semantic headings, a skip link, visible keyboard focus, labeled navigation, responsive layouts, and restrained motion. Placeholder links are intentionally easy to find; replace them before launch so every link has a meaningful destination.
