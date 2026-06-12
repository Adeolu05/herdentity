import React, { useState } from 'react';
import { Check, Send, Mail, MessageCircle, MapPin, Instagram, Facebook, ArrowRight } from 'lucide-react';

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

const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'register' | 'inquiry'>('register');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="pt-24 bg-brand-light min-h-screen text-brand-text-dark font-sans">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-brand-gold/10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-xl"></div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-brand-dark mb-6">
              Let's <span className="italic text-brand-gold font-semibold">Connect</span>
            </h2>

            {/* Tabs */}
            <div className="flex border-b border-brand-gold/10 mb-8 gap-4">
              <button
                onClick={() => setActiveTab('register')}
                className={`pb-4 px-2 font-label text-xs uppercase tracking-widest font-bold transition-all relative ${
                  activeTab === 'register' ? 'text-brand-gold border-b-2 border-brand-gold' : 'text-brand-text-muted hover:text-brand-dark'
                }`}
              >
                Cohort Application
              </button>
              <button
                onClick={() => setActiveTab('inquiry')}
                className={`pb-4 px-2 font-label text-xs uppercase tracking-widest font-bold transition-all relative ${
                  activeTab === 'inquiry' ? 'text-brand-gold border-b-2 border-brand-gold' : 'text-brand-text-muted hover:text-brand-dark'
                }`}
              >
                General Inquiry
              </button>
            </div>

            {activeTab === 'register' ? (
              <div className="space-y-8 animate-fade-in-up py-4 relative z-10">
                <div className="p-6 bg-brand-light/30 border border-brand-gold/10 rounded-2xl space-y-4">
                  <h3 className="text-xl font-serif text-brand-dark font-bold">
                    Join the Herdentity Movement
                  </h3>
                  <p className="text-sm text-brand-text-dark/70 font-light leading-relaxed">
                    To apply for our upcoming cohorts (HER Identity Academy, HER Money Academy, or HER Lead Academy) or to request matched peer Accountability Circles, please submit your information through our official intake application form.
                  </p>
                  <p className="text-xs text-brand-text-muted leading-relaxed font-light">
                    This detailed questionnaire helps our cohort coordinators review your career goals, wealth stewardship interests, and match you with the right circle and facilitators.
                  </p>
                </div>
                <a
                  href="https://forms.gle/JkyMF93L6a6CocQQ6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-gold text-brand-dark hover:bg-brand-gold/90 transition-all py-4 rounded-md font-label uppercase tracking-widest text-xs font-bold flex items-center justify-center gap-2 shadow-md transform hover:-translate-y-0.5"
                >
                  Open Registration Form
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ) : submitted ? (
              <div className="text-center py-12 space-y-6 animate-fade-in-up">
                <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mx-auto text-brand-gold">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif italic text-brand-dark font-bold">
                  Message Sent, {formData.fullName}!
                </h3>
                <p className="text-brand-text-dark/60 text-sm max-w-sm mx-auto font-light leading-relaxed">
                  Thank you for reaching out. Our cohort team has received your message regarding <strong>{formData.subject}</strong> and will respond to you at <strong>{formData.email}</strong> within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: "", email: "", subject: "General Inquiry", message: "" });
                    }}
                    className="text-xs font-bold text-brand-gold hover:underline font-label uppercase tracking-widest"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2 font-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-md border border-brand-gold/20 focus:outline-none focus:border-brand-gold text-sm text-brand-text-dark bg-brand-light/20 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2 font-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-md border border-brand-gold/20 focus:outline-none focus:border-brand-gold text-sm text-brand-text-dark bg-brand-light/20 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2 font-label">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-brand-gold/20 focus:outline-none focus:border-brand-gold text-sm text-brand-text-dark bg-brand-light/20 focus:bg-white transition-colors"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Programme Info">Programme Info</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Media">Media</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2 font-label">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can support you..."
                    className="w-full px-4 py-3 rounded-md border border-brand-gold/20 focus:outline-none focus:border-brand-gold text-sm text-brand-text-dark bg-brand-light/20 focus:bg-white transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-brand-gold text-brand-dark hover:bg-brand-gold/90 transition-all py-4 rounded-md font-label uppercase tracking-widest text-xs font-bold flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-8 lg:pl-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-gold/10 shadow-sm flex items-start gap-4">
              <img
                src="/ceo_portrait.jpg"
                alt="Dami Olatunji"
                className="w-[120px] h-[120px] rounded-full object-cover border-2 border-brand-gold/30 shrink-0"
              />
              <div className="space-y-2">
                <span className="text-brand-gold font-serif italic text-sm font-semibold">
                  A message from Dami Olatunji
                </span>
                <p className="text-xs text-brand-text-dark/60 italic leading-relaxed font-light">
                  "I am thrilled you are here. Whether you have questions about our academies, partnership opportunities, or just want to share your story, my team and I are ready to support your journey."
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark font-label">
                Direct Connection
              </h4>
              <div className="space-y-3 text-sm">
                <a
                  href="mailto:hello@herdentity.com"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-brand-gold/5 hover:border-brand-gold/20 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-light flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-brand-text-muted font-label uppercase">Email Us</span>
                    <p className="font-bold text-brand-dark mt-0.5">hello@herdentity.com</p>
                  </div>
                </a>

                <a
                  href="https://chat.whatsapp.com/DUL8d6zcqGyAe6qftqVZkN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-brand-gold/5 hover:border-brand-gold/20 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-brand-dark transition-all">
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-brand-text-muted font-label uppercase">WhatsApp Link</span>
                    <p className="font-bold text-brand-dark mt-0.5">Chat Directly</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark font-label">
                Global Presence
              </h4>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-brand-dark">Serving women across Africa and beyond</p>
                  <p className="text-xs text-brand-text-muted mt-0.5 leading-relaxed">
                    Headquartered in Lagos, Nigeria, with accountability circles active in 8 countries.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex gap-4">
                {[
                  { icon: <Instagram className="w-4 h-4" />, url: "https://www.instagram.com/herdentity" },
                  { icon: <Facebook className="w-4 h-4" />, url: "https://www.facebook.com/profile.php?id=61585987056794" }
                ].map((soc, idx) => (
                  <a
                    key={idx}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white border border-brand-gold/20 flex items-center justify-center text-brand-gold hover:text-brand-dark hover:bg-brand-gold transition-all duration-300"
                  >
                    {soc.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
