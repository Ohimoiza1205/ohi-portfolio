import { Link } from 'react-router-dom'
import { posts, formatDate } from '../data/posts'
import SectionHead from './SectionHead'
import Tags from './Tags'
import styles from './Writing.module.css'

export default function Writing() {
  return (
    <section id="writing">
      <SectionHead path="writing" count={posts.length || undefined} />
      {posts.length === 0 ? (
        <div className={styles.canvas}>
          <p className={styles.title}>coming soon</p>
          <p className={styles.note}>
            Notes on what I am building and learning. Nothing published yet.
          </p>
        </div>
      ) : (
        <ul className={styles.list}>
          {posts.map((post) => (
            <li key={post.slug} className={styles.item}>
              <Link to={`/writing/${post.slug}`} className={styles.itemLink}>
                <div className={styles.itemHead}>
                  <h3 className={styles.itemTitle}>{post.title}</h3>
                  <span className={styles.itemDate}>{formatDate(post.date)}</span>
                </div>
                {post.blurb && <p className={styles.itemBlurb}>{post.blurb}</p>}
              </Link>
              {post.tags.length > 0 && <Tags items={post.tags} />}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
