import React, { useState } from 'react';
import { BookOpen, Download, ChevronDown, ChevronUp } from 'lucide-react';

interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  coverBg: string;
  takeaway: string;
  lessons: string[];
  link: string;
}

const BookItem: React.FC<{ book: Book }> = ({ book }) => {
  const [showLessons, setShowLessons] = useState(false);

  return (
    <div className="bg-white rounded-2xl p-6 border border-brand-gold/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <div className={`aspect-[3/4] rounded-lg ${book.coverBg} border border-brand-gold/30 p-6 flex flex-col justify-between shadow-inner mb-6 relative overflow-hidden group`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10"></div>
          <div className="absolute left-2 top-0 bottom-0 w-[4px] bg-black/10 z-10"></div>
          <div className="text-[10px] font-bold text-brand-gold/60 font-label uppercase tracking-widest relative z-20">
            Herdentity Library
          </div>
          <div className="my-auto relative z-20">
            <h4 className="text-xl font-serif text-brand-text-primary font-bold leading-tight group-hover:text-brand-gold transition-colors">
              {book.title}
            </h4>
            <div className="w-8 h-[2px] bg-brand-gold/40 mt-3"></div>
          </div>
          <div className="text-xs font-semibold text-brand-text-muted font-label uppercase tracking-widest relative z-20">
            {book.author}
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-[10px] font-bold tracking-widest font-label uppercase text-brand-gold">
            {book.category}
          </div>
          <h3 className="text-lg font-medium text-brand-dark leading-tight">
            {book.title}
          </h3>
          <p className="text-xs text-brand-text-muted font-label uppercase tracking-wider">
            {book.author}
          </p>
          <p className="text-sm text-brand-text-dark/70 font-light leading-relaxed pt-1">
            {book.takeaway}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-brand-gold/10">
        <button
          onClick={() => setShowLessons(!showLessons)}
          className="w-full flex items-center justify-between text-xs font-bold text-brand-dark font-label uppercase tracking-wider hover:text-brand-gold transition-colors"
        >
          <span>Key Lessons</span>
          {showLessons ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showLessons && (
          <div className="mt-3 space-y-2 pt-2 border-t border-brand-gold/5">
            {book.lessons.map((lesson, idx) => (
              <div key={idx} className="flex gap-2 text-xs font-light text-brand-text-dark/80 leading-relaxed">
                <span className="text-brand-gold font-bold">•</span>
                <span>{lesson}</span>
              </div>
            ))}
            <div className="pt-2">
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-gold hover:underline text-[10px] font-bold font-label uppercase tracking-wider"
              >
                View on Amazon
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Resources: React.FC = () => {
  const [filter, setFilter] = useState("ALL");

  const categories = [
    { label: "All Books", value: "ALL" },
    { label: "Identity", value: "IDENTITY & SELF-WORTH" },
    { label: "Leadership", value: "LEADERSHIP" },
    { label: "Finance", value: "FINANCE" },
    { label: "Emotional Intelligence", value: "EMOTIONAL INTELLIGENCE" },
    { label: "Career Growth", value: "CAREER GROWTH" },
    { label: "Purpose", value: "FAITH & PURPOSE" }
  ];

  const books: Book[] = [
    {
      id: 1,
      title: "The Gifts of Imperfection",
      author: "Brené Brown",
      category: "IDENTITY & SELF-WORTH",
      coverBg: "bg-brand-plum",
      takeaway: "An empowering guide to letting go of who you are supposed to be and embracing who you are. Crucial for the Reveal phase.",
      lessons: [
        "Authenticity is a daily practice that requires letting go of perfectionism.",
        "Cultivating resilient self-worth screens out comparison loops.",
        "Crucial for recognizing shame and embracing your true layout."
      ],
      link: "https://www.amazon.com/Gifts-Imperfection-Letting-Supposed-Embrace/dp/159285849X"
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      category: "LEADERSHIP",
      coverBg: "bg-brand-deep",
      takeaway: "The definitive guide to building consistent micro-actions. Essential for self-leadership and systemic daily discipline.",
      lessons: [
        "Focus on system development rather than static goals.",
        "Small changes of 1% accumulate into massive transformation over time.",
        "Design your environment to make good behaviors friction-free."
      ],
      link: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299"
    },
    {
      id: 3,
      title: "The Smart Money Woman",
      author: "Arese Ugwu",
      category: "FINANCE",
      coverBg: "bg-brand-plum",
      takeaway: "An engaging, culturally tailored narrative mapping out practical financial planning for modern African women.",
      lessons: [
        "Build emergency reserve buffers before embarking on investments.",
        "Track cashflows systemically to screen out leakage channels.",
        "Understand real asset structures: invest in assets that yield return."
      ],
      link: "https://www.amazon.com/Smart-Money-Woman-Financial-African/dp/153965902X"
    },
    {
      id: 4,
      title: "Emotional Intelligence 2.0",
      author: "Travis Bradberry",
      category: "EMOTIONAL INTELLIGENCE",
      coverBg: "bg-brand-deep",
      takeaway: "A skills-centric manual detailing action strategies to improve self-awareness, social awareness, and relationship management.",
      lessons: [
        "Track physiological responses to triggers to regulate emotional response.",
        "Listen actively without formulating immediate arguments.",
        "Establish proactive habits to manage stress before depletion."
      ],
      link: "https://www.amazon.com/Emotional-Intelligence-2-0-Travis-Bradberry/dp/0974320625"
    },
    {
      id: 5,
      title: "Pivot",
      author: "Jenny Blake",
      category: "CAREER GROWTH",
      coverBg: "bg-brand-plum",
      takeaway: "A blueprint for managing professional transitions, career path navigation, and continuous future-readiness.",
      lessons: [
        "Double down on established baseline strengths rather than fixing flaws.",
        "Run micro-experiments to validate career shifts before fully committing.",
        "Nurture professional networks systemically ahead of transition cycles."
      ],
      link: "https://www.amazon.com/Pivot-Only-Move-That-Matters/dp/1591848202"
    },
    {
      id: 6,
      title: "The Purpose Driven Life",
      author: "Rick Warren",
      category: "FAITH & PURPOSE",
      coverBg: "bg-brand-deep",
      takeaway: "A classic blueprint connecting individual identity to divine layout, purpose, and legacy planning.",
      lessons: [
        "Align daily schedules with your designed values.",
        "Focus on community contribution rather than personal ambition.",
        "Understand life transitions as deliberate design pathways."
      ],
      link: "https://www.amazon.com/Purpose-Driven-Life-What-Earth/dp/031033750X"
    }
  ];

  const filtered = filter === "ALL" ? books : books.filter(b => b.category === filter);

  return (
    <div className="relative font-sans">
      <section className="bg-brand-light text-brand-text-dark py-24 sm:py-32 relative text-center">
        <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-6">
          <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-semibold font-label">
            RESOURCES
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold">
            The Herdentity <span className="italic text-brand-gold font-semibold">Library</span>
          </h1>
          <p className="text-brand-text-dark/70 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Curated books and original resources to grow every dimension of who you are.
          </p>
          <div className="pt-8 flex flex-wrap justify-center gap-3">
            {categories.map(c => (
              <button
                key={c.value}
                onClick={() => setFilter(c.value)}
                className={`px-4 py-2 rounded-full text-[10px] font-bold font-label uppercase tracking-widest transition-all ${
                  filter === c.value
                    ? "bg-brand-gold text-brand-dark shadow-md"
                    : "bg-white border border-brand-gold/20 text-brand-gold hover:bg-brand-gold/10"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(book => (
              <BookItem key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-plum text-brand-text-primary py-24 sm:py-32 relative overflow-hidden">
        <div className="grain-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl mb-16 space-y-4 text-left">
            <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-semibold font-label">
              HERDENTITY ORIGINALS
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif">
              Resources We Built <span className="italic text-brand-gold font-semibold">For You</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Identity Mapping Guide",
                format: "PDF WORKBOOK",
                desc: "A 40-page interactive workbook with structured exercises to help you map values, address limiting beliefs, and draft your mission alignment document.",
                action: "Download Free"
              },
              {
                title: "The Financial Confidence Journal",
                format: "PRINT JOURNAL",
                desc: "A printable monthly financial accountability planner to track cash flows, automate savings targets, and review wealth allocations.",
                action: "Get Access"
              },
              {
                title: "Sovereign Boundary Worksheet",
                format: "PDF WORKSHEET",
                desc: "A tactical cheat sheet with scripted scenarios to master communication, set boundaries, and protect your schedule.",
                action: "Download Free"
              }
            ].map((h, f) => (
              <div key={f} className="bg-brand-deep/40 border border-brand-border-dark p-8 rounded-2xl flex flex-col justify-between hover:shadow-lg transition-shadow min-h-[320px]">
                <div className="space-y-4">
                  <div className="w-16 h-20 rounded bg-brand-plum border border-brand-border-gold flex items-center justify-center text-brand-gold mb-6 relative">
                    <div className="absolute left-1 top-0 bottom-0 w-[2px] bg-black/10"></div>
                    <BookOpen className="w-6 h-6 opacity-60" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-brand-lavender font-label uppercase">
                    {h.format}
                  </span>
                  <h3 className="text-lg font-bold font-serif text-brand-text-primary leading-snug">
                    {h.title}
                  </h3>
                  <p className="text-xs text-brand-text-muted leading-relaxed font-light">
                    {h.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-brand-gold/10">
                  <button
                    onClick={() => alert("Download starting in mock simulation...")}
                    className="w-full bg-brand-gold text-brand-dark hover:bg-brand-gold/90 transition-all py-3 rounded-md font-label uppercase tracking-widest text-xs font-bold flex items-center justify-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5" />
                    {h.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
