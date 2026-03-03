import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ContactSection() {
  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section className="section-padding grid lg:grid-cols-2 gap-20 items-start">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        className="pt-8"
      >
        <motion.p variants={itemAnim} className="font-medium text-malstein-accent tracking-[0.2em] uppercase text-sm mb-4">
          Kontakt
        </motion.p>
        <motion.h2 variants={itemAnim} className="text-5xl md:text-7xl font-bold mb-8 text-malstein-text tracking-tighter leading-[0.9]">
          Lassen Sie uns <br />
          <span className="text-malstein-text/30">darüber reden.</span>
        </motion.h2>
        <motion.p variants={itemAnim} className="text-xl md:text-2xl text-malstein-text/70 mb-16 font-light max-w-md leading-relaxed">
          Erzählen Sie uns von Ihrer Vision. Wir verwandeln sie in Realität.
        </motion.p>

        <motion.div variants={itemAnim} className="space-y-12">
          <div className="group cursor-default">
            <p className="text-xs text-malstein-accent font-medium tracking-[0.2em] uppercase mb-2">Telefon</p>
            <p className="text-2xl md:text-3xl font-light text-malstein-text group-hover:translate-x-2 transition-transform duration-500">
              0123 456789
            </p>
          </div>

          <div className="group cursor-default hover:text-malstein-accent transition-colors">
            <p className="text-xs text-malstein-accent font-medium tracking-[0.2em] uppercase mb-2">E-Mail</p>
            <p className="text-2xl md:text-3xl font-light text-malstein-text group-hover:translate-x-2 transition-transform duration-500">
              kontakt@malstein.de
            </p>
          </div>

          <div className="group cursor-default">
            <p className="text-xs text-malstein-accent font-medium tracking-[0.2em] uppercase mb-2">Studio</p>
            <p className="text-xl md:text-2xl font-light text-malstein-text leading-relaxed group-hover:translate-x-2 transition-transform duration-500">
              Musterstraße 10<br />12345 Musterstadt
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white p-10 md:p-16 rounded-[3rem] shadow-soft border border-malstein-text/5 flex flex-col gap-10"
      >
        <h3 className="text-3xl font-bold text-malstein-text tracking-tight">Projektanfrage</h3>

        <div className="flex flex-col gap-2 relative">
          <input type="text" placeholder="Ihre Name" className="input-minimal" />
        </div>

        <div className="flex flex-col gap-2 relative">
          <input type="email" placeholder="Ihre E-Mail" className="input-minimal" />
        </div>

        <div className="flex flex-col gap-2 relative">
          <textarea rows="4" placeholder="Erzählen Sie uns von Ihrem Vorhaben..." className="input-minimal resize-none" />
        </div>

        <button type="button" className="group mt-4 flex items-center gap-4 text-xl font-medium text-malstein-text hover:text-malstein-accent transition-colors self-start">
          <span className="relative">
            Absenden
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-malstein-accent transition-all duration-300 group-hover:w-full"></span>
          </span>
          <span className="bg-malstein-bgSecondary p-4 rounded-full group-hover:bg-malstein-accent group-hover:text-white transition-all duration-500 group-hover:rotate-[-45deg]">
            <ArrowRight size={24} strokeWidth={1.5} />
          </span>
        </button>
      </motion.form>
    </section>
  )
}
