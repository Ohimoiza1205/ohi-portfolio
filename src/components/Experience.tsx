import { experience } from '../data/experience'
import SectionHead from './SectionHead'
import Stats from './Stats'
import Tags from './Tags'
import styles from './Experience.module.css'

/** first letters of the first two words, e.g. "SELT Technologies" becomes "ST" */
function initials(org: string): string {
  return org
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('')
}

export default function Experience() {
  return (
    <section id="experience">
      <SectionHead path="experience" count={experience.length} />
      {experience.map((job) => (
        <article className={styles.entry} key={`${job.org}-${job.role}`}>
          <div className={styles.head}>
            {job.logo ? (
              <img className={styles.logo} src={job.logo} alt={`${job.org} logo`} />
            ) : (
              <span className={styles.logoFallback} aria-hidden="true">
                {initials(job.org)}
              </span>
            )}
            <div className={styles.headMain}>
              <div className={styles.roleRow}>
                <h3 className={styles.role}>{job.role}</h3>
                {job.place && <span className={styles.place}>{job.place}</span>}
              </div>
              <div className={styles.orgRow}>
                <span className={styles.org}>{job.org}</span>
                {job.period && <span className={styles.period}>{job.period}</span>}
              </div>
            </div>
          </div>
          {job.team && <p className={styles.team}>{job.team}</p>}
          <Stats items={job.stats} />
          {job.bullets.length > 0 && (
            <ul className={styles.bullets}>
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
          <Tags items={job.tags} />
        </article>
      ))}
    </section>
  )
}
