import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import PersonalUsePage from './pages/PersonalUsePage'
import IdentityLabPage from './pages/IdentityLabPage'
import BusinessPage from './pages/BusinessPage'
import GovernmentPage from './pages/GovernmentPage'
import BlogPage from './pages/BlogPage'

// Component to handle GitHub Pages SPA routing redirect
function RedirectHandler() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Check if URL has the query string format from 404.html redirect
    // e.g., /folio/?/government
    // The format is: ?/path (path may contain ~and~ which should be converted back to &)
    const search = location.search
    
    if (search.startsWith('?/')) {
      // Extract everything after ?/
      let pathWithParams = search.substring(2)
      
      // Split by & to separate path from additional query params
      // But we need to be careful with ~and~ which represents & in the path
      // Simple approach: find the first & that's not part of ~and~
      let path = pathWithParams
      let additionalParams = ''
      
      // Look for & that's not preceded by ~and (4 chars before)
      for (let i = 0; i < pathWithParams.length - 1; i++) {
        if (pathWithParams[i] === '&') {
          // Check if this is part of ~and~
          const before = i >= 4 ? pathWithParams.substring(i - 4, i) : ''
          if (before !== '~and') {
            // This is a real query param separator
            path = pathWithParams.substring(0, i)
            additionalParams = pathWithParams.substring(i + 1)
            break
          }
        }
      }
      
      // Decode ~and~ back to &
      path = path.replace(/~and~/g, '&')
      
      // Remove hash from the path if present
      const hashIndex = path.indexOf('#')
      if (hashIndex !== -1) {
        path = path.substring(0, hashIndex)
      }
      
      // Ensure path starts with /
      if (!path.startsWith('/')) {
        path = '/' + path
      }
      
      // Build final path with additional params if they exist
      let finalPath = path
      if (additionalParams) {
        // Decode ~and~ in params too
        const cleanParams = additionalParams.replace(/~and~/g, '&')
        finalPath = `${path}?${cleanParams}`
      }
      
      // Navigate to the correct path
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

