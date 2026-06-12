import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.967 14.11 1.011 12.01 1.011c-5.44 0-9.866 4.372-9.87 9.802 0 1.92.517 3.79 1.5 5.461l-.985 3.597 3.702-.972zm10.17-6.951c-.266-.134-1.57-.775-1.812-.863-.243-.089-.42-.134-.595.134-.176.267-.68 1.157-.833 1.334-.153.178-.307.201-.573.067-.266-.134-1.127-.415-2.147-1.326-.79-.705-1.327-1.579-1.482-1.847-.154-.267-.017-.411.117-.544.121-.119.266-.312.4-.467.135-.156.179-.267.269-.446.09-.178.045-.334-.022-.467-.067-.134-.595-1.436-.815-1.97-.216-.52-.469-.44-.645-.448-.166-.008-.356-.01-.547-.01-.191 0-.503.072-.767.356-.263.284-1.006.984-1.006 2.399 0 1.415 1.028 2.785 1.171 2.977.144.192 2.023 3.09 4.901 4.331.685.295 1.22.472 1.637.605.689.219 1.316.188 1.813.114.553-.082 1.57-.642 1.791-1.261.221-.619.221-1.151.154-1.261-.067-.109-.244-.199-.51-.332z" />
  </svg>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pushstate', handleLocationChange);
    window.addEventListener('scroll', handleScroll);

    // Initial triggers
    handleLocationChange();
    handleScroll();

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pushstate', handleLocationChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Framework', href: '/framework' },
    { name: 'Programmes', href: '/programmes' },
    { name: 'Resources', href: '/resources' },
    { name: 'Community', href: '/community' },
    { name: 'Stories', href: '/stories' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-deep/90 backdrop-blur-xl border-b border-brand-border-dark py-4 shadow-lg"
          : "bg-transparent border-b border-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-brand-text-primary font-bold tracking-tight text-lg uppercase flex items-center gap-2.5 font-label"
          >
            <img src="/logo.jpg" alt="Herdentity" className="w-8 h-8 rounded-full border border-brand-gold/30" />
            <span>Herdentity</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs xl:text-sm font-medium transition-colors relative py-1 font-label uppercase tracking-widest ${
                    isActive ? 'text-brand-gold font-semibold' : 'text-brand-text-muted hover:text-brand-gold'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="https://forms.gle/JkyMF93L6a6CocQQ6"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex bg-brand-gold text-brand-dark hover:bg-brand-gold/90 transition-all duration-300 font-label uppercase tracking-wider text-xs font-semibold px-6 py-3 rounded-md items-center gap-2 group transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-gold/15"
            >
              Join The Movement
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <button
              className="lg:hidden p-2 text-brand-gold hover:text-brand-gold/80 transition-colors"
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
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-brand-plum text-brand-text-primary flex flex-col justify-between"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="p-6 flex justify-between items-center border-b border-brand-border">
              <div className="text-brand-text-primary font-bold tracking-tight text-lg uppercase flex items-center gap-2 font-label">
                <img src="/logo.jpg" alt="Herdentity" className="w-8 h-8 rounded-full border border-brand-gold/30" />
                <span>Herdentity</span>
              </div>
              <button
                className="p-2 text-brand-gold hover:text-brand-text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center px-10 py-12 gap-8 text-center flex-1 overflow-y-auto">
              {navLinks.map((link, idx) => {
                const isActive = currentPath === link.href;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-3xl md:text-4xl font-serif italic tracking-wide transition-colors ${
                      isActive ? 'text-brand-gold' : 'text-brand-text-primary hover:text-brand-gold'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </nav>

            <div className="p-8 border-t border-brand-border bg-brand-dark/40 flex flex-col items-center gap-6">
              <a
                href="https://forms.gle/JkyMF93L6a6CocQQ6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-gold text-brand-dark hover:bg-brand-gold/90 transition-all text-center py-4 rounded-md font-label uppercase tracking-widest text-sm font-bold shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join The Movement
              </a>
              <div className="flex gap-6 items-center">
                <a
                  href="https://chat.whatsapp.com/DUL8d6zcqGyAe6qftqVZkN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-text-muted hover:text-[#25D366] transition-colors text-sm font-label uppercase tracking-widest"
                >
                  <span className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                    <WhatsAppIcon className="w-4 h-4" />
                  </span>
                  WhatsApp
                </a>
                <a
                  href="https://t.me/herdentity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-text-muted hover:text-[#0088cc] transition-colors text-sm font-label uppercase tracking-widest"
                >
                  <span className="w-8 h-8 rounded-full bg-[#0088cc]/10 flex items-center justify-center text-[#0088cc]">
                    <Send className="w-4 h-4 fill-[#0088cc] text-[#0088cc]" />
                  </span>
                  Telegram
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;