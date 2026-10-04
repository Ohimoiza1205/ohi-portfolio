import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Resets scroll position on navigation. Without this the browser keeps the
 * previous page's offset, so jumping from a long list to a short page can
 * land you mid-content or past the end.
 */
export function useScrollToTop(): null {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
