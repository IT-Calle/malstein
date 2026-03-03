export default function ImprintFooter() {
  return (
    <footer className="bg-malstein-text text-white pt-24 pb-8 px-6 md:px-12 mt-auto overflow-hidden relative">
      <div className="max-w-[100rem] mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">

        <div className="max-w-md">
          <p className="font-medium text-malstein-accent tracking-[0.2em] uppercase text-sm mb-6">
            Malerbetrieb Malstein
          </p>
          <p className="text-white/60 text-lg sm:text-xl font-light leading-relaxed">
            Dein zuverlässiger Partner für hochwertige Maler- und Lackierarbeiten mit kompromissloser Detailverliebtheit.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-16 md:gap-24 font-light text-white/60 text-sm md:text-base">
          <div className="space-y-3 relative group">
            <h3 className="text-lg font-medium text-white mb-6 uppercase tracking-wider text-xs">Unternehmen</h3>
            <p className="hover:text-white transition-colors cursor-pointer">Services</p>
            <p className="hover:text-white transition-colors cursor-pointer">Über uns</p>
            <p className="hover:text-white transition-colors cursor-pointer">Kontakt</p>
          </div>

          <div className="space-y-3 text-white/50">
            <h3 className="text-lg font-medium text-white mb-6 uppercase tracking-wider text-xs">Impressum</h3>
            <p>Malerbetrieb Malstein GmbH</p>
            <p>Musterstraße 10</p>
            <p>12345 Musterstadt</p>
            <p>GF: Max Mustermann</p>
            <p className="pt-2 text-white/30 text-xs">HRB 12345 · USt-IdNr.: DE123456789</p>
          </div>
        </div>
      </div>

      {/* Massive Brand Name at the bottom of the footer */}
      <div className="max-w-[100rem] mx-auto mt-24 mb-8 text-center md:text-left relative z-10">
        <h1 className="text-[15vw] leading-none font-bold text-white tracking-tighter mix-blend-overlay opacity-10">
          MALSTEIN.
        </h1>
      </div>

      <div className="max-w-[100rem] mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs relative z-10">
        <p>&copy; {new Date().getFullYear()} Malerbetrieb Malstein.</p>
        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer transition-colors">Datenschutz</span>
          <span className="hover:text-white cursor-pointer transition-colors">AGB</span>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] bg-malstein-accent/10 rounded-full blur-[120px] translate-y-1/2 translate-x-1/3 z-0 pointer-events-none" />
    </footer>
  )
}
