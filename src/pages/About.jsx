import { motion } from 'framer-motion';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';
import { galleryItems } from '../data/content';

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="pt-24 min-h-screen"
        >
            <AboutSection />
            <GallerySection galleryItems={galleryItems} />
        </motion.div>
    );
}
