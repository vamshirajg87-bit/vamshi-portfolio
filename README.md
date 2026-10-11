# vamshi-portfolio

Personal portfolio and technical blog for **Vamshi Raj Goud** — Data Engineer | Cloud Data Platforms | AI Systems.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and MDX. Every page is statically generated; there is no database, authentication, or paid service.

## Local development

Requires Node.js 20.9+ (Node 22 LTS recommended).

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run lint       # ESLint (Next.js core-web-vitals + TypeScript rules)
npm run typecheck  # tsc --noEmit
npm run build      # production build
npm run start      # serve the production build
```

## Project structure

```
app/                 Routes, layout, SEO (sitemap, robots, OG image, icon)
  blog/              Blog index and /blog/[slug] article pages
components/
  layout/            Navbar, mobile menu, footer
  sections/          Home page sections (Hero, About, Experience, ...)
  ui/                Reusable primitives (Section, ProjectCard, Tag, ...)
content/             All editable site content
  site.ts            Name, headline, bio, contact links, résumé path
  experience.ts      Roles
  skills.ts          Grouped skills
  projects.ts        Featured projects
  posts/*.mdx        Blog articles
lib/                 Types, post loading, formatting helpers
mdx-components.tsx   Styling for MDX elements
```

## Editing content

All text lives in `content/` — you should not need to touch components to update the site.

- **Contact links** — add entries to `contact` in `content/site.ts`, e.g.
  `{ label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle", display: "in/your-handle" }`.
  The Contact section and its nav item only appear once at least one link exists.
- **Résumé** — place the PDF in `public/` (e.g. `public/resume.pdf`) and set `resumePath: "/resume.pdf"`. No button is shown while it is `null`.
- **Experience** — `period` and `highlights` are optional and hidden when empty. Add them only once verified.
- **Projects** — `implemented`, `planned`, `stages`, `status`, and `links` are all optional; empty values are not rendered. Only add links that work.

## Writing a blog post

1. Create `content/posts/<slug>.mdx`. The file name becomes the URL: `/blog/<slug>`.
2. Start the file with a `metadata` export:

   ```mdx
   export const metadata = {
     title: "Post title",
     description: "One or two sentences used in listings and SEO.",
     date: "2026-10-11",
     tags: ["Data Engineering"],
     draft: false, // set true to hide it from the site
   };

   Your article in Markdown...
   ```

3. Run `npm run dev` to preview. The post is picked up automatically by the blog index, the home page preview, and the sitemap.

## Deploying to Vercel

1. Push the repository to GitHub.
2. In Vercel, choose **Add New → Project** and import `vamshi-portfolio`. The Next.js preset is detected automatically; no build settings need changing.
3. *(Optional)* Under **Settings → Environment Variables**, set `NEXT_PUBLIC_SITE_URL` to the final URL (e.g. `https://yourdomain.com`). This is used for canonical URLs, Open Graph tags, and the sitemap. If unset, the Vercel production domain is used automatically.
4. Deploy. Subsequent pushes to the default branch redeploy; other branches get preview URLs.

To use a custom domain, add it under **Settings → Domains** and update `NEXT_PUBLIC_SITE_URL` to match.

## Accessibility and performance notes

- Semantic landmarks, skip-to-content link, visible focus styles, and a keyboard-accessible mobile menu (Escape closes it).
- Scroll-reveal animations are disabled for users who prefer reduced motion and never hide content when JavaScript is unavailable.
- Fonts (Geist, Geist Mono) are self-hosted via `next/font`; no client-side animation or icon libraries are used.
