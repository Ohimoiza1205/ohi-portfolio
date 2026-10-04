import { NavLink } from 'react-router-dom'
import { posts } from '../data/posts'
import { research } from '../data/research'
import styles from './Nav.module.css'

// order: about, experience, research, projects. The research and writing links
// only appear once their data has entries; the routes work either way.
const LINKS = [
  { to: '/', label: 'about' },
  { to: '/experience', label: 'experience' },
  ...(research.length > 0 ? [{ to: '/research', label: 'research' }] : []),
  { to: '/projects', label: 'projects' },
  ...(posts.length > 0 ? [{ to: '/writing', label: 'writing' }] : []),
]

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.brand}>
        ohi
      </NavLink>
      <div className={styles.links}>
        {LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            // "/" would otherwise match every route, so only it needs `end`
            end={to === '/'}
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
