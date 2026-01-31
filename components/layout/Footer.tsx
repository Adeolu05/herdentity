import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-lavender/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-2 md:col-span-2">
            <a href="#hero" className="text-royal font-semibold tracking-tighter text-xl uppercase flex items-center gap-2 mb-6">
              <img src="/logo.jpg" alt="Herdentity" className="w-8 h-8 rounded-full" />
              Herdentity<span className="text-gold">.</span>
            </a>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
              A leadership movement equipping women with identity-rooted confidence and real-life skills to thrive in purpose, career, and life.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-royal uppercase tracking-wider mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#mission" className="text-sm text-zinc-500 hover:text-royal transition-colors">Philosophy</a></li>
              <li><a href="#features" className="text-sm text-zinc-500 hover:text-royal transition-colors">Mentorship</a></li>
              <li><a href="#stories" className="text-sm text-zinc-500 hover:text-royal transition-colors">Stories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-royal uppercase tracking-wider mb-6">Connect</h4>
            <div className="flex gap-5">
              <a
                href="https://www.instagram.com/herdentity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-lavender/10 flex items-center justify-center text-royal/60 hover:text-royal hover:bg-lavender/20 transition-all shadow-sm"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61585987056794"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-lavender/10 flex items-center justify-center text-royal/60 hover:text-royal hover:bg-lavender/20 transition-all shadow-sm"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-lavender/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-400">© {new Date().getFullYear()} Herdentity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;