import styles from './Tags.module.css'

interface TagsProps {
  items: string[]
  /** optional extra class from the consuming component (e.g. layout tweaks) */
  className?: string
}

export default function Tags({ items, className }: TagsProps) {
  return (
    <div className={className ? `${styles.tags} ${className}` : styles.tags}>
      {items.map((tag) => (
        <span key={tag} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
  )
}
