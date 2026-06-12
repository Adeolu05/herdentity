import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, CheckCircle2, Heart, ArrowRight } from 'lucide-react';

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

const Community: React.FC = () => {
  const gallery = [
    { src: "/meetup_group.jpg", location: "Lagos Cohort Meetup", event: "Annual Leadership Summit" },
    { src: "/meetup_grid.jpg", location: "Nairobi Circle Gathering", event: "Financial Freedom Workshop" },
    { src: "/meetup_room.jpg", location: "Accra Cohort Mixer", event: "Identity Alignment Seminar" },
    { src: "/meetup_five.jpg", location: "Kigali Focus Session", event: "Strategic Goal Setting" }
  ];

  return (
    <div className="relative font-sans">
      <section className="bg-brand-deep text-brand-text-primary py-24 sm:py-32 relative text-center">
        <div className="grain-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-semibold font-label mb-6">
            THE SISTERHOOD
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold mb-6">
            You Were Not Meant to Do This <span className="italic text-brand-gold font-semibold">Alone</span>
          </h1>
          <p className="text-brand-text-muted text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed mb-12">
            Connect with ambitious, like-minded African women building financial competence, claiming leadership, and growing in identity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="https://chat.whatsapp.com/DUL8d6zcqGyAe6qftqVZkN"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-brand-dark hover:bg-[#25D366]/90 transition-all font-label uppercase tracking-widest text-xs font-bold px-8 py-4 rounded-md flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 fill-brand-dark" />
              Join WhatsApp
            </a>
            <a
              href="https://t.me/herdentity"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0088cc] text-brand-text-primary hover:bg-[#0088cc]/90 transition-all font-label uppercase tracking-widest text-xs font-bold px-8 py-4 rounded-md flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 fill-brand-text-primary transform rotate-45 -translate-y-0.5" />
              Join Telegram
            </a>
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-gold/10 border-l-4 border-l-[#25D366] shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif text-brand-dark font-bold">
                  WhatsApp Community
                </h3>
                <p className="text-brand-gold font-label uppercase tracking-wider text-xs font-semibold">
                  "Where the conversations happen"
                </p>
                <p className="text-sm text-brand-text-dark/70 font-light leading-relaxed">
                  Our active conversation platform. This is where daily sisterhood connections happen, questions are asked, accountability circles coordinate, and cohort study threads run.
                </p>
                <ul className="space-y-3 pt-2 text-sm text-brand-text-dark/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                    <span>Cohort-specific private study channels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                    <span>Daily wins, resources sharing, and updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                    <span>Instant access to cohort coordinators</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8 mt-6 border-t border-brand-gold/10">
                <a
                  href="https://chat.whatsapp.com/DUL8d6zcqGyAe6qftqVZkN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-brand-dark hover:bg-[#25D366]/90 transition-all py-3 rounded-md font-label uppercase tracking-widest text-xs font-bold text-center flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-brand-dark" />
                  Join WhatsApp Community
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-gold/10 border-l-4 border-l-[#0088cc] shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-[#0088cc]/10 flex items-center justify-center text-[#0088cc]">
                  <Send className="w-6 h-6 fill-none transform rotate-45 -translate-y-0.5" />
                </div>
                <h3 className="text-2xl font-serif text-brand-dark font-bold">
                  Telegram Content Vault
                </h3>
                <p className="text-brand-gold font-label uppercase tracking-wider text-xs font-semibold">
                  "Where the knowledge lives"
                </p>
                <p className="text-sm text-brand-text-dark/70 font-light leading-relaxed">
                  Our structured file and training repository. No clutter or spam. This channel houses workbook PDFs, financial spreadsheets, curriculum materials, replays, and journals.
                </p>
                <ul className="space-y-3 pt-2 text-sm text-brand-text-dark/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0088cc] shrink-0" />
                    <span>Downloadable original workbooks and templates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0088cc] shrink-0" />
                    <span>Recorded live workshop video replays</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0088cc] shrink-0" />
                    <span>Curated external study links and reports</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8 mt-6 border-t border-brand-gold/10">
                <a
                  href="https://t.me/herdentity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#0088cc] text-brand-text-primary hover:bg-[#0088cc]/90 transition-all py-3 rounded-md font-label uppercase tracking-widest text-xs font-bold text-center flex items-center justify-center gap-2"
                >
                  Join Telegram Channel
                </a>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-brand-text-muted italic">
              "WhatsApp for community. Telegram for content. Together, they are your complete support system."
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 border-y border-brand-gold/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-semibold font-label">
              ORGANIZATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark">
              Community Structure
            </h2>
            <p className="text-sm text-brand-text-dark/60 max-w-md mx-auto">
              How our community channels are structured to prevent overwhelm while maximizing direct accountability.
            </p>
          </div>

          <div className="bg-brand-light/60 p-8 sm:p-12 rounded-3xl border border-brand-gold/10 flex flex-col items-center">
            <div className="bg-brand-deep text-brand-text-primary border border-brand-gold px-8 py-4 rounded-xl font-label uppercase text-sm tracking-widest font-bold shadow-md text-center max-w-[280px]">
              Herdentity Ecosystem
            </div>
            <div className="w-[2px] h-8 bg-brand-gold/40"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full relative">
              <div className="hidden md:block absolute left-1/4 right-1/4 top-0 h-[2px] bg-brand-gold/40"></div>
              <div className="flex flex-col items-center">
                <div className="hidden md:block w-[2px] h-4 bg-brand-gold/40"></div>
                <div className="bg-brand-plum text-brand-text-primary border border-brand-gold/25 px-5 py-3 rounded-lg text-xs font-label uppercase font-bold tracking-wider shadow-sm w-full max-w-[220px] text-center">
                  Announcements
                </div>
                <div className="w-[2px] h-6 bg-brand-gold/20"></div>
                <div className="bg-white text-brand-text-dark/80 px-4 py-2.5 rounded border border-brand-gold/10 text-xs font-light text-center w-full max-w-[200px]">
                  Official dates, cohort applications, retreat openings
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="hidden md:block w-[2px] h-4 bg-brand-gold/40"></div>
                <div className="bg-brand-plum text-brand-text-primary border border-brand-gold/25 px-5 py-3 rounded-lg text-xs font-label uppercase font-bold tracking-wider shadow-sm w-full max-w-[220px] text-center">
                  General Community
                </div>
                <div className="w-[2px] h-6 bg-brand-gold/20"></div>
                <div className="grid grid-cols-2 gap-4 w-full max-w-[320px] relative">
                  <div className="absolute left-[25%] right-[25%] top-0 h-[2px] bg-brand-gold/20"></div>
                  <div className="flex flex-col items-center">
                    <div className="w-[2px] h-3 bg-brand-gold/20"></div>
                    <div className="bg-white text-brand-gold px-3 py-2 rounded border border-brand-gold/10 text-[10px] font-label uppercase font-bold tracking-widest shadow-inner text-center w-full">
                      Accountability Circles
                    </div>
                    <p className="text-[10px] text-brand-text-dark/50 text-center mt-1">
                      10-20 women matching goals
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-[2px] h-3 bg-brand-gold/20"></div>
                    <div className="bg-white text-brand-lavender px-3 py-2 rounded border border-brand-gold/10 text-[10px] font-label uppercase font-bold tracking-widest shadow-inner text-center w-full">
                      Academy Cohorts
                    </div>
                    <p className="text-[10px] text-brand-text-dark/50 text-center mt-1">
                      Active class discussion groups
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-semibold font-label">
                CORE COMPONENT
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark leading-tight">
                Accountability Circles
              </h2>
              <p className="text-brand-text-dark/70 text-base sm:text-lg font-light leading-relaxed">
                When you join an Academy track, you are matched into a Circle of 10 to 20 women in your same career or growth season. These Circles act as safe sisterhood hubs where you share lessons, dissect challenges, and build mutual accountability.
              </p>
              <div className="space-y-4 pt-2">
                {[
                  { title: "Weekly Syncs", desc: "Short, student-led structure to review workbook progress and set goals." },
                  { title: "Mentor Matching", desc: "Direct access to senior facilitators for monthly checkpoints." },
                  { title: "Safe Space Commitment", desc: "Strict confidentiality and deep trust guidelines for all members." }
                ].map((s, o) => (
                  <div key={o} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0 mt-1">
                      <Heart className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-brand-dark">
                        {s.title}
                      </h4>
                      <p className="text-xs text-brand-text-dark/50 font-light leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-brand-plum text-brand-text-primary p-8 rounded-3xl border border-brand-gold/20 relative overflow-hidden">
              <div className="grain-overlay"></div>
              <div className="relative z-10 space-y-6">
                <h3 className="text-xl sm:text-2xl font-serif text-brand-gold">
                  Matching Process
                </h3>
                <div className="space-y-4">
                  {[
                    { step: "01", name: "Submit Application", desc: "Apply for a cohort track and state your career focus." },
                    { step: "02", name: "Coordinator Alignment", desc: "Our facilitators review alignments and backgrounds." },
                    { step: "03", name: "Circle Matching", desc: "We place you in a group of 10-20 peer members." }
                  ].map((s, o) => (
                    <div key={o} className="flex gap-4">
                      <div className="text-lg font-serif text-brand-gold font-bold">{s.step}</div>
                      <div>
                        <h5 className="text-sm font-bold">{s.name}</h5>
                        <p className="text-xs text-brand-text-muted font-light mt-0.5 leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-semibold font-label">
              IN ACTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark">
              Sisterhood Gallery
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((s, o) => (
              <div key={o} className="relative rounded-2xl overflow-hidden group aspect-[4/5] bg-brand-dark shadow-sm">
                <img
                  src={s.src}
                  alt={s.location}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-plum via-brand-plum/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                  <span className="text-[10px] font-bold tracking-widest text-brand-gold font-label uppercase">
                    {s.event}
                  </span>
                  <h4 className="text-base font-bold text-brand-text-primary mt-1 font-serif">
                    {s.location}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-plum text-brand-text-primary py-24 sm:py-32 relative overflow-hidden">
        <div className="grain-overlay"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center space-y-10">
          <div className="space-y-4">
            <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-semibold font-label">
              OUR PROMISE
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-brand-text-primary">
              The Community Covenant
            </h2>
          </div>
          <div className="text-base sm:text-lg text-brand-text-muted leading-relaxed font-light font-serif space-y-6 text-justify sm:text-center max-w-2xl mx-auto">
            <p className="italic">
              "We enter this space as equals, shedding titles and comparison at the threshold to foster true sisterhood. We listen with deep empathy, speak with absolute clarity, and protect the confidentiality of every shared story."
            </p>
            <p className="italic">
              "We actively celebrate each other's career advancement, wealth milestones, and personal development wins, committing to hold one another accountable to our highest designed potential. Together, we are building a legacy that shapes generations."
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-deep text-brand-text-primary py-24 border-t border-brand-border-dark text-center">
        <div className="grain-overlay"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-5xl font-serif">
            Are You Ready to Join Us?
          </h2>
          <p className="text-brand-text-muted text-base sm:text-lg max-w-md mx-auto font-light leading-relaxed">
            Submit your interest for the next cohort and get instant access to our Telegram Content Vault.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://forms.gle/JkyMF93L6a6CocQQ6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gold text-brand-dark hover:bg-brand-gold/90 transition-all font-label uppercase tracking-widest text-xs font-bold px-8 py-4 rounded-md flex items-center justify-center gap-2 shadow-lg"
            >
              Submit Cohort Interest
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://chat.whatsapp.com/DUL8d6zcqGyAe6qftqVZkN"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 transition-all font-label uppercase tracking-widest text-xs font-bold px-8 py-4 rounded-md flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 fill-none" />
              Join WhatsApp
            </a>
            <a
              href="https://t.me/herdentity"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#0088cc]/40 text-[#0088cc] hover:bg-[#0088cc]/10 transition-all font-label uppercase tracking-widest text-xs font-bold px-8 py-4 rounded-md flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 transform rotate-45 -translate-y-0.5" />
              Join Telegram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
