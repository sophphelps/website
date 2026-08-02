# Sophia Phelps — Academic Portfolio

A responsive academic portfolio built with Next.js, TypeScript, and Tailwind CSS. The content is organized in reusable data structures so experience, links, awards, and skills can be updated without rewriting page layouts.

## Run locally

Requirements: Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. To create the production-ready static site:

```bash
npm run build
```

The generated site is written to `out/`.

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

## Deploy with GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys the static export whenever a commit is pushed to `main`. It can also be run manually from the repository's **Actions** tab.

1. Open the repository on GitHub and go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push the deployment changes to `main`, or run the workflow manually.
4. After the workflow succeeds, use the URL shown in the `github-pages` deployment environment.

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
