import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, Users, HeartHandshake, Compass, ShieldCheck, Sparkles } from 'lucide-react';

const Features: React.FC = () => {
  const pillars = [
    {
      title: "Resilient Identity",
      icon: <ShieldCheck className="w-5 h-5 text-gold" />,
      text: "Build unshakable self-worth and the mental resilience to navigate leadership challenges. We ground your confidence in who you are, not just what you do."
    },
    {
      title: "Financial Mastery",
      icon: <Compass className="w-5 h-5 text-gold" />,
      text: "Equipping you with the real-life tactical skills of financial literacy and wealth creation. Practical empowerment for a future of independence."
    },
    {
      title: "Purpose & Leadership",
      icon: <Sparkles className="w-5 h-5 text-gold" />,
      text: "Uncover your divine purpose and lead with authority in your career and community. Mentorship that transforms potential into global impact."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white border-t border-lavender/20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="space-y-4"
            >
              <div className="w-10 h-10 rounded-lg bg-lavender/5 border border-lavender/20 flex items-center justify-center shadow-sm">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-medium text-royal tracking-tight">{pillar.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;