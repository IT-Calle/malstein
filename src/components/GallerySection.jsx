import { motion } from 'framer-motion'
import galleryImage from '../data/Galerie_img.png'

export default function GallerySection({ galleryItems }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemAnim = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section className="py-32 w-full overflow-hidden">
      <div className="px-6 md:px-12 max-w-[100rem] mx-auto mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="font-medium text-malstein-accent tracking-[0.2em] uppercase text-sm mb-4">
              Referenzen
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-malstein-text tracking-tight">Meisterwerke.</h2>
            <p className="text-xl text-malstein-text/60 font-light leading-relaxed">
              Ein Blick auf ausgewählte Referenzen. Jedes Projekt ist ein Unikat,
              geprägt von unserer Hingabe zu Detail und Material.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Edge-to-edge feeling layout */}
      <div className="pl-6 md:pl-12 pr-6 md:pr-0 max-w-[100rem] mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6"
          >
            {galleryItems?.slice(0, 4).map((item, idx) => (
              <motion.article
                variants={itemAnim}
                key={item.title}
                className={`group relative overflow-hidden rounded-[2rem] bg-malstein-bgSecondary ${idx % 3 === 0 ? 'aspect-[4/5]' : 'aspect-square'} ${idx === 1 ? 'mt-8 md:mt-16' : ''}`}
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  src={item.image}
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-malstein-text/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-white font-medium text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2 rounded-l-[3rem] rounded-r-[3rem] lg:rounded-r-none overflow-hidden relative min-h-[500px] lg:min-h-full"
          >
            <img
              src={galleryImage}
              alt="Großes Referenzbild aus der Bildergalerie"
              className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2s] ease-out"
            />
            <div className="absolute inset-0 bg-malstein-text/10 mix-blend-multiply" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
