import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import PersonalUsePage from './pages/PersonalUsePage'
import IdentityLabPage from './pages/IdentityLabPage'
import BusinessPage from './pages/BusinessPage'
import GovernmentPage from './pages/GovernmentPage'
import BlogPage from './pages/BlogPage'

// Fallback handler in case the script in index.html didn't run
function RedirectHandler() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Check if URL still has the query string format ?/path
    // This is a fallback in case the script in index.html didn't execute
    const search = location.search
    
    if (search && search[1] === '/') {
      // Extract the path from query string (e.g., '/government' from '?/government')
      let pathWithParams = search.slice(1) // Removes '?' -> '/government'
      
      // Find where the actual path ends (before any additional query params)
      let pathEnd = pathWithParams.length
      for (let i = 0; i < pathWithParams.length - 1; i++) {
        if (pathWithParams[i] === '&') {
          // Check if this & is part of ~and~
          const before = i >= 4 ? pathWithParams.substring(i - 4, i) : ''
          if (before !== '~and') {
            // This is a real query param separator
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
      let finalPath = route
      if (additionalParams) {
        // Remove leading & and decode ~and~
        const cleanParams = additionalParams.replace(/^&/, '').replace(/~and~/g, '&')
        if (cleanParams) {
          finalPath = route + '?' + cleanParams
        }
      }
      
      // Navigate to the correct path (without basename, React Router will add it)
      navigate(finalPath, { replace: true })
    }
  }, [location.search, navigate])

  return null
}

function App() {
  // Use Vite's BASE_URL which matches the base config
  // In dev: '/', in production build: '/folio'
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'
  
  return (
    <BrowserRouter basename={basename}>
      <RedirectHandler />
      <Routes>
        <Route path="/" element={<PersonalUsePage />} />
        <Route path="/identity-lab" element={<IdentityLabPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/government" element={<GovernmentPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

