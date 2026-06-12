import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, MessageCircle, Send, Coins, Users, ShieldAlert } from 'lucide-react';

interface StatProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatProps> = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl font-serif font-bold text-brand-gold">{value}</div>
      <div className="text-xs uppercase tracking-widest text-brand-text-muted mt-1 font-label">{label}</div>
    </div>
  );
};

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.967 14.11 1.011 12.01 1.011c-5.44 0-9.866 4.372-9.87 9.802 0 1.92.517 3.79 1.5 5.461l-.985 3.597 3.702-.972zm10.17-6.951c-.266-.134-1.57-.775-1.812-.863-.243-.089-.42-.134-.595.134-.176.267-.68 1.157-.833 1.334-.153.178-.307.201-.573.067-.266-.134-1.127-.415-2.147-1.326-.79-.705-1.327-1.579-1.482-1.847-.154-.267-.017-.411.117-.544.121-.119.266-.312.4-.467.135-.156.179-.267.269-.446.09-.178.045-.334-.022-.467-.067-.134-.595-1.436-.815-1.97-.216-.52-.469-.44-.645-.448-.166-.008-.356-.01-.547-.01-.191 0-.503.072-.767.356-.263.284-1.006.984-1.006 2.399 0 1.415 1.028 2.785 1.171 2.977.144.192 2.023 3.09 4.901 4.331.685.295 1.22.472 1.637.605.689.219 1.316.188 1.813.114.553-.082 1.57-.642 1.791-1.261.221-.619.221-1.151.154-1.261-.067-.109-.244-.199-.51-.332z" />
  </svg>
);

