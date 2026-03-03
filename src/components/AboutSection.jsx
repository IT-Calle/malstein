import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section className="section-padding py-40">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto rounded-[3rem] p-12 md:p-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-malstein-text text-white" />

        {/* Abstract decorative shape */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-malstein-accent/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="font-medium text-malstein-accent tracking-[0.2em] uppercase text-sm mb-8">
            Über uns
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-white tracking-tight leading-tight">
            Handwerk aus <br className="hidden md:block" />Leidenschaft.
          </h2>

          <div className="space-y-6 text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-3xl">
            <p>
              Wir sind ein familiengeführter Malerbetrieb aus der Region und stehen
              seit über 15 Jahren für unübertroffene Handwerksarbeit.
            </p>
            <p className="text-lg md:text-xl text-white/50">
              Unser Team verbindet die Tradition klassischer Techniken mit einer tiefen
              Verwurzelung in zeitgemäßer Gestaltung und der konsequenten Nutzung nachhaltiger Materialien.
              Wir erschaffen Räume, die bleiben.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
