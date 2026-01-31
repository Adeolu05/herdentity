import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const stories = [
    {
      text: "Herdentity is a movement equipping women with identity-rooted confidence and real-life skills. We help you thrive in purpose, career, and leadership through mentorship and community. Discover your self-worth and lead strongly.",
      author: "Dami O.",
      role: "C.E.O.",
      image: "/logo.jpg"
    }
  ];

  return (
    <section id="stories" className="py-32 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Quote className="w-10 h-10 text-gold/40 mx-auto mb-10 fill-gold/10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-serif italic text-royal tracking-tight leading-snug mb-10">
            "{stories[0].text}"
          </h3>
        </motion.div>
        <div className="flex items-center justify-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gold/20 rounded-full blur-sm"></div>
            <img
              src={stories[0].image}
              className="w-16 h-16 rounded-full object-cover grayscale opacity-90 border-2 border-gold/30 relative z-10"
              alt={stories[0].author}
            />
          </div>
          <div className="text-left">
            <div className="text-lg font-semibold text-royal flex items-center gap-2">
              {stories[0].author}
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
            </div>
            <div className="text-sm text-zinc-400 uppercase tracking-widest font-medium">{stories[0].role}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;