const Home: React.FC = () => {
  const testimonials = [
    {
      name: "Chidinma Adebayo",
      role: "Corporate Lawyer",
      programme: "HER Lead Academy Graduate",
      quote: "Before Herdentity, I was constantly looking for external validation. The Reveal phase helped me step into corporate leadership with absolute conviction.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Fatoumata Diallo",
      role: "Tech Entrepreneur",
      programme: "HER Money Academy Graduate",
      quote: "I learned more about financial autonomy and strategic investments in 8 weeks than in my entire business school program. This community is a goldmine.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Sarah Mwangi",
      role: "Creative Director",
      programme: "HER Identity Academy Graduate",
      quote: "Herdentity gave me a safe sisterhood where I could dismantle limiting beliefs. I finally have the clarity to walk in my true purpose.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format&fit=crop"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-deep pt-20">
        <div className="grain-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/75 via-brand-deep/80 to-brand-plum/85 z-10"></div>
        <div className="absolute inset-0 w-full h-full object-cover">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/meetup_group.jpg"
            className="w-full h-full object-cover opacity-35"
          >
            <source src="/meetup_video_1.mp4" type="video/mp4" />
            <track kind="captions" srcLang="en" label="English" default />
          </video>
        </div>

        <div className="max-w-[820px] mx-auto px-6 text-center relative z-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-brand-gold uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold font-label">
              WELCOME TO HERDENTITY
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-brand-text-primary tracking-tight leading-[1.1] mb-8"
          >
            DISCOVER THE REAL <br />
            <span className="text-brand-gold relative inline-block italic">
              HER
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-brand-gold/30 rounded-full"></span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-brand-text-muted text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-[560px] mb-12 font-sans"
          >
            Identity-rooted confidence. Real-life skills. A community helping women thrive in purpose, career, and leadership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="https://forms.gle/JkyMF93L6a6CocQQ6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gold text-brand-dark hover:bg-brand-gold/90 transition-all font-label uppercase tracking-widest text-xs font-semibold px-8 py-4 rounded-md shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              Join The Movement
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/programmes"
              className="border border-brand-gold/40 text-brand-gold hover:bg-brand-gold/10 transition-all font-label uppercase tracking-widest text-xs font-semibold px-8 py-4 rounded-md flex items-center justify-center gap-2"
            >
              Explore Programmes
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <a href="#social-proof" className="text-brand-gold/60 hover:text-brand-gold transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* STATS SECTION */}
      <section id="social-proof" className="bg-brand-deep py-16 border-y border-brand-border-dark relative z-20">
        <div className="grain-overlay"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
            <StatItem value="2400+" label="Women" />
            <div className="hidden md:block w-[1px] h-12 bg-brand-gold/20"></div>
            <StatItem value="8" label="Countries" />
            <div className="hidden md:block w-[1px] h-12 bg-brand-gold/20"></div>
            <StatItem value="3" label="Academies" />
            <div className="hidden md:block w-[1px] h-12 bg-brand-gold/20"></div>
            <StatItem value="5" label="Years of Impact" />
          </div>
        </div>
      </section>

      {/* PROBLEM / EXPLANATION SECTION */}
      <section className="bg-brand-light py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-4xl sm:text-5xl font-serif text-brand-dark tracking-tight leading-tight">
                Educated. Accomplished. <br />
                Still <span className="italic text-brand-gold font-semibold">searching</span>.
              </h2>
              <p className="text-brand-text-dark/70 text-base sm:text-lg font-light leading-relaxed">
                Many women are highly educated, yet feel stuck. The confidence to lead. The clarity to choose. The skills to build financial freedom. The community that truly gets it. Herdentity exists to close that gap.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {[
                {
                  icon: <ShieldAlert className="w-5 h-5 text-brand-gold" />,
                  title: "The Confidence Deficit",
                  desc: "Despite high qualifications, imposter syndrome and systemic biases often limit women from claiming leadership positions."
                },
                {
                  icon: <Coins className="w-5 h-5 text-brand-gold" />,
                  title: "Financial Disconnection",
                  desc: "Knowing how to earn is different from knowing how to build, invest, and preserve independent wealth."
                },
                {
                  icon: <Users className="w-5 h-5 text-brand-gold" />,
                  title: "Isolation in Leadership",
                  desc: "As women ascend professionally, finding safe spaces for honest conversation, vulnerability, and peer guidance becomes rarer."
                }
              ].map((h, f) => (
                <div key={f} className="bg-white p-6 rounded-lg border-l-4 border-brand-gold shadow-sm hover:shadow-md transition-shadow flex gap-4 items-start">
                  <div className="p-2 bg-brand-light rounded-md text-brand-gold mt-1 shrink-0">
                    {h.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-brand-dark mb-1">{h.title}</h4>
                    <p className="text-sm text-brand-text-dark/60 font-light leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY HERDENTITY SECTION */}
      <section className="bg-brand-plum text-brand-text-primary py-24 sm:py-32 relative overflow-hidden clip-skew-bottom pb-32">
        <div className="grain-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="ceo-container-dark relative max-w-sm xl:max-w-md w-full overflow-hidden rounded-2xl border border-brand-border-gold bg-brand-deep">
                <img
                  src="/ceo_portrait.jpg"
                  alt="Herdentity Founder & CEO"
                  className="ceo-dark-filter object-cover w-full h-[480px] hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-semibold font-label">
                  WHY HERDENTITY
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif text-brand-text-primary">
                  Not motivation. <span className="italic text-brand-gold font-semibold">Transformation.</span>
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Identity-Rooted",
                    desc: "Growth that starts from within, not external validation. We focus on dismantling limiting beliefs before building skills."
                  },
                  {
                    title: "Practically Equipped",
                    desc: "Real skills, not inspiration alone. Every session results in worksheets, strategies, and blueprints you can use immediately."
                  },
                  {
                    title: "In Real Community",
                    desc: "Accountability circles, not passive membership. You grow in small cohort groups that hold you to your highest vision."
                  }
                ].map((h, f) => (
                  <div key={f} className="space-y-1">
                    <h4 className="text-lg font-semibold text-brand-gold font-label uppercase tracking-wide">
                      0{f + 1}. {h.title}
                    </h4>
                    <p className="text-sm text-brand-text-primary/70 leading-relaxed font-light">
                      {h.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-brand-border-dark">
                <p className="text-base font-serif italic text-brand-gold">
                  "When a woman discovers her real identity, she becomes unstoppable."
                </p>
                <p className="text-xs uppercase tracking-widest font-label text-brand-text-muted mt-2">
                  Dami Olatunji, Founder & CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE FRAMEWORK BRIEF SECTION */}
      <section className="bg-brand-deep text-brand-text-primary py-24 sm:py-32 relative">
        <div className="grain-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-semibold font-label">
              OUR APPROACH
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif">
              The Real <span className="italic text-brand-gold font-semibold">HER</span> Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { letter: "R", word: "Reveal", desc: "Uncover your true identity and shed what was never yours." },
              { letter: "E", word: "Equip", desc: "Build the practical skills your life actually needs." },
              { letter: "A", word: "Activate", desc: "Step into purpose with tools, support, and clarity." },
              { letter: "L", word: "Lead", desc: "Take your place as a woman of impact in your world." }
            ].map((h, f) => (
              <motion.div
                key={f}
                whileHover={{ y: -6 }}
                className="bg-brand-plum border border-brand-border p-8 rounded-2xl flex flex-col justify-between items-center transition-brand gold-glow-hover text-center min-h-[260px]"
              >
                <div className="text-6xl font-serif text-brand-gold font-bold mb-4">{h.letter}</div>
                <div>
                  <h4 className="text-xl font-bold font-label uppercase tracking-wider text-brand-text-primary mb-2">
                    {h.word}
                  </h4>
                  <p className="text-xs text-brand-text-muted leading-relaxed font-light max-w-[200px] mx-auto">
                    {h.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <a
            href="/framework"
            className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold/90 transition-colors text-sm font-label uppercase tracking-widest font-semibold"
          >
            Learn The Full Framework <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* QUICK PROGRAMMES VIEW */}
      <section className="bg-brand-light py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-semibold font-label">
              OUR PROGRAMMES
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark">
              Every Woman Has Her Path
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                badge: "ACADEMY",
                badgeColor: "bg-brand-gold/15 text-brand-gold border-brand-gold/30",
                title: "HER Identity Academy",
                desc: "An 8-week structured cohort for self-discovery, dismantling limiting expectations, and setting personal mission alignment.",
                duration: "8 WEEKS · ONLINE",
                accent: "border-t-brand-gold"
              },
              {
                badge: "ACADEMY",
                badgeColor: "bg-brand-gold/15 text-brand-gold border-brand-gold/30",
                title: "HER Money Academy",
                desc: "An 8-week financial mastery incubator focused on money mindset, independent wealth building, and investment strategies.",
                duration: "8 WEEKS · ONLINE",
                accent: "border-t-brand-gold"
              },
              {
                badge: "ACADEMY",
                badgeColor: "bg-brand-gold/15 text-brand-gold border-brand-gold/30",
                title: "HER Lead Academy",
                desc: "An 8-week executive and personal sovereignty curriculum built for career growth, boundaries, and corporate influence.",
                duration: "8 WEEKS · ONLINE",
                accent: "border-t-brand-gold"
              },
              {
                badge: "COMMUNITY",
                badgeColor: "bg-brand-rose/15 text-brand-rose border-brand-rose/30",
                title: "Mentorship Circles",
                desc: "Peer accountability networks and direct access to elite industry leaders for continuous career support.",
                duration: "ONGOING · HYBRID",
                accent: "border-t-brand-rose"
              },
              {
                badge: "EVENTS",
                badgeColor: "bg-brand-plum/20 text-brand-gold border-brand-gold/20",
                title: "Annual Retreats",
                desc: "Immersive 3-day bootcamps of silence, focus, sisterhood, and direct leadership development in scenic spaces.",
                duration: "3 DAYS · IN-PERSON",
                accent: "border-t-brand-plum"
              }
            ].map((h, f) => (
              <div key={f} className={`bg-white rounded-2xl p-8 border border-brand-gold/10 border-t-4 ${h.accent} shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between`}>
                <div className="space-y-4">
                  <div className="flex">
                    <span className={`text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full border ${h.badgeColor} font-label uppercase`}>
                      {h.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-serif text-brand-dark">
                    {h.title}
                  </h3>
                  <p className="text-sm text-brand-text-dark/60 leading-relaxed font-light">
                    {h.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-brand-gold/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-brand-text-muted font-label uppercase tracking-widest">
                    {h.duration}
                  </span>
                  <a href="/programmes" className="text-xs font-bold text-brand-gold hover:underline font-label uppercase tracking-wider flex items-center gap-1">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO PLAYER BRIEF */}
      <section className="bg-brand-plum text-brand-text-primary py-24 sm:py-32 relative">
        <div className="grain-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl sm:text-5xl font-serif text-brand-text-primary mb-12">
            See <span className="italic text-brand-gold font-semibold">Her</span> in Action
          </h2>
          <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden border border-brand-border-gold bg-brand-deep shadow-2xl relative aspect-video flex items-center justify-center">
            {playVideo ? (
              <video className="w-full h-full object-cover" src="/meetup_video_2.mp4" controls autoPlay>
                <track kind="captions" srcLang="en" label="English" default />
              </video>
            ) : (
              <>
                <img src="/meetup_group.jpg" alt="Herdentity Meetup Video Cover" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                <button
                  onClick={() => setPlayVideo(true)}
                  className="w-20 h-20 rounded-full bg-brand-gold/90 hover:bg-brand-gold text-brand-dark flex items-center justify-center shadow-xl hover:scale-105 transition-all z-10"
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8 fill-brand-dark ml-1" />
                </button>
              </>
            )}
          </div>
          <div className="max-w-2xl mx-auto mt-16 text-center space-y-4">
            <p className="text-xl sm:text-2xl font-serif italic text-brand-gold">
              "When women find each other, they find themselves."
            </p>
            <p className="text-xs uppercase tracking-widest font-label text-brand-text-muted">
              Dami Olatunji, Founder & CEO
            </p>
          </div>
        </div>
      </section>

      {/* QUICK TESTIMONIALS SLIDER */}
      <section className="bg-brand-light py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-semibold font-label">
              REAL WOMEN. REAL RESULTS.
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark">
              Stories of Transformation
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative px-6 md:px-12 py-10 bg-white border border-brand-gold/10 rounded-3xl shadow-sm min-h-[300px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 flex flex-col justify-between flex-1"
              >
                <p className="text-lg sm:text-2xl font-serif italic text-brand-dark leading-relaxed">
                  "{testimonials[activeSlide].quote}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-brand-gold/10">
                  <img
                    src={testimonials[activeSlide].image}
                    alt={testimonials[activeSlide].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-brand-gold/30"
                  />
                  <div>
                    <h4 className="text-base font-bold text-brand-dark">{testimonials[activeSlide].name}</h4>
                    <p className="text-xs text-brand-text-dark/50 font-label uppercase tracking-widest">
                      {testimonials[activeSlide].role} · <span className="text-brand-gold">{testimonials[activeSlide].programme}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-2.5 justify-center mt-8 pt-4">
              {testimonials.map((h, f) => (
                <button
                  key={f}
                  onClick={() => setActiveSlide(f)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeSlide === f ? "bg-brand-gold w-6" : "bg-brand-gold/30"
                  }`}
                  aria-label={`Go to slide ${f + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA JOIN THE COMMUNITY */}
      <section className="bg-brand-deep text-brand-text-primary py-24 sm:py-32 relative text-center">
        <div className="grain-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <h2 className="text-4xl sm:text-6xl font-serif text-brand-text-primary mb-6">
            You Were Not Meant to Do This <span className="italic text-brand-gold font-semibold">Alone</span>
          </h2>
          <p className="text-brand-text-muted text-base sm:text-lg max-w-[500px] mb-12 font-sans font-light">
            Join 2,400+ women already inside the Herdentity community across the continent and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <a
              href="https://chat.whatsapp.com/DUL8d6zcqGyAe6qftqVZkN"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 transition-all font-label uppercase tracking-widest text-xs font-semibold px-8 py-4 rounded-md flex items-center justify-center gap-3"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Join on WhatsApp
            </a>
            <a
              href="https://t.me/herdentity"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#0088cc]/40 text-[#0088cc] hover:bg-[#0088cc]/10 transition-all font-label uppercase tracking-widest text-xs font-semibold px-8 py-4 rounded-md flex items-center justify-center gap-3"
            >
              <Send className="w-4 h-4 transform rotate-45 -translate-y-0.5" />
              Join on Telegram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
