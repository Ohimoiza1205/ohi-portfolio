import { Link } from 'react-router-dom'
import SectionHead from '../components/SectionHead'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <section>
      <SectionHead path="404" />
      <div className={styles.canvas}>
        <p className={styles.title}>nothing here</p>
        <p className={styles.note}>That page does not exist, or has not been written yet.</p>
        <Link to="/" className={styles.home}>
          ← back home
        </Link>
      </div>
    </section>
  )
}
