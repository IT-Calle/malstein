import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Paintbrush } from 'lucide-react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Close mobile menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] md:w-auto md:min-w-[700px] glass-pill rounded-full py-4 px-6 md:px-8 flex justify-between items-center z-50">
        <Link to="/" className="group flex items-center gap-2 text-xl md:text-2xl font-bold font-heading text-malstein-text hover:text-malstein-accent transition-colors tracking-tight">
          <img src="/src/data/logo.png" alt="Malstein Logo" className="h-[5rem] w-auto drop-shadow-sm group-hover:-rotate-6 transition-transform duration-300" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center font-medium text-sm tracking-wide uppercase">
          <NavLink to="/leistungen" className={({ isActive }) => isActive ? "text-malstein-accent" : "hover:text-malstein-accent transition-colors"}>Services</NavLink>
          <NavLink to="/galerie" className={({ isActive }) => isActive ? "text-malstein-accent" : "hover:text-malstein-accent transition-colors"}>Galerie</NavLink>
          <NavLink to="/ueber-uns" className={({ isActive }) => isActive ? "text-malstein-accent" : "hover:text-malstein-accent transition-colors"}>Über uns</NavLink>
          <NavLink to="/kontakt" className={({ isActive }) => isActive ? "text-malstein-accent" : "hover:text-malstein-accent transition-colors"}>Kontakt</NavLink>
          <Link to="/kontakt" className="ml-4 px-6 py-2.5 bg-malstein-text text-white rounded-full hover:bg-malstein-accent transition-colors shadow-soft">
            Anfragen
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-malstein-text hover:text-malstein-accent transition-colors p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menü öffnen"
        >
          {isMobileMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
      </header>

      {/* Mobile Navigation Fullscreen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-3xl z-40 flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-8 font-heading text-4xl tracking-tight">
              <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "text-malstein-accent font-medium" : "text-malstein-text hover:text-malstein-accent transition-colors"}>Home</NavLink>
              <NavLink to="/leistungen" onClick={closeMenu} className={({ isActive }) => isActive ? "text-malstein-accent font-medium" : "text-malstein-text hover:text-malstein-accent transition-colors"}>Services</NavLink>
              <NavLink to="/galerie" onClick={closeMenu} className={({ isActive }) => isActive ? "text-malstein-accent font-medium" : "text-malstein-text hover:text-malstein-accent transition-colors"}>Galerie</NavLink>
              <NavLink to="/ueber-uns" onClick={closeMenu} className={({ isActive }) => isActive ? "text-malstein-accent font-medium" : "text-malstein-text hover:text-malstein-accent transition-colors"}>Über uns</NavLink>
              <NavLink to="/kontakt" onClick={closeMenu} className={({ isActive }) => isActive ? "text-malstein-accent font-medium" : "text-malstein-text hover:text-malstein-accent transition-colors"}>Kontakt</NavLink>
            </nav>
            <div className="absolute bottom-12 text-center text-malstein-text/50 text-sm">
              <p>Malerbetrieb Malstein</p>
              <p>0123 456789</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
