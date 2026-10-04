import { projects } from '../data/projects'
import SectionHead from './SectionHead'
import Stats from './Stats'
import Tags from './Tags'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects">
      <SectionHead path="projects" count={projects.length} />
      <div className={styles.grid}>
        {projects.map((project) => (
          <article className={styles.project} key={project.title}>
            {project.image && (
              <div className={styles.thumbCol}>
                <img className={styles.thumb} src={project.image} alt={project.title} />
              </div>
            )}
            <div className={styles.body}>
              <div className={styles.titleRow}>
                <h3>
                  {project.title}
                  {project.badge &&
                    (Array.isArray(project.badge) ? project.badge : [project.badge]).map((badge) => (
                      <span className={styles.badge} key={badge}>
                        {badge}
                      </span>
                    ))}
                </h3>
                <span className={styles.links}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={project.githubLabel ?? 'GitHub repository'}
                      title={project.githubLabel ?? 'GitHub repository'}
                    >
                      <i className="fab fa-github" />
                      {project.githubLabel && <span className={styles.linkLabel}>{project.githubLabel}</span>}
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Live site" title="Live site">
                      <i className="fas fa-link" />
                    </a>
                  )}
                </span>
              </div>
              <Stats items={project.stats} className={styles.stats} />
              {project.description && <p>{project.description}</p>}
              {project.bullets && project.bullets.length > 0 && (
                <ul className={styles.bullets}>
                  {project.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
              <Tags items={project.tags} className={styles.tagsBottom} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
