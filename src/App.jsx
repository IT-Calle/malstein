const services = [
  {
    title: 'Innenräume & Farbkonzepte',
    description:
      'Individuelle Farbberatung, saubere Abklebung und hochwertige Anstriche für Wohn- und Geschäftsräume.',
    open: true,
  },
  {
    title: 'Fassaden & Wetterschutz',
    description:
      'Langlebige Fassadenbeschichtungen inklusive Untergrundprüfung und Schutz gegen Feuchtigkeit.',
  },
  {
    title: 'Lackierarbeiten',
    description:
      'Fenster, Türen, Treppen und Geländer mit widerstandsfähigen und modernen Lackaufbauten.',
  },
]

const galleryItems = [
  'Wohnraum in warmen Naturtönen',
  'Fassadendetail mit moderner Struktur',
  'Treppenhaus im eleganten Kontrast',
  'Büroflächen mit ruhigem Farbklima',
]

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <a href="#home" className="logo">
          Malerbetrieb Malstein
        </a>
        <nav className="menu">
          <a href="#leistungen">Services</a>
          <a href="#ueber-uns">Über uns</a>
          <a href="#kontakt">Kontakt</a>
          <a href="#kontakt" className="book-btn">
            Jetzt buchen
          </a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-overlay">
          <h1>Tauche ein in die bunte Welt der Malerei</h1>
        </div>
      </section>

      <section id="leistungen" className="services section-grid">
        <div>
          <h2>Unsere Services</h2>
          <p className="lead">
            Von der ersten Idee bis zum letzten Pinselstrich begleiten wir Ihr
            Projekt mit Präzision, Verlässlichkeit und einem modernen
            Gestaltungskonzept.
          </p>

          <div className="service-list">
            {services.map((service) => (
              <article key={service.title} className="service-item">
                <header>
                  <h3>{service.title}</h3>
                  <span>{service.open ? '−' : '+'}</span>
                </header>
                {service.open && <p>{service.description}</p>}
              </article>
            ))}
          </div>

          <a href="#kontakt" className="more-btn">
            Mehr erfahren
          </a>
        </div>

        <div className="image-card image-card-primary" aria-label="Service Bild" />
      </section>

      <section id="galerie" className="gallery section-grid">
        <div>
          <h2>Bilder Galerie</h2>
          <p className="lead">
            Ein Blick auf ausgewählte Referenzen aus privaten und gewerblichen
            Projekten.
          </p>
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <article key={item} className="gallery-item">
                <div className="gallery-image" aria-hidden="true" />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="image-card image-card-secondary" aria-label="Galerie Bild" />
      </section>

      <section id="ueber-uns" className="about">
        <h2>Über uns</h2>
        <p>
          Wir sind ein familiengeführter Malerbetrieb aus der Region und stehen
          seit über 15 Jahren für hochwertige Handwerksarbeit. Unser Team
          verbindet klassische Techniken mit zeitgemäßer Gestaltung und
          nachhaltigen Materialien.
        </p>
      </section>

      <section id="kontakt" className="contact section-grid">
        <div>
          <h2>Buche einen Termin</h2>
          <p className="lead">
            Schreiben Sie uns Ihre Wünsche – wir melden uns kurzfristig mit
            einem passenden Vorschlag.
          </p>
          <div className="contact-details">
            <p>
              <strong>Telefon:</strong> 0123 456789
            </p>
            <p>
              <strong>E-Mail:</strong> kontakt@malstein.de
            </p>
            <p>
              <strong>Adresse:</strong> Musterstraße 10, 12345 Musterstadt
            </p>
          </div>
        </div>

        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Ihr Name" />
          </label>
          <label>
            E-Mail
            <input type="email" placeholder="name@beispiel.de" />
          </label>
          <label>
            Nachricht
            <textarea rows="5" placeholder="Beschreiben Sie kurz Ihr Projekt" />
          </label>
          <button type="button">Anfrage senden</button>
        </form>
      </section>

      <footer id="impressum" className="imprint">
        <h2>Impressum</h2>
        <p>Malerbetrieb Malstein GmbH · Geschäftsführer: Max Mustermann</p>
        <p>Musterstraße 10, 12345 Musterstadt · HRB 12345 · USt-IdNr.: DE123456789</p>
      </footer>
    </div>
  )
}

export default App
