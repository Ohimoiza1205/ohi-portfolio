import { education } from '../data/site'
import SectionHead from './SectionHead'
import styles from './Education.module.css'

export default function Education() {
  return (
    <>
      <SectionHead path="education" />
      <div className={styles.edu}>
        <img
          className={styles.logo}
          src="/img/ttu-vintage-no-bg.png"
          alt={`${education.school} logo`}
        />
        <div className={styles.content}>
          <h3 className={styles.school}>{education.school}</h3>
          <p className={styles.degree}>{education.degree}</p>
          <p className={styles.label}>Actively involved in</p>
          <ul className={styles.clubs}>
            {education.clubs.map((club) => (
              <li key={club}>{club}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
