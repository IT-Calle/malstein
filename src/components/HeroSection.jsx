import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import heroImage from '../data/head-ing.png'

export default function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-end pb-12 pt-40 px-6 md:px-12 max-w-[100rem] mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row items-end justify-between gap-16 w-full z-20">

        {/* Massive Typography Left */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-3/5"
        >
          <div className="flex items-center gap-6 mb-8 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="h-[2px] w-24 bg-malstein-accent"
            />
            <p className="font-medium text-malstein-text/60 tracking-[0.2em] uppercase text-sm md:text-base">
              Malerbetrieb der Extraklasse
            </p>
          </div>

          <h1 className="text-[3.5rem] md:text-[6rem] lg:text-[7.5rem] font-bold text-malstein-text leading-[0.9] tracking-tighter mb-8">
            Handwerk.<br />
            <span className="text-malstein-accent italic font-medium pr-4">Perfektion.</span><br />
            Ästhetik.
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-12">
            <Link to="/kontakt" className="btn-primary">
              Projekt starten <ArrowRight size={20} />
            </Link>
            <Link to="/leistungen" className="btn-outline group hover:bg-transparent hover:text-malstein-text">
              Unsere Expertise
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </motion.div>

        {/* Elegant Inset Image Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-2/5 aspect-[4/5] lg:aspect-[3/4] relative rounded-t-full rounded-b-[3rem] overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-malstein-text/10 mix-blend-multiply z-10" />
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={heroImage}
            alt="Elegante Malerarbeiten"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Decorative large background text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold font-heading whitespace-nowrap z-0 pointer-events-none tracking-tighter"
      >
        MALSTEIN
      </motion.div>
    </section>
  )
}
