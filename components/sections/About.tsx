import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="mission" className="py-32 bg-royal text-white overflow-hidden relative scroll-mt-16">
      {/* Divine Glow */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[900px] h-[900px] bg-gold/10 rounded-full blur-[120px] mix-blend-overlay"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1]">
              Leading from the <br />
              <span className="text-gold italic font-serif">Deepest Root.</span>
            </h2>
            <p className="text-lavender/80 text-xl font-light leading-relaxed max-w-xl">
              Becoming a leader isn't just about strategy; it's about the <span className="text-white font-medium">divine assurance</span> of who you are. We help women bridge the gap between their current reality and their highest calling.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1 border border-gold/30">
                  <Check className="w-4 h-4 text-gold-light" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Identity Restoration</h4>
                  <p className="text-sm text-lavender/50 mt-1">Uncovering the original version of your leadership potential.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1 border border-gold/30">
                  <Check className="w-4 h-4 text-gold-light" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Global Ecosystem</h4>
                  <p className="text-sm text-lavender/50 mt-1">A curated community of elite women rising together.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf41EHO96xWZvha71vl2kYLsq0Rl0cVn4EtUB9_UyptNNvSlQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-royal px-8 py-3.5 rounded-full text-sm font-medium hover:bg-lavender transition-all shadow-lg hover:shadow-lavender/20 active:scale-95"
              >
                Start Your Transformation
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-lavender/20 to-lavender/5 rounded-2xl transform rotate-3"></div>
            <img
              src="/logo.jpg"
              alt="Herdentity Philosophy"
              className="rounded-2xl shadow-2xl relative z-10 border border-white/10 w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;