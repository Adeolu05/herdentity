import React, { useState } from 'react';
import { Play, Award, ArrowRight } from 'lucide-react';

const Stories: React.FC = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const testimonials = [
    {
      name: "Tolu Ojelabi",
      role: "Operations Manager",
      programme: "HER Lead Academy",
      quote: "The boundary management frameworks in HER Lead Academy completely restructured how I manage my team. I reclaimed 10 hours a week.",
      outcome: "Promoted to Regional Lead",
      image: "/ceo_speaking.jpg"
    },
    {
      name: "Naomi Mensah",
      role: "Retail Brand Founder",
      programme: "HER Money Academy",
      quote: "Before Herdentity, I was reinvesting everything blindly. Now I have structured asset tracking and separate entity budgets that saved my business.",
      outcome: "Expanded to 3 retail hubs",
      image: "/meetup_five.jpg"
    },
    {
      name: "Amina Yusuf",
      role: "Software Engineer",
      programme: "HER Identity Academy",
      quote: "I used to choke in technical interviews despite my knowledge. Building identity-rooted worth gave me the footing to negotiate my worth.",
      outcome: "Secured global remote role",
      image: "/ceo_portrait.jpg"
    },
    {
      name: "Zola Dlamini",
      role: "Non-Profit Founder",
      programme: "Mentorship Circles",
      quote: "Being matched with an experienced board advisor in the Circles helped us scale our grant application strategies by 150% in six months.",
      outcome: "Raised $45K in grant funds",
      image: "/ceo_pink.jpg"
    },
    {
      name: "Mariama Touré",
      role: "Creative Writer",
      programme: "HER Identity Academy",
      quote: "I shed years of community expectations that were silencing my voice. The Reveal curriculum is a surgical dismantling of comparison.",
      outcome: "Published flagship anthology",
      image: "/ceo_about.jpg"
    },
    {
      name: "Grace Kipyegon",
      role: "Finance Director",
      programme: "HER Lead Academy",
      quote: "The cohort circles held me accountable to my goal of speaking on global panels. I conquered my stage anxiety through active presentations.",
      outcome: "Keynote panelist at FinTech East",
      image: "/meetup_panelist.jpg"
    }
  ];

  return (
    <div className="relative font-sans">
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden bg-brand-deep">
        <div className="grain-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/80 via-brand-deep/85 to-brand-plum/90 z-10"></div>
        <div className="absolute inset-0 w-full h-full object-cover">
          {playVideo ? (
            <video
              className="w-full h-full object-cover"
              src="/meetup_video_1.mp4"
              controls
              autoPlay
            />
          ) : (
            <>
              <img
                src="/meetup_group.jpg"
                alt="Community Meetup"
                className="w-full h-full object-cover opacity-40"
              />
              <button
                onClick={() => setPlayVideo(true)}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center hover:scale-105 transition-transform z-20 shadow-xl"
                aria-label="Play background video"
              >
                <Play className="w-6 h-6 fill-brand-dark ml-1" />
              </button>
            </>
          )}
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-20 space-y-4">
          <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-semibold font-label">
            TRANSFORMATION
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-brand-text-primary">
            The Women Who Found <span className="italic text-brand-gold font-semibold">Her</span>
          </h1>
          <p className="text-brand-text-muted text-sm sm:text-lg max-w-md mx-auto font-light">
            Real stories. Real transformation.
          </p>
        </div>
      </section>

      <section className="bg-brand-light py-24 sm:py-32 border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-semibold font-label">
              FEATURED PROFILE
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark">
              An Editorial Narrative
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start bg-white p-8 sm:p-12 rounded-3xl border border-brand-gold/15 shadow-sm">
            <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-brand-border-gold aspect-[4/5] bg-brand-deep">
              <img
                src="/meetup_panelist.jpg"
                alt="Kelechi Nwosu"
                className="ceo-dark-filter w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="text-3xl font-serif font-bold text-brand-dark">
                  Kelechi Nwosu
                </h3>
                <p className="text-xs font-semibold font-label uppercase tracking-widest text-brand-gold mt-1">
                  Product Lead at Safaricom · <span className="text-brand-lavender">HER Lead Academy alumna</span>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-5 bg-brand-light/60 rounded-xl border border-brand-border-gold text-xs sm:text-sm">
                <div>
                  <h5 className="font-bold text-brand-dark font-label uppercase tracking-wider mb-2 text-brand-lavender">
                    Before Herdentity:
                  </h5>
                  <p className="text-brand-text-dark/60 leading-relaxed font-light">
                    "I was burnt out, constantly taking on other people's deliverables, and unable to negotiate for the promotions I earned because I felt lucky to even have a seat."
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-brand-dark font-label uppercase tracking-wider mb-2 text-brand-gold">
                    Today:
                  </h5>
                  <p className="text-brand-text-dark/70 leading-relaxed font-light">
                    "I lead a cross-functional squad of 14, negotiate my target metrics assertively, and have automated my savings blueprint, securing financial sovereignty."
                  </p>
                </div>
              </div>

              <div className="text-sm text-brand-text-dark/70 font-light leading-relaxed space-y-4">
                <p>
                  "For a long time, I operated under the assumption that if I just worked harder than everyone else, recognition would naturally follow. But working hard without a strong baseline of self-worth is a fast track to exhaustion. I was achieving, yet inside, I was constantly looking for external validation to prove that I belonged in rooms where decisions were made."
                </p>
                <p>
                  "Enrolling in the HER Lead Academy was my turning point. During the Reveal phase, my cohort mentor guided me through a hard inventory of my core values. I realized I was carrying an inherited mindset of gratitude that kept me silent. The Equip phase taught me structural communication: how to say 'no' to non-promotable work, and how to present my metrics with executive presence."
                </p>
                <p>
                  "Today, leadership for me isn't about working late. It is about personal sovereignty, boundary preservation, and sisterhood. Herdentity gave me the community that understood my ambition, and the concrete skills to claim my space without guilt."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-semibold font-label">
              THE SISTERHOOD SAYS
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-brand-dark">
              Voices of Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((u, d) => (
              <div key={d} className={`p-8 rounded-2xl border border-brand-gold/10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow min-h-[300px] ${d % 2 === 0 ? "bg-brand-light/30" : "bg-white"}`}>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={u.image}
                      alt={u.name}
                      className="w-14 h-14 rounded-full object-cover border border-brand-gold/20"
                    />
                    <div>
                      <h4 className="text-base font-bold text-brand-dark leading-tight">
                        {u.name}
                      </h4>
                      <span className="text-[10px] font-bold font-label uppercase tracking-widest text-brand-gold">
                        {u.programme}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-brand-text-dark/70 italic leading-relaxed font-light">
                    "{u.quote}"
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-brand-gold/10 flex items-center justify-between text-xs">
                  <span className="text-brand-text-muted font-label uppercase tracking-wider">
                    {u.role}
                  </span>
                  <span className="text-brand-gold font-bold font-label uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 animate-pulse" />
                    {u.outcome}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-plum text-brand-text-primary py-24 sm:py-32 relative overflow-hidden">
        <div className="grain-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-semibold font-label">
              WATCH TRANSFORMATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif">
              In Their Own Words
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Fatima Alao", role: "Media Strategist", cover: "/meetup_room.jpg" },
              { name: "Esi Boateng", role: "Hospitality Manager", cover: "/meetup_grid.jpg" },
              { name: "Naledi Radebe", role: "Lead UI Designer", cover: "/meetup_group.jpg" }
            ].map((u, d) => (
              <div key={d} className="bg-brand-deep rounded-2xl overflow-hidden border border-brand-border-gold aspect-video relative group flex items-center justify-center shadow-lg">
                <img
                  src={u.cover}
                  alt={u.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-102 transition-transform"
                />
                <button
                  onClick={() => alert("Starting mock video play...")}
                  className="w-12 h-12 rounded-full bg-brand-gold/90 hover:bg-brand-gold text-brand-dark flex items-center justify-center shadow-md relative z-10"
                  aria-label={`Play testimonial from ${u.name}`}
                >
                  <Play className="w-5 h-5 fill-brand-dark ml-0.5" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 z-10 text-left">
                  <h4 className="text-sm font-bold leading-tight">
                    {u.name}
                  </h4>
                  <p className="text-[10px] text-brand-text-muted font-label uppercase tracking-widest mt-0.5">
                    {u.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-gold text-brand-dark text-center relative">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold">
            Your Story Could Be Someone's Turning Point
          </h2>
          <p className="text-xs sm:text-sm font-label uppercase tracking-widest font-semibold max-w-md mx-auto">
            Are you a Herdentity alumna with a transformation to share? Connect with us to inspire the next generation.
          </p>
          <div className="pt-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-deep text-brand-text-primary hover:bg-brand-plum transition-all font-label uppercase tracking-widest text-xs font-bold px-8 py-4 rounded-md shadow-lg"
            >
              Share Your Story
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stories;
