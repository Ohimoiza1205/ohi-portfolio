import { skills } from '../data/site'
import SectionHead from './SectionHead'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <>
      <SectionHead path="stack" />
      <div className={styles.skills}>
        {skills.map((skill) => (
          <span key={skill.label} className={styles.chip}>
            <i className={skill.icon} style={skill.color ? { color: skill.color } : undefined} />
            {skill.label}
          </span>
        ))}
      </div>
    </>
  )
}
