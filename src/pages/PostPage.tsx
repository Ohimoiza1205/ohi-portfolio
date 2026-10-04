import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { getPost, formatDate } from '../data/posts'
import Tags from '../components/Tags'
import NotFoundPage from './NotFoundPage'
import styles from './PostPage.module.css'

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined

  if (!post) return <NotFoundPage />

  return (
    <article className={styles.post}>
      <Link to="/writing" className={styles.back}>
        ← writing
      </Link>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.date}>{formatDate(post.date)}</p>
      {post.tags.length > 0 && <Tags items={post.tags} className={styles.tags} />}
      <div className={styles.body}>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </div>
    </article>
  )
}
