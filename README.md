# ohi-portfolio

Personal site for **Ohinoyi Moiza (Ohi)**. Computer science at Texas Tech University, co-founder and CEO of SELT Technologies.

A single page portfolio built with **Vite + React + TypeScript**. Content lives in plain data files, presentation lives in small per component CSS Modules, and the look is driven by a handful of design tokens: off white paper, monospace labels, hairline rules, and one green accent.

---

## Tech stack

| Concern        | Choice                                        |
| -------------- | --------------------------------------------- |
| Build tool     | [Vite](https://vitejs.dev) 7                  |
| UI             | React 18 + TypeScript                         |
| Styling        | CSS Modules + CSS custom properties (tokens)  |
| Type / icons   | IBM Plex Mono + IBM Plex Sans; Font Awesome + Devicon (via CDN, loaded in `index.html`) |
| Hosting        | Netlify (static build output)                 |

There is no CSS framework and no runtime data fetching. Everything is static and compiles to plain HTML, CSS, and JS.

---

## Directory structure

```
.
├── index.html              # Vite entry: <head> (title, meta, favicon, font + icon CDNs) and #root
├── vite.config.ts          # Vite config (base '/', React plugin)
├── tsconfig.json           # TypeScript config (single project, noEmit; Vite does the bundling)
├── netlify.toml            # Netlify build settings (command, publish dir, SPA redirect)
├── package.json            # scripts + dependencies
│
├── public/                 # copied verbatim to the site root at build time
│   ├── om-mark.svg         #   OM monogram, used as the favicon and the hero mark
│   └── img/                #   served at /img/* (logos + project thumbnails)
│
└── src/
    ├── main.tsx            # React entry: mounts <App> in a <BrowserRouter>, imports global.css
    ├── App.tsx             # route table: nav + <Routes>
    │
    ├── data/               # CONTENT lives here, separated from presentation
    │   ├── site.ts         #   profile, socials, skills, about paragraphs, education, awards
    │   ├── experience.ts   #   work and leadership (array of Experience)
    │   ├── research.ts     #   research entries + the numbers strip (array of ResearchEntry)
    │   ├── projects.ts     #   projects (array of Project)
    │   └── posts.ts        #   blog loader: globs content/writing/*.md at build time
    │
    ├── content/writing/    # BLOG POSTS, one markdown file per post
    │   └── _example-post.md  #   "_" prefix = draft, excluded from the build
    │
    ├── pages/              # one component per route
    │   ├── Home.tsx        #   "/"            hero + about (prose, stack, education, awards)
    │   ├── ExperiencePage.tsx  # "/experience"
    │   ├── ResearchPage.tsx    # "/research"  (nav link appears once research.ts has entries)
    │   ├── ProjectsPage.tsx    # "/projects"
    │   ├── WritingPage.tsx     # "/writing"    post list, or "coming soon" when empty
    │   ├── PostPage.tsx        # "/writing/:slug"  renders one markdown post
    │   └── NotFoundPage.tsx    # "*"
    │
    ├── components/         # one component per visual block, each with a co-located .module.css
    │   ├── Nav.tsx         #   sticky centred nav; the writing link only shows once a post exists
    │   ├── Hero.tsx        #   OM mark, name, meta line, social links
    │   ├── About.tsx       #   about paragraphs + <Skills> + <Education> + <Awards>
    │   ├── Skills.tsx      #   "~/stack" icon chips
    │   ├── Experience.tsx  #   experience entries (initials box when an entry has no logo)
    │   ├── Research.tsx    #   numbers strip + research cards (venue badge, date, stats, bullets, footnote)
    │   ├── Stats.tsx       #   reusable stat chips (strongest numbers first)
    │   ├── Projects.tsx    #   project cards (GitHub + optional live link icons)
    │   ├── Education.tsx   #   education card
    │   ├── Awards.tsx      #   awards list
    │   ├── Writing.tsx     #   post list / empty state
    │   ├── SectionHead.tsx #   reusable "~/label  NN" section header
    │   └── Tags.tsx        #   reusable tag/pill list
    │
    ├── hooks/
    │   └── useScrollToTop.ts    # resets scroll position on route change
    │
    └── styles/
        ├── tokens.css      # all design tokens: colors, fonts, spacing, layout width
        └── global.css      # reset, base typography, root font size, .wrap layout
```

`src/data/*` is *what* the site says; `src/components/*` is *how* it looks. Almost all content changes happen in `src/data` without touching a component.

---

## Content model

### `src/data/site.ts`

- `profile`: `name` (the hero heading) and `meta` (the `/` separated mono line under it).
- `socials`: hero social buttons. Each: `{ label, href, icon }`.
- `skills`: the `~/stack` chips. Each: `{ label, icon, color? }`.
- `about`: array of paragraphs; each string becomes a `<p>`.
- `education`: `{ school, degree, clubs: string[] }`.
- `awards`: array of strings rendered under `~/awards`.

### `src/content/writing/*.md`

One markdown file per post. The filename is the URL slug, so `my-post.md` is served at `/writing/my-post`. Frontmatter drives the listing:

```markdown
---
title: 'Hello, world'
date: '2026-08-17'
blurb: 'One line shown in the post list.'
tags: ['notes']
---

Body in plain markdown.
```

- Publish: add a `.md` file, commit, deploy.
- Draft: prefix the filename with `_`. Drafts are excluded from the bundle entirely.
- Posts sort newest first by `date`. Quote the date so YAML keeps it a string.
- With zero published posts, `/writing` shows the "coming soon" panel and the nav hides the writing link.

### `src/data/experience.ts`

```ts
{
  role: string        // the title line
  org: string         // organisation, rendered in green uppercase
  place?: string      // location, right aligned on the title line
  period?: string     // e.g. 'June 2025 to August 2025'
  logo?: string       // '/img/<file>' from public/img; omit to show the org initials
  team?: string       // optional sub line, e.g. 'AI and Data'
  stats?: string[]    // stat chips shown before the bullets
  bullets: string[]   // empty array renders no list
  tags: string[]
}
```

### `src/data/research.ts`

```ts
{
  title: string        // the topic
  venue: 'Research Assistant' | 'Invited Speaker' | 'Presenter' | 'Solo Author' | 'Finalist'
  where: string        // program, conference, or competition
  date: string         // e.g. 'April 21, 2026'
  stats: string[]      // stat chips
  bullets: string[]
  funding?: string     // footnote line
  mentor?: string      // footnote line
  link?: string
  tags?: string[]
}
```

`researchNumbers` (`{ value, label }[]`) feeds the numbers strip at the top of the page.

### `src/data/projects.ts`

```ts
{
  title: string
  image?: string       // '/img/<file>' thumbnail; omit to render the card without one
  github?: string      // renders a GitHub icon
  githubLabel?: string // optional text next to the icon, e.g. 'team repo'
  link?: string        // live or demo URL; renders a link icon
  badge?: string | string[]  // small outlined badges next to the title
  stats?: string[]     // stat chips under the title
  description?: string // paragraph under the title
  bullets?: string[]   // achievement bullets under the description
  tags: string[]
}
```

---

## Styling

1. `src/styles/tokens.css`: palette, fonts, content width, nav height. Everything reads these via CSS variables.
2. `src/styles/global.css`: reset, base typography, and the global scale. `html { font-size }` grows or shrinks the whole site.
3. `Component.module.css`: styles scoped to one component.

### Icons

- Font Awesome: `fa-brands fa-python`, `fa-solid fa-envelope`, `fab fa-github`, ...
- Devicon: `devicon-postgresql-plain`, `devicon-typescript-plain colored`, ...

If an `fa-*` icon renders blank, that brand is probably not in Font Awesome. Look it up in Devicon instead.

### Images

Anything in `public/` is served from the site root, so logos and thumbnails are referenced by absolute path (`/img/ttu.jpeg`), not imported.

---

## Local development

```bash
npm install
npm run dev      # dev server with hot reload (http://localhost:5173)
npm run build    # type check (tsc) + production build into dist/
npm run preview  # serve the production build locally
```

---

## Deployment (Netlify)

The build is fully static. `netlify.toml` already declares the build command, the publish directory, and the SPA redirect, so connecting the repo in Netlify needs no extra config. A custom domain, if any, is configured in the Netlify dashboard.
