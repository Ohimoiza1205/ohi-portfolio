import { awards } from '../data/site'
import SectionHead from './SectionHead'
import styles from './Awards.module.css'

export default function Awards() {
  return (
    <>
      <SectionHead path="awards" count={awards.length} />
      <ul className={styles.list}>
        {awards.map((award) => (
          <li key={award}>{award}</li>
        ))}
      </ul>
    </>
  )
}
