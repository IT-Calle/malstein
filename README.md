# Malerbetrieb Malstein – React Projekt

Dieses Repository enthält ein React.js-Projekt (Vite) für einen modernen Malerbetrieb mit folgenden Bereichen:

- Leistungen (Dienste)
- Bilder Galerie
- Über uns
- Kontakt
- Impressum

## Start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Projektstruktur (modular)

- `src/App.jsx`: setzt die Seite aus einzelnen Sektionen zusammen
- `src/components/`: enthält die UI-Sektionen (`Header`, `HeroSection`, `ServicesSection`, `GallerySection`, `AboutSection`, `ContactSection`, `ImprintFooter`)
- `src/data/content.js`: enthält statische Inhalte wie Services und Galerieeinträge
