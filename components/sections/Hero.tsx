import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, MapPin, Calendar, Users, Compass, ShieldCheck, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const stripImages = [
    "/logo.jpg", // Herdentity Logo
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop", // Group collaboration
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop", // Modern office
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop", // Workshop/Meeting
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop"  // Professional setting
  ];

  return (
    <main id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Godly Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Soft Background Image Texture */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'url("/hero-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Ethereal Light Rays / Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.45, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[10%] w-[800px] h-[800px] bg-lavender/30 rounded-full blur-[150px] mix-blend-screen"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] right-[-10%] w-[700px] h-[700px] bg-royal/10 rounded-full blur-[140px] mix-blend-multiply"
          ></motion.div>
          <motion.div
            animate={{
              y: [-20, 20, -20],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] left-[30%] w-[600px] h-[600px] bg-gold-light/10 rounded-full blur-[120px] mix-blend-screen"
          ></motion.div>

          {/* Subtle Divine Rays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,225,255,0.4)_0%,transparent_70%)]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-lavender/30 mb-8 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
          <span className="text-[10px] md:text-xs font-semibold text-royal tracking-[0.2em] uppercase">A Movement for the Chosen</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-10"
        >
          <h1 className="text-5xl md:text-8xl lg:text-[110px] font-serif italic text-royal tracking-tight leading-[0.9] max-w-6xl mx-auto">
            Beyond the Surface. <br />
            <span className="text-zinc-900 not-italic font-sans font-medium">Rooted in</span>
            <span className="text-gold relative inline-block ml-4">
              {" "}Identity.
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "105%" }}
                transition={{ duration: 1.2, delay: 1, ease: "easeInOut" }}
                className="absolute -bottom-1 left-[-2.5%] h-[4px] bg-gold/30 -z-10 rounded-full"
              ></motion.span>
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-zinc-500 max-w-3xl mx-auto font-light leading-relaxed mb-12"
        >
          Herdentity is a movement equipping women with <span className="text-royal font-medium">identity-rooted confidence</span> and <span className="text-royal font-medium">real-life skills</span>. We help you thrive in purpose, career, and leadership through mentorship and community.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf41EHO96xWZvha71vl2kYLsq0Rl0cVn4EtUB9_UyptNNvSlQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-royal text-white px-10 py-4 rounded-full font-medium text-lg overflow-hidden shadow-2xl hover:shadow-royal/30 transition-all duration-500 hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-2">
              Join the Movement
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-royal via-royal-hover to-royal opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <div className="flex items-center gap-3 text-zinc-400 font-medium text-sm">
            <ShieldCheck className="w-5 h-5 text-gold" />
            Empowering purpose & resilience
          </div>
        </motion.div>
      </div>

      {/* Enhanced Hero Image Strip */}
      <div className="mt-28 md:mt-36 relative">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-10"></div>
        <div className="flex gap-8 overflow-hidden select-none opacity-90">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap min-w-full"
          >
            {[...stripImages, ...stripImages].map((src, index) => (
              <div
                key={index}
                className={`w-64 h-80 md:w-[380px] md:h-[540px] rounded-[40px] overflow-hidden shrink-0 relative group shadow-2xl shadow-royal/5 ${index % 2 === 1 ? 'mt-20' : ''}`}
              >
                <img
                  src={src}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-[2s] ease-out grayscale-[0.2] group-hover:grayscale-0"
                  alt="Community Member"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Divine Overlay on Hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(229,196,139,0.2)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
      </div>
    </main>
  );
};

export default Hero;