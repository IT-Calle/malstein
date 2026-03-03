import { HashRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="leistungen" element={<Services />} />
          <Route path="galerie" element={<Gallery />} />
          <Route path="ueber-uns" element={<About />} />
          <Route path="kontakt" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
