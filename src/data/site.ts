export interface SocialLink {
  label: string
  href: string
  icon: string // font-awesome class
}

export interface Skill {
  label: string
  icon: string // icon class (font-awesome or devicon)
  color?: string
}

export const profile = {
  name: 'Ohi',
  /** the "/"-separated mono line under the name */
  meta: ['Ohinoyi Moiza', 'CS at Texas Tech', 'Co-founder and CEO, SELT Technologies'],
}

export const socials: SocialLink[] = [
  { label: 'github', href: 'https://github.com/Ohimoiza1205', icon: 'fab fa-github' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/ohinoyi-moiza/', icon: 'fab fa-linkedin-in' },
  { label: 'email', href: 'mailto:omoiza@ttu.edu', icon: 'fa-solid fa-envelope' },
]

/** Stack chips. Each entry is backed by public repos or shipped projects. */
export const skills: Skill[] = [
  { label: 'Python', icon: 'fa-brands fa-python', color: '#3776AB' },
  { label: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { label: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { label: 'Go', icon: 'fa-brands fa-golang', color: '#00ADD8' },
  { label: 'Java', icon: 'fa-brands fa-java', color: '#E76F00' },
  { label: 'C', icon: 'devicon-c-plain', color: '#5C6BC0' },

  { label: 'React', icon: 'fa-brands fa-react', color: '#149ECA' },
  { label: 'Next.js', icon: 'devicon-nextjs-plain', color: '#16150f' },
  { label: 'Node.js', icon: 'fa-brands fa-node-js', color: '#339933' },
  { label: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain', color: '#06B6D4' },

  { label: 'Supabase', icon: 'devicon-supabase-plain', color: '#3ECF8E' },
  { label: 'PostgreSQL', icon: 'devicon-postgresql-plain', color: '#336791' },
  { label: 'Docker', icon: 'fa-brands fa-docker', color: '#2496ED' },
]

export const about: string[] = [
  'I study computer science at Texas Tech University with a 3.66 GPA and a mathematics minor, and I graduate in May 2027. I was accepted into the accelerated BS/MS in Software and Security Engineering.',
  'I co-founded SELT Technologies in August 2023 and run it as CEO. We launched a verified student marketplace at Texas Tech in April 2026 after 109 customer discovery interviews through NSF I-Corps, and we filed a USPTO provisional patent.',
  'I have interned at EY twice in Technology Consulting, in 2025 and in 2026 on AI and Data, and through Google G-SWEP. On campus I grade two engineering courses, work as a research assistant on NSF funded work that I presented at GlobusWorld 2026, and serve as Director of Engagement for the Matador Collegiate Consulting Club.',
  'Outside of work: faith, fitness, and soccer.',
]

export const education = {
  school: 'Texas Tech University',
  degree: 'BS Computer Science, Mathematics minor. GPA 3.66. May 2027. Accepted into the accelerated BS/MS in Software and Security Engineering.',
  clubs: [
    'Honors College and CS research (URS TrUE)',
    'Matador Collegiate Consulting Club, Director of Engagement',
    'TECHniques Center tutor',
    'LYFE Mentor',
    'Student and Campus Life Ambassador',
  ],
}

export const awards: string[] = [
  'JPMorgan Code for Good, 1st place',
  'Texas Tech Idea Competition, 1st place',
  'Accenture Pitch to Win, Champion',
  'SaaStock USA, Top 20 Finalist',
  'TTU Innovation Hub JumpStart Grant recipient',
  'University of Chicago Trading Competition participant',
]
