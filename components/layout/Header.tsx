import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Mentorship', href: '#features' },
    { name: 'Philosophy', href: '#mission' },
    { name: 'Stories', href: '#stories' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="text-royal font-semibold tracking-tighter text-lg uppercase flex items-center gap-2"
          >
            <img src="/logo.jpg" alt="Herdentity" className="w-8 h-8 rounded-full" />
            Herdentity<span className="text-gold">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-zinc-500 hover:text-royal transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf41EHO96xWZvha71vl2kYLsq0Rl0cVn4EtUB9_UyptNNvSlQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-royal text-white text-xs md:text-sm font-medium px-5 py-2.5 rounded-full hover:bg-royal-hover transition-all shadow-sm hover:shadow-md flex items-center gap-2 group"
            >
              Join the Collective
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              className="md:hidden p-2 text-royal"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {
          isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 z-[60] bg-white text-zinc-900 flex flex-col"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="p-6 flex justify-between items-center border-b border-zinc-100/50">
                <div className="text-royal font-semibold tracking-tighter text-lg uppercase flex items-center gap-2">
                  <img src="/logo.jpg" alt="Herdentity" className="w-8 h-8 rounded-full" />
                  Herdentity<span className="text-gold">.</span>
                </div>
                <button
                  className="p-2 text-zinc-400 hover:text-zinc-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <nav className="flex flex-col items-start px-10 pt-16 gap-8 text-left flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-5xl font-serif italic text-royal tracking-tight hover:text-gold transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 w-full"
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf41EHO96xWZvha71vl2kYLsq0Rl0cVn4EtUB9_UyptNNvSlQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-zinc-900 text-white text-lg font-medium px-8 py-4 rounded-full shadow-xl text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Join the Collective
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          )}
      </AnimatePresence>
    </>
  );
};

export default Header;