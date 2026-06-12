import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const WhatsAppIcon: React.FC<{ className?: string; fill?: string }> = ({ className = "w-4 h-4", fill = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={fill}
    className={className}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.967 14.11 1.011 12.01 1.011c-5.44 0-9.866 4.372-9.87 9.802 0 1.92.517 3.79 1.5 5.461l-.985 3.597 3.702-.972zm10.17-6.951c-.266-.134-1.57-.775-1.812-.863-.243-.089-.42-.134-.595.134-.176.267-.68 1.157-.833 1.334-.153.178-.307.201-.573.067-.266-.134-1.127-.415-2.147-1.326-.79-.705-1.327-1.579-1.482-1.847-.154-.267-.017-.411.117-.544.121-.119.266-.312.4-.467.135-.156.179-.267.269-.446.09-.178.045-.334-.022-.467-.067-.134-.595-1.436-.815-1.97-.216-.52-.469-.44-.645-.448-.166-.008-.356-.01-.547-.01-.191 0-.503.072-.767.356-.263.284-1.006.984-1.006 2.399 0 1.415 1.028 2.785 1.171 2.977.144.192 2.023 3.09 4.901 4.331.685.295 1.22.472 1.637.605.689.219 1.316.188 1.813.114.553-.082 1.57-.642 1.791-1.261.221-.619.221-1.151.154-1.261-.067-.109-.244-.199-.51-.332z" />
  </svg>
);

const renderDetails = (text: string) => {
  if (text.includes("WhatsApp")) {
    const parts = text.split("WhatsApp");
    return (
      <>
        {parts[0]}
        <span className="inline-flex items-center gap-0.5 text-[#25D366] font-semibold not-italic">
          <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" />
          WhatsApp
        </span>
        {parts[1]}
      </>
    );
  }
  return text;
};

const Programmes: React.FC = () => {
  const [filter, setFilter] = useState("ALL");

  const categories = [
    { label: "All Paths", value: "ALL" },
    { label: "Academies", value: "ACADEMY" },
    { label: "Community Circles", value: "COMMUNITY" },
    { label: "Immersive Events", value: "EVENTS" }
  ];

  const programmes = [
    {
      category: "ACADEMY",
      name: "HER Identity Academy",
      duration: "8 Weeks · Online Cohort",
      desc: "A foundational personal development incubator. Connect deeply with your values, unpack inherited narratives, and structure a custom blueprint for identity-rooted self-worth.",
      outcomes: [
        "Create a personal Life Mission Alignment Document",
        "Identify and break active imposter syndrome loops",
        "Connect with a custom matched peer Accountability Circle",
        "8 weekly live facilitator-led workshops"
      ],
      details: "Delivered via Google Classroom + private WhatsApp Cohort + weekly Google Meet syncs.",
      accentClass: "border-t-brand-gold",
      badgeColor: "bg-brand-gold/15 text-brand-gold border-brand-gold/30",
      btnClass: "bg-brand-gold text-brand-dark hover:bg-brand-gold/90"
    },
    {
      category: "ACADEMY",
      name: "HER Money Academy",
      duration: "8 Weeks · Online Cohort",
      desc: "An advanced wealth stewardship framework for professional women. Demystify independent investment models, rebuild money mindsets, and plan paths to autonomous financial security.",
      outcomes: [
        "Formulate a complete 3-year personal Wealth Plan",
        "Master index funds, stocks, and real estate indicators",
        "Implement systemic budgeting and savings automation",
        "Learn key tax planning and asset protection basics"
      ],
      details: "Interactive worksheets, templates, spreadsheet modeling, and direct financial coach reviews.",
      accentClass: "border-t-brand-gold",
      badgeColor: "bg-brand-gold/15 text-brand-gold border-brand-gold/30",
      btnClass: "bg-brand-gold text-brand-dark hover:bg-brand-gold/90"
    },
    {
      category: "ACADEMY",
      name: "HER Lead Academy",
      duration: "8 Weeks · Online Cohort",
      desc: "An intensive executive presence and self-leadership course. Master boundaries, public communication models, public presentation, and team sovereignty principles to step into leadership.",
      outcomes: [
        "Craft a high-value Personal Brand Statement and profile",
        "Develop frameworks for setting unbreakable boundaries",
        "Learn public speaking and boardroom narrative design",
        "Participate in mock executive negotiation circles"
      ],
      details: "Case studies, live presentations, Peer Review Boards, and corporate alignment blueprints.",
      accentClass: "border-t-brand-gold",
      badgeColor: "bg-brand-gold/15 text-brand-gold border-brand-gold/30",
      btnClass: "bg-brand-gold text-brand-dark hover:bg-brand-gold/90"
    },
    {
      category: "COMMUNITY",
      name: "Mentorship Circles",
      duration: "Ongoing · Monthly Syncs",
      desc: "Peer accountability groups matched with elite women leaders in corporate, technology, creative, and social impact spaces. Designed to keep you growing beyond your cohort.",
      outcomes: [
        "Direct access to monthly group coaching roundtables",
        "Matched with a peer accountability partner in your field",
        "Access to job opportunities, grants, and partner boards",
        "Ongoing networking in specialized cohort channels"
      ],
      details: "WhatsApp-based sub-channels, monthly live Zoom roundtables, and quarterly networking mixers.",
      accentClass: "border-t-brand-lavender",
      badgeColor: "bg-brand-lavender/15 text-brand-lavender border-brand-lavender/30",
      btnClass: "bg-brand-lavender text-brand-deep hover:bg-brand-lavender/90"
    },
    {
      category: "EVENTS",
      name: "Immersive retreats",
      duration: "3 Days · Bi-annual Retreat",
      desc: "Transformative physical gathering of cohort members. 3 days of guided reflection, executive coaching, vision mapping, and deep connection in scenic, quiet spaces.",
      outcomes: [
        "In-person workshops led by certified facilitators",
        "Structured times of silence, journal review, and rest",
        "Graduation ceremony for active academy cohorts",
        "Deep, lifelong bonding exercises with your sisterhood"
      ],
      details: "Hosted in exclusive nature reserves, including meals, study materials, and accommodations.",
      accentClass: "border-t-brand-plum",
      badgeColor: "bg-brand-plum/20 text-brand-gold border-brand-gold/20",
      btnClass: "bg-brand-plum text-brand-text-primary hover:bg-brand-dark"
    }
  ];

  const filtered = filter === "ALL" ? programmes : programmes.filter(p => p.category === filter);

  return (
    <div className="relative font-sans">
      <section className="bg-brand-deep text-brand-text-primary py-24 sm:py-32 relative text-center border-b border-brand-border-dark">
        <div className="grain-overlay"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-6">
          <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-semibold font-label">
            OUR OFFERINGS
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-brand-text-primary">
            Every Woman Has <span className="italic text-brand-gold font-semibold">Her</span> Path
          </h1>
          <p className="text-brand-text-muted text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Select a pathway tailored for your current life shift: structured academic cohorts, peer circles, or in-person retreats.
          </p>
          <div className="pt-8 flex flex-wrap justify-center gap-3">
            {categories.map(c => (
              <button
                key={c.value}
                onClick={() => setFilter(c.value)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold font-label uppercase tracking-widest transition-all ${
                  filter === c.value
                    ? "bg-brand-gold text-brand-dark shadow-md"
                    : "bg-brand-plum border border-brand-gold/20 text-brand-gold hover:bg-brand-gold/10"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {filtered.map((h, f) => (
              <motion.div
                key={f}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`bg-white rounded-2xl p-8 sm:p-10 border border-brand-gold/10 border-t-[5px] ${h.accentClass} shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between`}
              >
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className={`text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full border ${h.badgeColor} font-label uppercase`}>
                      {h.category}
                    </span>
                    <span className="text-xs font-semibold text-brand-text-muted font-label uppercase tracking-widest">
                      {h.duration}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold font-serif text-brand-dark">
                      {h.name}
                    </h3>
                    <p className="text-sm text-brand-text-dark/70 leading-relaxed font-light">
                      {h.desc}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold text-brand-dark font-label uppercase tracking-wider">
                      What You Will Gain:
                    </h4>
                    {h.outcomes.map((p, g) => (
                      <div key={g} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <div className="w-4.5 h-4.5 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mt-0.5 shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-brand-text-dark/80 font-light leading-snug">{p}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-brand-text-muted italic leading-relaxed pt-2">
                    * {renderDetails(h.details)}
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-brand-gold/10 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://forms.gle/JkyMF93L6a6CocQQ6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-3 px-6 rounded-md font-label uppercase tracking-wider text-xs font-bold text-center transition-all ${h.btnClass}`}
                  >
                    Apply Now
                  </a>
                  <a
                    href="#contact"
                    className="flex-1 py-3 px-6 rounded-md border border-brand-gold/30 hover:bg-brand-gold/10 text-brand-gold font-label uppercase tracking-wider text-xs font-bold text-center transition-all"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-deep text-brand-text-primary py-24 border-t border-brand-border-dark">
        <div className="grain-overlay"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-serif text-brand-text-primary">
            Not sure which path is right for you?
          </h2>
          <p className="text-sm sm:text-base text-brand-text-muted font-light max-w-lg mx-auto">
            Schedule a complimentary 15-minute alignment call with our cohort facilitator to find the track matching your season.
          </p>
          <div className="pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark hover:bg-brand-gold/90 transition-all font-label uppercase tracking-widest text-xs font-semibold px-8 py-4 rounded-md shadow-lg transform hover:-translate-y-0.5"
            >
              Talk to us <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programmes;
