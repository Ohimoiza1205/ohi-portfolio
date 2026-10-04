import { profile, socials } from '../data/site'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <header className={styles.hero} id="top">
      <img className={styles.mark} src="/om-mark.svg" alt="OM monogram for Ohinoyi Moiza" />
      <h1 className={styles.name}>{profile.name}</h1>
      {profile.meta.length > 0 && (
        <p className={styles.meta}>
          {profile.meta.map((item, i) => (
            <span key={item}>
              {i > 0 && <span className={styles.sep}>/</span>}
              {item}
            </span>
          ))}
        </p>
      )}
      <div className={styles.social}>
        {socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
            <i className={s.icon} /> {s.label}
          </a>
        ))}
      </div>
    </header>
  )
}
