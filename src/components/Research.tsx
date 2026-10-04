import { research, researchNumbers } from '../data/research'
import SectionHead from './SectionHead'
import Stats from './Stats'
import Tags from './Tags'
import styles from './Research.module.css'

export default function Research() {
  return (
    <section id="research">
      <SectionHead path="research" count={research.length} />

      {researchNumbers.length > 0 && (
        <div className={styles.strip}>
          {researchNumbers.map((n) => (
            <div key={`${n.value}-${n.label}`} className={styles.number}>
              <span className={styles.value}>{n.value}</span>
              <span className={styles.label}>{n.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className={styles.grid}>
        {research.map((entry) => (
          <article className={styles.card} key={entry.title}>
            <div className={styles.cardHead}>
              <span className={styles.venue}>{entry.venue}</span>
              <span className={styles.date}>{entry.date}</span>
            </div>
            <h3 className={styles.title}>
              {entry.link ? (
                <a href={entry.link} target="_blank" rel="noopener noreferrer">
                  {entry.title} <i className="fas fa-link" aria-hidden="true" />
                </a>
              ) : (
                entry.title
              )}
            </h3>
            <p className={styles.where}>{entry.where}</p>
            <Stats items={entry.stats} className={styles.stats} />
            {entry.bullets.length > 0 && (
              <ul className={styles.bullets}>
                {entry.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
            {(entry.funding || entry.mentor) && (
              <p className={styles.foot}>
                {entry.funding && <span>Funding: {entry.funding}</span>}
                {entry.funding && entry.mentor && <span className={styles.sep}>/</span>}
                {entry.mentor && <span>Mentor: {entry.mentor}</span>}
              </p>
            )}
            {entry.tags && entry.tags.length > 0 && <Tags items={entry.tags} />}
          </article>
        ))}
      </div>
    </section>
  )
}
