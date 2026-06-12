import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      num: "01",
      title: "Identity & Authenticity",
      desc: "Helping women live true to who they are. We guide you to shed societal expectations and uncover your original, designed self."
    },
    {
      num: "02",
      title: "Excellence & Growth",
      desc: "A commitment to continuous learning and rising to the highest standards. We build real life-skills that create real-world leverage."
    },
    {
      num: "03",
      title: "Sisterhood & Empathy",
      desc: "Creating safe, supportive, and highly collaborative spaces. We believe women grow fastest when they rise together in trust."
    }
  ];

  const milestones = [
    {
      year: "2021",
      title: "The Vision Born",
      desc: "Herdentity is founded in Lagos, Nigeria, with a single workshop focused on self-esteem and identity for young professional women."
    },
    {
      year: "2023",
      title: "Expanding the Academy",
      desc: "We formalize our curriculum into three specialized tracks: HER Identity, HER Money, and HER Lead, training over 1,000 women online."
    },
    {
      year: "2024",
      title: "Accountability Circles",
      desc: "Small-group Peer Circles are introduced, building structural support and mentoring matchups for cohort members across 8 countries."
    },
    {
      year: "2025",
      title: "Immersive Retreats Launch",
      desc: "We host our first annual regional bootcamps, bringing women together for hybrid offline-online training and alignment."
    }
  ];

  return (
    <div className="relative font-sans">
      
      {/* HERO: CEO SPLIT PANEL */}
      <section className="relative min-h-[100vh] lg:h-[100vh] flex flex-col lg:flex-row overflow-hidden bg-brand-deep pt-16 lg:pt-0">
        <div className="grain-overlay"></div>
        <div className="w-full lg:w-[58%] h-[50vh] lg:h-full relative shrink-0 ceo-container-dark">
          <img
            src="/ceo_about.jpg"
            alt="Dami Olatunji - Founder & CEO"
            className="ceo-dark-filter w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-[42%] bg-brand-plum text-brand-text-primary px-8 sm:px-12 py-16 lg:py-0 flex flex-col justify-center relative z-10 border-l border-brand-border-dark">
          <div className="space-y-6 max-w-lg mx-auto lg:mx-0">
            <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-semibold font-label">
              MEET OUR FOUNDER
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-brand-text-primary leading-tight">
              Dami Olatunji
            </h1>
            <p className="text-brand-gold font-label uppercase tracking-widest text-xs font-semibold">
              Founder & CEO, Herdentity
            </p>
            <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed font-light">
              Herdentity was born out of a desire to see women live with purpose, fully aware of their capabilities. Having navigated corporate spaces and entrepreneurial shifts, I realized that true development isn't just about professional tools—it's about identity.
            </p>
            <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed font-light">
              We started Herdentity to help women bridge that gap: creating a safe ecosystem where they can strip away expectations, equip themselves with practical skills, and step confidently into leadership.
            </p>
            <div className="pt-4 border-t border-brand-gold/10">
              <p className="text-lg sm:text-xl font-serif italic text-brand-gold leading-normal">
                "A woman who knows her worth changes the trajectory of her entire lineage."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-plum text-brand-text-primary p-10 rounded-3xl border border-brand-gold/20 flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
              <div className="grain-overlay"></div>
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-brand-gold font-bold">
                  Our Mission
                </h3>
                <p className="text-brand-text-muted text-base sm:text-lg leading-relaxed font-light">
                  To equip women with identity-rooted confidence and real-life skills through experiential learning, mentorship, coaching programs, and community-driven platforms.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white text-brand-text-dark p-10 rounded-3xl border border-brand-gold/10 flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-brand-dark font-bold">
                  Our Vision
                </h3>
                <p className="text-brand-text-dark/70 text-base sm:text-lg leading-relaxed font-light">
                  To become a global force for female transformation—raising confident, self-aware, purpose-driven women who live boldly, lead strongly, and positively influence generations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-semibold font-label">
              THE JOURNEY
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark">
              Our Milestones
            </h2>
          </div>

          <div className="relative border-l-2 border-brand-gold/20 ml-4 md:mx-auto md:w-full md:border-l-0">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-brand-gold/20"></div>
            <div className="space-y-16">
              {milestones.map((o, u) => (
                <div key={u} className="relative md:flex md:justify-between items-center group">
                  <div className={`md:w-[45%] pl-8 md:pl-0 ${u % 2 === 0 ? "md:text-right" : "md:order-last md:text-left"}`}>
                    <div className="text-3xl sm:text-4xl font-serif text-brand-gold font-bold mb-2">
                      {o.year}
                    </div>
                    <h4 className="text-lg font-bold text-brand-dark mb-2">
                      {o.title}
                    </h4>
                    <p className="text-sm text-brand-text-dark/60 font-light leading-relaxed max-w-md md:mx-auto lg:mx-0">
                      {o.desc}
                    </p>
                  </div>
                  <div className="absolute left-[-9px] top-1.5 md:left-1/2 md:-translate-x-1/2 md:top-auto w-[18px] h-[18px] rounded-full bg-brand-gold border-4 border-white shadow-sm z-10 transition-transform duration-300 group-hover:scale-125"></div>
                  <div className="hidden md:block md:w-[45%]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-plum text-brand-text-primary py-24 sm:py-32 relative">
        <div className="grain-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl mb-16 space-y-4">
            <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-semibold font-label">
              HOW WE LIVE & BUILD
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((o, u) => (
              <div key={u} className="bg-brand-deep/40 border border-brand-border-dark p-8 rounded-2xl flex flex-col justify-between min-h-[280px] hover:shadow-lg transition-shadow">
                <div className="text-5xl sm:text-6xl font-serif text-brand-gold/20 font-bold mb-6">
                  {o.num}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-gold font-label uppercase tracking-wider mb-3">
                    {o.title}
                  </h3>
                  <p className="text-sm text-brand-text-muted leading-relaxed font-light">
                    {o.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-light text-center relative border-t border-brand-gold/15">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark">
            Ready to Begin?
          </h2>
          <p className="text-brand-text-dark/70 font-light text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Take the first step toward self-worth, financial clarity, and career empowerment. Join our cohort or explore our courses.
          </p>
          <div className="pt-4">
            <a
              href="https://forms.gle/JkyMF93L6a6CocQQ6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark hover:bg-brand-gold/90 transition-all font-label uppercase tracking-widest text-xs font-semibold px-8 py-4 rounded-md shadow-lg transform hover:-translate-y-0.5"
            >
              Join The Movement
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
