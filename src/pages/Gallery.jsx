import { motion } from 'framer-motion';
import { galleryItems } from '../data/content';

export default function Gallery() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemAnim = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-40 min-h-screen pb-32"
        >
            <div className="section-padding !pt-0 !pb-16 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-malstein-text/10 mb-20">
                <div className="max-w-3xl">
                    <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="font-medium text-malstein-accent tracking-[0.2em] uppercase text-sm mb-4">
                        Galerie
                    </motion.p>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-5xl md:text-7xl font-bold text-malstein-text tracking-tighter leading-tight">
                        Unsere Meisterwerke.
                    </motion.h1>
                </div>
            </div>

            <div className="section-padding !pt-0">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="columns-1 md:columns-2 gap-6 space-y-6"
                >
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            variants={itemAnim}
                            className="break-inside-avoid relative group overflow-hidden rounded-[2rem] bg-malstein-bgSecondary"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-auto object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-malstein-text/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <p className="text-white font-medium md:text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}
