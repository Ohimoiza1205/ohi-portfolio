import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import { useScrollToTop } from './hooks/useScrollToTop'
import Home from './pages/Home'
import ExperiencePage from './pages/ExperiencePage'
import ResearchPage from './pages/ResearchPage'
import ProjectsPage from './pages/ProjectsPage'
import WritingPage from './pages/WritingPage'
import PostPage from './pages/PostPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  useScrollToTop()

  return (
    <>
      <Nav />
      <main className="wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/writing/:slug" element={<PostPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  )
}
