function ServicesSection({ services }) {
  return (
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
  )
}

export default ServicesSection
