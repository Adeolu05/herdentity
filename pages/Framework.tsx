import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const Framework: React.FC = () => {
  const pillars = [
    {
      num: "01",
      letter: "R",
      word: "Reveal",
      tagline: "Uncover your true identity and shed what was never yours.",
      desc: "Before you can build, you must strip away. Most women carry heavy expectations, comparison habits, and limiting beliefs that are not theirs. The Reveal phase is a deep look inward. It is about understanding your unique layout, reclaiming your core self-worth, and establishing a baseline of identity-rooted confidence that cannot be shaken.",
      gains: [
        "Uncover your core personal values and alignment indicators",
        "Identify and dismantle negative self-talk and limiting mindsets",
        "Reclaim your intrinsic self-worth outside of productivity",
        "Define your personal life mission and signature strengths"
      ],
      progName: "HER Identity Academy",
      bgClass: "bg-brand-deep text-brand-text-primary border-b border-brand-border-dark",
      letterColor: "text-brand-gold/10"
    },
    {
      num: "02",
      letter: "E",
      word: "Equip",
      tagline: "Build the practical skills your life actually needs.",
      desc: "Confidence alone is not enough. You need the competence to back it up. The Equip phase introduces critical real-life skills that are rarely taught in schools. From advanced financial stewardship and wealth building to self-leadership, boundary-setting, and emotional intelligence, we provide the blueprints for real-world execution.",
      gains: [
        "Build practical budgeting, investing, and asset blueprints",
        "Develop high emotional intelligence and stress navigation loops",
        "Master the art of assertive communication and clear boundary setting",
        "Design personal habits and focus frameworks for consistent growth"
      ],
      progName: "HER Money Academy",
      bgClass: "bg-brand-light text-brand-text-dark",
      letterColor: "text-brand-gold/10"
    },
    {
      num: "03",
      letter: "A",
      word: "Activate",
      tagline: "Step into purpose with tools, support, and clarity.",
      desc: "Equipping is preparation; activation is motion. The Activate phase is about stepping out of comfort zones and taking action. Supported by structural mentorship and accountability circles, you begin testing your limits, launching projects, navigating career pivots, and aligning your daily actions with your purpose.",
      gains: [
        "Create a strategic life roadmap with clear, actionable milestones",
        "Align with a dedicated peer Circle to ensure continuous motivation",
        "Pitch and refine business ideas or career advancement campaigns",
        "Bridge the gap between theoretical knowledge and real life execution"
      ],
      progName: "Mentorship Circles",
      bgClass: "bg-brand-plum text-brand-text-primary border-y border-brand-border-dark",
      letterColor: "text-brand-lavender/10"
    },
    {
      num: "04",
      letter: "L",
      word: "Lead",
      tagline: "Take your place as a woman of impact in your world.",
      desc: "Leadership is the natural overflow of a woman who is revealed, equipped, and activated. This final phase is about shifting focus from personal growth to collective legacy. Whether in corporate boardrooms, entrepreneurial ventures, or local communities, you take your place to build, mentor, and shape generations.",
      gains: [
        "Hone your executive presence, public speaking, and narrative design",
        "Develop servant-leadership principles for building healthy teams",
        "Establish legacy projects that positively influence local communities",
        "Step into paid advisory roles, governance, and mentorship circles"
      ],
      progName: "HER Lead Academy",
      bgClass: "bg-brand-light text-brand-text-dark",
      letterColor: "text-brand-gold/10"
    }
  ];

  return (
    <div className="relative font-sans">
      <section className="bg-brand-deep text-brand-text-primary py-24 sm:py-32 relative text-center border-b border-brand-border-dark">
        <div className="grain-overlay"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-6">
          <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-semibold font-label">
            THE FOUNDATION
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-brand-text-primary">
            The Real <span className="italic text-brand-gold font-semibold">HER</span> Framework
          </h1>
          <p className="text-brand-text-muted text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto">
            Four pillars. One transformation. A proven path from searching to thriving.
          </p>
        </div>
      </section>

      {pillars.map((s, o) => (
        <section key={o} className={`py-24 sm:py-32 relative overflow-hidden ${s.bgClass}`}>
          {s.bgClass.includes("plum") || s.bgClass.includes("dark") || s.bgClass.includes("deep") ? (
            <div className="grain-overlay"></div>
          ) : null}
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 space-y-6 relative">
                <div className={`absolute -left-10 -top-24 text-[280px] font-serif font-bold ${s.letterColor} pointer-events-none select-none -z-10`}>
                  {s.letter}
                </div>
                <div className="space-y-2 relative z-10">
                  <span className="text-brand-gold font-label uppercase tracking-widest text-xs font-semibold">
                    PILLAR {s.num}
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">
                    {s.letter} — {s.word}
                  </h2>
                  <p className="text-brand-gold text-sm sm:text-base font-medium font-label uppercase tracking-wider">
                    {s.tagline}
                  </p>
                </div>
                <p className="text-sm sm:text-base leading-relaxed font-light opacity-80 max-w-2xl relative z-10">
                  {s.desc}
                </p>
                <div className="space-y-3 relative z-10 pt-4">
                  {s.gains.map((u, d) => (
                    <div key={d} className="flex items-start gap-3 text-xs sm:text-sm">
                      <div className="w-5 h-5 rounded-full bg-brand-gold/15 flex items-center justify-center text-brand-gold shrink-0 mt-0.5 border border-brand-gold/20">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="opacity-95 leading-normal">{u}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6 relative z-10">
                  <a
                    href="/programmes"
                    className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold/80 transition-colors text-sm font-label uppercase tracking-widest font-semibold"
                  >
                    Explore {s.progName} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="hidden lg:col-span-5 lg:flex justify-center">
                <div className="w-72 h-72 rounded-3xl border border-brand-border-gold bg-brand-deep/20 backdrop-blur-sm flex items-center justify-center shadow-inner relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/5 to-transparent"></div>
                  <div className="text-[120px] font-serif font-bold text-brand-gold/30">
                    {s.letter}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-brand-deep text-brand-text-primary py-24 sm:py-32 relative text-center">
        <div className="grain-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-semibold font-label">
              IN SUMMARY
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-brand-text-primary">
              The Path to Sisterhood and Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {pillars.map((s, o) => (
              <div key={o} className="bg-brand-plum border border-brand-border-dark p-8 rounded-2xl text-left flex gap-4">
                <div className="text-3xl font-serif text-brand-gold font-bold">{s.letter}</div>
                <div>
                  <h4 className="text-lg font-bold font-label uppercase tracking-wider text-brand-text-primary mb-1">
                    {s.word}
                  </h4>
                  <p className="text-xs text-brand-text-muted leading-relaxed font-light">
                    {s.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/programmes"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark hover:bg-brand-gold/90 transition-all font-label uppercase tracking-widest text-xs font-semibold px-8 py-4 rounded-md shadow-lg transform hover:-translate-y-0.5"
          >
            Find Your Path <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Framework;
