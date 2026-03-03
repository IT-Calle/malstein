import { motion } from 'framer-motion';
import ContactSection from '../components/ContactSection';

export default function Contact() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="pt-24 min-h-screen"
        >
            <ContactSection />
        </motion.div>
    );
}
