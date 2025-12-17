import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ErrorBoundary } from './components/ErrorBoundary'
import { ToastProvider } from './contexts/ToastContext'

// GitHub Pages SPA routing support (rafgraph/spa-github-pages style).
// Converts `?/path` back into `/path` before React Router mounts.
;(function handleSpaRedirect() {
  const l = window.location
  const search = l.search
  if (!search || search.length < 2 || search[1] !== '/') return

  // Determine deploy base (/folio on GH Pages, / on folio.id)
  const basePath = (l.pathname || '/').startsWith('/folio') ? '/folio' : ''

  const pathWithParams = search.slice(1) // Removes '?' -> '/government'

  // Find where the actual path ends (before any additional query params)
  let pathEnd = pathWithParams.length
  for (let i = 0; i < pathWithParams.length - 1; i++) {
    if (pathWithParams[i] === '&') {
      const before = i >= 4 ? pathWithParams.substring(i - 4, i) : ''
      if (before !== '~and') {
        pathEnd = i
        break
      }
    }
  }

  // Extract just the path part
  let route = pathWithParams.substring(0, pathEnd)

  // Decode ~and~ back to &
  route = route.replace(/~and~/g, '&')

  // Ensure route starts with /
  if (!route.startsWith('/')) {
    route = '/' + route
  }

  // Extract additional query parameters if they exist
  const additionalParams = pathWithParams.substring(pathEnd)
  if (additionalParams) {
    const cleanParams = additionalParams.replace(/^&/, '').replace(/~and~/g, '&')
    if (cleanParams) {
      route = route + '?' + cleanParams
    }
  }

  const finalPath = basePath + route + (l.hash || '')
  window.history.replaceState(null, '', finalPath)
})()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <ToastProvider>
        <App />
      </ToastProvider>
    </ErrorBoundary>
  </StrictMode>,
)

