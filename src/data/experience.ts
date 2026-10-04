export interface Experience {
  role: string
  org: string
  /** omit when unknown; the row simply has no location */
  place?: string
  /** e.g. 'June 2025 to August 2025'. Omit when unknown. */
  period?: string
  /** '/img/<file>' from public/img. Omit to show the org initials instead. */
  logo?: string
  team?: string
  /** short stat chips shown before the bullets, strongest number first */
  stats?: string[]
  bullets: string[]
  tags: string[]
}

// Work and leadership only. Newest start first.
export const experience: Experience[] = [
  {
    role: 'Undergraduate Grader, ENGR 1340 with Dr. Amjad and CS 2365 with Dr. Shin',
    org: 'Texas Tech University',
    place: 'Lubbock, TX',
    period: 'Fall 2026',
    logo: '/img/wcoe.jpeg',
    stats: ['10 hours per week each'],
    bullets: [],
    tags: ['ENGR 1340', 'CS 2365'],
  },
  {
    role: 'Technology Consulting Intern',
    org: 'EY',
    team: 'AI and Data',
    place: 'Houston, TX',
    period: 'June 2026 to August 2026',
    bullets: [],
    tags: ['Technology Consulting', 'AI and Data'],
  },
  {
    role: 'Co-founder and CEO',
    org: 'SELT Technologies',
    period: 'Launched April 2026 at TTU',
    stats: ['109 customer discovery interviews', 'USPTO provisional patent filed'],
    bullets: [
      'Verified, campus isolated, SSO authenticated student marketplace.',
      '109 customer discovery interviews through NSF I-Corps.',
      'Peace Enesi built the backend and full codebase. I built the frontend with the Next.js App Router, React, TypeScript, and Supabase.',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'NSF I-Corps'],
  },
  {
    role: 'Director of Engagement',
    org: 'Matador Collegiate Consulting Club',
    place: 'Lubbock, TX',
    period: 'September 2025 to Present',
    logo: '/img/ttu.jpeg',
    stats: ['67% growth', '15+ consultants', '4+ paid engagements'],
    bullets: [
      'Grew active membership 67% to 15+ consultants, sourced 4+ paid client engagements, and built the recruitment and training pipeline through case prep and client readiness workshops.',
    ],
    tags: ['Consulting', 'Client engagements', 'Training'],
  },
  {
    role: 'Software Engineering Program (G-SWEP, DSA and System Design)',
    org: 'Google',
    place: 'New York, NY (Hybrid)',
    period: 'August 2025 to October 2025',
    logo: '/img/google.jpeg',
    stats: ['1 of 200', '8 weeks'],
    bullets: [
      'Selected as 1 of 200 participants for an 8 week software engineering program with 1:1 Google engineer mentorship in data structures, algorithms, and system design.',
    ],
    tags: ['Data structures', 'Algorithms', 'System design'],
  },
  {
    role: 'Technology Consulting Intern',
    org: 'EY',
    place: 'Houston, TX',
    period: 'June 2025 to August 2025',
    bullets: [],
    tags: ['Technology Consulting'],
  },
  {
    role: 'Student Assistant III',
    org: 'Texas Tech IT',
    place: 'Lubbock, TX',
    period: 'August 2023 to December 2025',
    logo: '/img/ttu.jpeg',
    stats: ['30% faster response', '1,000+ daily tickets', '30+ technicians', '50,000+ users'],
    bullets: [
      'Designed a ServiceNow system that routed support requests based on technician skills and availability, reducing median response times by 30% across 1,000+ daily tickets.',
      'Led and trained 30+ student technicians supporting systems used by more than 50,000 students and faculty.',
    ],
    tags: ['ServiceNow', 'IT support', 'Training'],
  },
]
