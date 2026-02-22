function ContactSection() {
  return (
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
  )
}

export default ContactSection
