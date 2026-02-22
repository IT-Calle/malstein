import heroImage from '../data/head-ing.png'

function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay">
        <img src={heroImage} alt="Malerarbeiten im Hero-Bereich" />
        {/* <h1>Tauche ein in die bunte Welt der Malerei</h1> */}
      </div>
    </section>
  )
}

export default HeroSection
