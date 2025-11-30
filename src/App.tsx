import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PersonalUsePage from './pages/PersonalUsePage'
import IdentityLabPage from './pages/IdentityLabPage'
import BusinessPage from './pages/BusinessPage'
import GovernmentPage from './pages/GovernmentPage'
import BlogPage from './pages/BlogPage'

function App() {
  // Use Vite's BASE_URL which matches the base config
  // In dev: '/', in production build: '/folio/'
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'
  
  return (
    <BrowserRouter basename={basename}>
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

