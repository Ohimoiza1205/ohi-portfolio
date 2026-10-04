---
title: 'Hello, world'
date: '2026-08-17'
blurb: 'A template post. Rename this file without the leading underscore to publish it.'
tags: ['meta']
---

This file is a **draft**. The leading `_` in the filename keeps it off the site.

To publish a post:

1. Copy this file to `src/content/writing/my-post-slug.md` (no underscore).
2. Edit the frontmatter above: `title`, `date`, `blurb`, and `tags`.
3. Write the body in plain markdown.

The filename becomes the URL, so `my-post-slug.md` is served at
`/writing/my-post-slug`.

## What renders

Headings, **bold**, _italics_, [links](https://github.com/Ohimoiza1205), lists, and quotes all
work out of the box:

> Posts are just files in git. There is no database and no CMS to maintain.

Inline `code` and fenced blocks are styled to match the rest of the site:

```ts
const files = import.meta.glob('../content/writing/*.md', { eager: true })
```

That is the whole workflow: write markdown, commit, deploy.
