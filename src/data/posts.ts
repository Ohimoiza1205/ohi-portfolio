import fm from 'front-matter'

export interface Post {
  slug: string
  title: string
  /** ISO date string, e.g. "2026-08-17" */
  date: string
  blurb: string
  tags: string[]
  /** raw markdown body, frontmatter stripped */
  body: string
}

interface PostFrontMatter {
  title?: string
  date?: string | Date
  blurb?: string
  tags?: string[]
}

/**
 * Every .md file in src/content/writing becomes a post at build time — no
 * database, no fetch. Dropping a file in publishes; deleting it unpublishes.
 * Files prefixed with "_" are treated as drafts and skipped.
 */
const files = import.meta.glob(
  ['../content/writing/*.md', '!../content/writing/_*.md'],
  {
    eager: true,
    query: '?raw',
    import: 'default',
  }
) as Record<string, string>

function toSlug(path: string): string {
  return path.split('/').pop()!.replace(/\.md$/, '')
}

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const { attributes, body } = fm<PostFrontMatter>(raw)
    const slug = toSlug(path)
    return {
      slug,
      title: attributes.title ?? slug,
      // yaml auto-parses unquoted dates into Date objects; normalise to a string
      date:
        attributes.date instanceof Date
          ? attributes.date.toISOString().slice(0, 10)
          : attributes.date ?? '',
      blurb: attributes.blurb ?? '',
      tags: attributes.tags ?? [],
      body,
    }
  })
  // newest first; ISO dates sort correctly as plain strings
  .sort((a, b) => b.date.localeCompare(a.date))

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function formatDate(date: string): string {
  if (!date) return ''
  const parsed = new Date(`${date}T00:00:00`)
  if (Number.isNaN(parsed.getTime())) return date
  return parsed.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
