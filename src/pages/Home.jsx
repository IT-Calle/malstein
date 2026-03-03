import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import { services } from '../data/content';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <HeroSection />
            <ServicesSection services={services.slice(0, 3)} />
        </motion.div>
    );
}
