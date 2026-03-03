import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function ServicesSection({ services }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section className="section-padding">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 pb-8 border-b border-malstein-text/10">
          <div className="max-w-3xl">
            <motion.p variants={itemAnim} className="font-medium text-malstein-accent tracking-[0.2em] uppercase text-sm mb-4">
              Unsere Expertise
            </motion.p>
            <motion.h2 variants={itemAnim} className="text-5xl md:text-6xl font-bold text-malstein-text tracking-tight leading-tight">
              Räume neu definiert. <br className="hidden md:block" />Mit meisterhafter Präzision.
            </motion.h2>
          </div>
          <motion.div variants={itemAnim}>
            <Link to="/leistungen" className="group flex items-center gap-3 text-lg font-medium hover:text-malstein-accent transition-colors">
              Alle Leistungen entdecken
              <span className="bg-malstein-bgSecondary p-4 rounded-full group-hover:bg-malstein-accent group-hover:text-white transition-all duration-300">
                <ArrowUpRight size={24} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {services?.map((service, index) => {
            // Make the first item take up 2 columns and 2 rows, others 1 col 1 row (just a basic bento layout logic)
            const isLarge = index === 0;
            const isTall = index === 2;

            return (
              <motion.article
                variants={itemAnim}
                key={service.title}
                className={`
                  p-10 group relative overflow-hidden bg-malstein-bgSecondary rounded-[2rem] hover:shadow-soft transition-all duration-500 flex flex-col justify-between
                  ${isLarge ? 'md:col-span-2 md:row-span-2 bg-malstein-text text-white' : ''}
                  ${isTall && !isLarge ? 'md:row-span-2' : ''}
                  ${index === 3 ? 'md:col-span-2' : ''}
                  ${!isLarge ? 'bg-white border border-malstein-text/5 hover:border-malstein-accent/20' : ''}
                `}
              >
                {/* Decorative background circle on hover */}
                <div className={`absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-3xl transition-opacity duration-700 opacity-0 group-hover:opacity-40
                  ${isLarge ? 'bg-white/10' : 'bg-malstein-accent/20'}`} />

                <header className="flex justify-between items-start relative z-10">
                  <h3 className={`text-2xl md:text-3xl font-bold font-heading mb-4 tracking-tight ${isLarge ? 'text-white' : 'text-malstein-text'}`}>
                    {service.title}
                  </h3>
                  <div className={`p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-4 translate-x-4 group-hover:translate-y-0 group-hover:translate-x-0 ${isLarge ? 'bg-white/10 text-white' : 'bg-malstein-bgSecondary text-malstein-accent'}`}>
                    <ArrowUpRight size={20} />
                  </div>
                </header>

                <p className={`text-lg font-light leading-relaxed relative z-10 ${isLarge ? 'max-w-xl text-white/80' : 'text-malstein-text/70 line-clamp-4'}`}>
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  )
}
