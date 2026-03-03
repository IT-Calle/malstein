import { motion } from 'framer-motion';
import { services, galleryItems } from '../data/content';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.2 } }
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
                        Leistungen
                    </motion.p>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-5xl md:text-7xl font-bold text-malstein-text tracking-tighter leading-tight">
                        Präzision in jedem <br className="hidden md:block" />Pinselstrich.
                    </motion.h1>
                </div>
            </div>

            <div className="section-padding !pt-0 space-y-32">
                <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div variants={itemAnim} className="w-full lg:w-1/2 aspect-[4/3] rounded-[3rem] overflow-hidden relative shadow-2xl">
                        <img src={galleryItems[0].image} alt="Innenräume" className="w-full h-full object-cover scale-105" />
                    </motion.div>
                    <motion.div variants={itemAnim} className="w-full lg:w-1/2 max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-malstein-text">01. {services[0].title}</h2>
                        <p className="text-xl text-malstein-text/70 mb-8 font-light leading-relaxed">{services[0].description} Wir kreieren Atmosphären, die beruhigen, anregen oder repräsentieren – abgestimmt auf Ihre Wünsche und die Architektur des Raumes.</p>
                        <ul className="space-y-4 text-malstein-text/80 mb-10 font-medium">
                            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-malstein-accent" /> Farbberatung vor Ort</li>
                            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-malstein-accent" /> Premium-Wandfarben & Wandtechniken</li>
                            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-malstein-accent" /> Saubere Abklebung & Vorbereitung</li>
                        </ul>
                    </motion.div>
                </motion.div>

                <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                    <motion.div variants={itemAnim} className="w-full lg:w-1/2 aspect-[4/3] rounded-[3rem] overflow-hidden relative shadow-2xl">
                        <img src={galleryItems[1].image} alt="Fassaden" className="w-full h-full object-cover scale-105" />
                    </motion.div>
                    <motion.div variants={itemAnim} className="w-full lg:w-1/2 max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-malstein-text">02. {services[1].title}</h2>
                        <p className="text-xl text-malstein-text/70 mb-8 font-light leading-relaxed">{services[1].description} Die Visitenkarte Ihres Hauses ist bei uns in besten Händen. Mit modernsten Beschichtungen schützen wir die Bausubstanz nachhaltig.</p>
                        <ul className="space-y-4 text-malstein-text/80 mb-10 font-medium">
                            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-malstein-accent" /> Untergrundprüfung & Riss-Sanierung</li>
                            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-malstein-accent" /> Lotos-Effekt Beschichtungen</li>
                            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-malstein-accent" /> Eigene Gerüststellung</li>
                        </ul>
                    </motion.div>
                </motion.div>

                <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div variants={itemAnim} className="w-full lg:w-1/2 aspect-[4/3] rounded-[3rem] overflow-hidden relative shadow-2xl">
                        <img src={galleryItems[2].image} alt="Lackierungen" className="w-full h-full object-cover scale-105" />
                    </motion.div>
                    <motion.div variants={itemAnim} className="w-full lg:w-1/2 max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-malstein-text">03. {services[2].title}</h2>
                        <p className="text-xl text-malstein-text/70 mb-8 font-light leading-relaxed">{services[2].description} Makellose Oberflächen erfordern höchste Handwerkskunst und die besten Lacksysteme. Wir veredeln jedes Detail.</p>
                        <ul className="space-y-4 text-malstein-text/80 mb-10 font-medium">
                            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-malstein-accent" /> Fenster & Türen</li>
                            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-malstein-accent" /> Heizkörper & Treppengeländer</li>
                            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-malstein-accent" /> Moderne Spritzlackierung</li>
                        </ul>
                    </motion.div>
                </motion.div>

                <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                    <motion.div variants={itemAnim} className="w-full lg:w-1/2 aspect-[4/3] rounded-[3rem] overflow-hidden relative shadow-2xl">
                        <img src={galleryItems[3].image} alt="Schimmelgutachten & Entfernung" className="w-full h-full object-cover scale-105" />
                    </motion.div>
                    <motion.div variants={itemAnim} className="w-full lg:w-1/2 max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-malstein-text">04. {services[3].title}</h2>
                        <p className="text-xl text-malstein-text/70 mb-8 font-light leading-relaxed">{services[3].description} Wir begutachten den Befall professionell, entfernen ihn rückstandslos und sorgen mit speziellen Anstrichen dafür, dass er nicht wiederkehrt.</p>
                        <ul className="space-y-4 text-malstein-text/80 mb-10 font-medium">
                            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-malstein-accent" /> Ursachenanalyse & Gutachten</li>
                            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-malstein-accent" /> Fachgerechte Schimmelentfernung</li>
                            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-malstein-accent" /> Präventive Spezialanstriche</li>
                        </ul>
                    </motion.div>
                </motion.div>

                {/* CTA */}
                <div className="pt-20 border-t border-malstein-text/10 flex flex-col items-center text-center">
                    <h3 className="text-4xl font-bold mb-8 text-malstein-text">Bereit für Ihr Projekt?</h3>
                    <Link to="/kontakt" className="btn-primary">
                        Kontakt aufnehmen <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
