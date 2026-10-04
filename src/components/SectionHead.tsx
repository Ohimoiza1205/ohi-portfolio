import styles from './SectionHead.module.css'

interface SectionHeadProps {
  /** the section label, e.g. "experience" — rendered after a "~/" prefix */
  path: string
  /** optional zero-padded count of entries in the section */
  count?: number
}

export default function SectionHead({ path, count }: SectionHeadProps) {
  return (
    <div className={styles.head}>
      <span className={styles.path}>
        <span className={styles.dim}>~/</span>
        {path}
      </span>
      {count !== undefined && (
        <span className={styles.count}>{String(count).padStart(2, '0')}</span>
      )}
      <span className={styles.rule} />
    </div>
  )
}
