import styles from './Stats.module.css'

interface StatsProps {
  items?: string[]
  className?: string
}

/** small stat chips: the strongest numbers of an entry, shown before its bullets */
export default function Stats({ items, className }: StatsProps) {
  if (!items || items.length === 0) return null
  return (
    <div className={className ? `${styles.stats} ${className}` : styles.stats}>
      {items.map((stat) => (
        <span key={stat} className={styles.stat}>
          {stat}
        </span>
      ))}
    </div>
  )
}
