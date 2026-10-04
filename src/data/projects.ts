export interface Project {
  title: string
  /** '/img/<file>' thumbnail. Omit to render the card without one. */
  image?: string
  github?: string
  /** label for the GitHub icon, default 'GitHub repository' */
  githubLabel?: string
  /** optional live/demo URL, rendered as a link icon next to the GitHub icon */
  link?: string
  /** one or more badges rendered next to the title */
  badge?: string | string[]
  /** short stat chips shown under the title */
  stats?: string[]
  description?: string
  /** achievement bullets rendered under the description */
  bullets?: string[]
  tags: string[]
}

export const projects: Project[] = [
  {
    title: 'SELT Technologies',
    badge: ['Launched April 2026 at TTU', 'USPTO provisional patent filed'],
    link: 'https://seltapp.com',
    stats: ['109 customer discovery interviews'],
    description:
      'SELT is a verified, campus isolated, SSO authenticated student marketplace. It launched at Texas Tech in April 2026 after 109 customer discovery interviews through NSF I-Corps, and a USPTO provisional patent is filed. My co-founder Peace Enesi built the backend and the full codebase. I built the frontend on the Next.js App Router with React, TypeScript, and Supabase: the landing page, onboarding, listings, the inbox and chat, the mobile responsive pass, and an admin portal with an AI moderation queue.',
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase'],
  },
  {
    title: 'Verba',
    image: '/img/verba.jpg',
    badge: ['1st place, HackWesTX VII', 'MLH Best Use of ElevenLabs'],
    link: 'https://www.verba.rocks/',
    stats: ['1st place overall'],
    description:
      "Verba is live translated video calling. It transcribes each speaker, translates the text, and plays the speech back in the speaker's cloned voice. It won 1st place at HackWesTX VII and MLH Best Use of ElevenLabs. I built the call interface: live audio visualizations, collaborative whiteboards, session replay, and transcripts, all wired into the LiveKit voice pipeline.",
    tags: ['Next.js', 'TypeScript', 'LiveKit', 'Deepgram', 'ElevenLabs', 'Supabase'],
  },
  {
    title: 'CodeClash',
    image: '/img/hackwest.jpg',
    badge: ['2nd Place, HackWesTX VI, Fall 2025', 'Top 3, Google x MLH AI Roadshow'],
    github: 'https://github.com/darlenesantes/Code-Clash',
    githubLabel: 'team repo',
    link: 'https://code-clash.netlify.app/',
    stats: ['50+ concurrent matches', 'under 200ms sync'],
    description:
      'CodeClash is a 1v1 coding battle game built at HackWesTX. It took 2nd place there and placed Top 3 at the Google x MLH AI Roadshow, one of 3 teams nationally.',
    bullets: [
      'Built a multiplayer coding platform supporting 50+ concurrent matches with WebSocket code synchronization under 200ms.',
      'Architected session recovery so disconnected clients could rejoin active matches without losing state.',
    ],
    tags: ['JavaScript', 'React', 'WebSockets'],
  },
]
