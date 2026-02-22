const services = [
  'Innenanstriche und kreative Wandtechniken',
  'Fassadensanierung und Wetterschutz',
  'Lackierarbeiten für Türen, Fenster und Treppen',
  'Tapezierarbeiten und moderne Oberflächen',
  'Bodenbeschichtungen für Wohn- und Gewerberäume',
]

const gallery = [
  {
    title: 'Wohnzimmer in Naturtönen',
    text: 'Harmonische Wandgestaltung mit hochwertiger, emissionsarmer Farbe.',
  },
  {
    title: 'Moderne Fassadenrenovierung',
    text: 'Langlebiger Anstrich inklusive Untergrundprüfung und Schutzsystem.',
  },
  {
    title: 'Treppenhaus neu gedacht',
    text: 'Robuste Beschichtung mit elegantem Farbkonzept für Mehrfamilienhäuser.',
  },
]

function App() {
  return (
    <div>
      <header className="hero" id="home">
        <nav className="nav">
          <a href="#home" className="brand">Malerbetrieb Malstein</a>
          <div className="nav-links">
            <a href="#leistungen">Leistungen</a>
            <a href="#galerie">Galerie</a>
            <a href="#ueber-uns">Über uns</a>
            <a href="#kontakt">Kontakt</a>
            <a href="#impressum">Impressum</a>
          </div>
        </nav>
        <div className="hero-content">
          <h1>Ihr moderner Malerbetrieb für stilvolle Räume</h1>
          <p>
            Wir bringen Farbe, Struktur und Qualität in Ihr Zuhause oder Ihr
            Unternehmen – zuverlässig, sauber und termintreu.
          </p>
          <a href="#kontakt" className="cta">Jetzt Beratung anfragen</a>
        </div>
      </header>

      <main>
        <section id="leistungen" className="section">
          <h2>Unsere Dienste</h2>
          <ul className="services-grid">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </section>

        <section id="galerie" className="section section-alt">
          <h2>Bilder Galerie</h2>
          <div className="gallery-grid">
            {gallery.map((item) => (
              <article key={item.title} className="gallery-card">
                <div className="placeholder" aria-hidden="true">Bild</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="ueber-uns" className="section">
          <h2>Über uns</h2>
          <p>
            Seit über 15 Jahren steht der Malerbetrieb Malstein für hochwertige
            Handwerksarbeit, individuelle Farbkonzepte und persönliche
            Kundenbetreuung. Unser Team verbindet traditionelles Malerhandwerk
            mit modernen Techniken und nachhaltigen Materialien.
          </p>
        </section>

        <section id="kontakt" className="section section-alt">
          <h2>Kontakt</h2>
          <p>
            Schreiben Sie uns unverbindlich zu Ihrem Projekt. Wir melden uns
            schnellstmöglich bei Ihnen.
          </p>
          <div className="contact-box">
            <p><strong>Telefon:</strong> 0123 456789</p>
            <p><strong>E-Mail:</strong> kontakt@malstein.de</p>
            <p><strong>Adresse:</strong> Musterstraße 10, 12345 Musterstadt</p>
          </div>
        </section>
      </main>

      <footer id="impressum" className="footer">
        <h2>Impressum</h2>
        <p>Malerbetrieb Malstein GmbH</p>
        <p>Geschäftsführer: Max Mustermann</p>
        <p>Musterstraße 10, 12345 Musterstadt</p>
        <p>Handelsregister: HRB 12345, Amtsgericht Musterstadt</p>
        <p>USt-IdNr.: DE123456789</p>
      </footer>
    </div>
  )
}

export default App
