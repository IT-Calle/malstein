import galleryImage from '../data/Galerie_img.png'

function GallerySection({ galleryItems }) {
  return (
    <section id="galerie" className="gallery section-grid">
      <div>
        <h2>Bilder Galerie</h2>
        <p className="lead">
          Ein Blick auf ausgewählte Referenzen aus privaten und gewerblichen
          Projekten.
        </p>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <article key={item.title} className="gallery-item">
              <img className="gallery-image" src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="image-card image-card-secondary">
        <img src={galleryImage} alt="Referenzbild aus der Bildergalerie" />
      </div>
    </section>
  )
}

export default GallerySection
