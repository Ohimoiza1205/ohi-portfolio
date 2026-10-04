import { about } from '../data/site'
import Skills from './Skills'
import Education from './Education'
import Awards from './Awards'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about">
      <div className={styles.prose}>
        {about.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      <Skills />
      <Education />
      <Awards />
    </section>
  )
}
