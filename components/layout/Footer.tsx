import React, { useState } from 'react';
import { ArrowRight, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-brand-deep text-brand-text-muted border-t border-brand-border-gold pt-20 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="/" className="text-brand-text-primary font-bold tracking-tight text-xl uppercase flex items-center gap-3 font-label">
              <img src="/logo.jpg" alt="Herdentity" className="w-8 h-8 rounded-full border border-brand-gold/30" />
              <span>Herdentity</span>
            </a>
            <p className="text-sm text-brand-text-muted leading-relaxed max-w-sm">
              Discover the Real Her. Identity-rooted confidence, real-life skills, and a supportive community helping African women thrive.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Instagram className="w-4 h-4" />, url: "https://www.instagram.com/herdentity" },
                { icon: <Facebook className="w-4 h-4" />, url: "https://www.facebook.com/profile.php?id=61585987056794" }
              ].map((h, f) => (
                <a
                  key={f}
                  href={h.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-brand-plum border border-brand-gold/20 flex items-center justify-center text-brand-gold hover:text-brand-text-primary hover:bg-brand-gold transition-all duration-300"
                >
                  {h.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-6 font-label">
              Quick Links
            </h4>
            <ul className="space-y-3 font-label text-xs uppercase tracking-wider">
              <li><a href="/" className="hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-brand-gold transition-colors">About</a></li>
              <li><a href="/framework" className="hover:text-brand-gold transition-colors">The Framework</a></li>
              <li><a href="/programmes" className="hover:text-brand-gold transition-colors">Programmes</a></li>
              <li><a href="/resources" className="hover:text-brand-gold transition-colors">Books & Resources</a></li>
              <li><a href="/community" className="hover:text-brand-gold transition-colors">Community</a></li>
              <li><a href="/stories" className="hover:text-brand-gold transition-colors">Stories</a></li>
              <li><a href="/contact" className="hover:text-brand-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-6 font-label">
              Programmes
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/programmes" className="hover:text-brand-gold transition-colors">HER Identity Academy</a></li>
              <li><a href="/programmes" className="hover:text-brand-gold transition-colors">HER Money Academy</a></li>
              <li><a href="/programmes" className="hover:text-brand-gold transition-colors">HER Lead Academy</a></li>
              <li><a href="/programmes" className="hover:text-brand-gold transition-colors">Mentorship Circles</a></li>
              <li><a href="/programmes" className="hover:text-brand-gold transition-colors">Annual Retreats</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-6 font-label">
              Newsletter
            </h4>
            <p className="text-sm text-brand-text-muted mb-4 leading-relaxed">
              Stay updated with monthly resources, cohort schedules, and community events.
            </p>
            {isSubscribed ? (
              <div className="bg-brand-plum border border-brand-gold/30 rounded p-4 text-xs text-brand-gold font-medium">
                Thank you for subscribing! We'll keep you updated.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(h) => setEmail(h.target.value)}
                  className="bg-brand-plum border border-brand-gold/30 rounded px-3 py-2 text-xs text-brand-text-primary focus:outline-none focus:border-brand-gold flex-1 min-w-0"
                />
                <button
                  type="submit"
                  className="bg-brand-gold text-brand-dark hover:bg-brand-gold/90 transition-colors px-4 py-2 rounded font-label uppercase font-bold text-xs flex items-center justify-center"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-brand-gold/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Herdentity. All rights reserved.</p>
          <div className="flex gap-6 font-label uppercase tracking-widest">
            <a href="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-brand-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;