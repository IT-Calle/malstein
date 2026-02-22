import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import GallerySection from './components/GallerySection'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ImprintFooter from './components/ImprintFooter'
import ServicesSection from './components/ServicesSection'
import { galleryItems, services } from './data/content'

function App() {
  return (
    <div className="page">
      <Header />
      <HeroSection />
      <ServicesSection services={services} />
      <GallerySection galleryItems={galleryItems} />
      <AboutSection />
      <ContactSection />
      <ImprintFooter />
    </div>
  )
}

export default App
