import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import AboutPage from './pages/About';
import FrameworkPage from './pages/Framework';
import ProgrammesPage from './pages/Programmes';
import ResourcesPage from './pages/Resources';
import CommunityPage from './pages/Community';
import StoriesPage from './pages/Stories';
import ContactPage from './pages/Contact';

const routeMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Herdentity | Confidence Rooted in Identity',
    description: 'Discover the Real Her. Identity-rooted confidence, real-life skills, and a supportive community helping African women thrive.'
  },
  '/home': {
    title: 'Herdentity | Confidence Rooted in Identity',
    description: 'Discover the Real Her. Identity-rooted confidence, real-life skills, and a supportive community helping African women thrive.'
  },
  '/about': {
    title: 'About Herdentity | Our Mission, Vision & Team',
    description: 'Learn about Herdentity, founded by Dami Olatunji. Our mission is to equip women with identity-rooted confidence and real-life skills.'
  },
  '/framework': {
    title: 'The HER Framework | Herdentity\'s Six Core Pillars',
    description: 'Explore the six core pillars of the HER Framework: Emotional Intelligence, Self-Leadership, Financial Confidence, and more.'
  },
  '/programmes': {
    title: 'Empowerment Programmes | Herdentity Academies & Retreats',
    description: 'Apply for the HER Identity Academy, HER Money Academy, HER Lead Academy, Mentorship Circles, and Annual Retreats.'
  },
  '/resources': {
    title: 'Books & Resources | Self-Discovery Tools by Herdentity',
    description: 'Access our curated library of growth workbooks, identity worksheets, and personal development digital guides.'
  },
  '/community': {
    title: 'Join the Herdentity Community | Safe Space for African Women',
    description: 'Connect with a supportive global sisterhood. Join our WhatsApp and Telegram communities for accountability and events.'
  },
  '/stories': {
    title: 'Success Stories & Testimonials | Herdentity Women Impact',
    description: 'Read transformational stories and inspiring testimonials from women who have graduated from our academies and retreats.'
  },
  '/contact': {
    title: 'Contact Herdentity | Partner, Inquire or Apply',
    description: 'Get in touch with Herdentity for partnerships, media inquiries, or general questions. Access our cohort intake forms.'
  }
};

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>(window.location.pathname);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (
        anchor &&
        anchor.href &&
        anchor.getAttribute('href')?.startsWith('/') &&
        !anchor.getAttribute('href')?.startsWith('//') &&
        anchor.target !== '_blank'
      ) {
        e.preventDefault();
        const href = anchor.getAttribute('href') || '/';
        
        if (window.location.pathname !== href) {
          history.pushState(null, '', href);
          window.dispatchEvent(new Event('pushstate'));
        }
      }
    };

    const handleLocationChange = () => {
      const path = window.location.pathname;
      setCurrentRoute(path);
      
      // Dynamic SEO & Metadata updates
      const meta = routeMetadata[path] || routeMetadata['/'];
      document.title = meta.title;

      // Meta description tag
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', meta.description);

      // Canonical link
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', `https://www.herdentity.com${path}`);

      // Open Graph Tags
      const setMetaProperty = (property: string, content: string) => {
        let el = document.querySelector(`meta[property="${property}"]`);
        if (!el) {
          el = document.createElement('meta');
          el.setAttribute('property', property);
          document.head.appendChild(el);
        }
        el.setAttribute('content', content);
      };

      setMetaProperty('og:title', meta.title);
      setMetaProperty('og:description', meta.description);
      setMetaProperty('og:url', `https://www.herdentity.com${path}`);

      // Twitter Tags
      const setMetaName = (name: string, content: string) => {
        let el = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
        if (!el) {
          el = document.createElement('meta');
          el.setAttribute('name', name);
          document.head.appendChild(el);
        }
        el.setAttribute('content', content);
      };

      setMetaName('twitter:title', meta.title);
      setMetaName('twitter:description', meta.description);
      setMetaName('twitter:url', `https://www.herdentity.com${path}`);
      
      // Auto scroll to top on route change
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pushstate', handleLocationChange);
    document.addEventListener('click', handleAnchorClick);
    
    // Initial mount trigger
    handleLocationChange();

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pushstate', handleLocationChange);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  const renderPage = () => {
    switch (currentRoute) {
      case '/':
      case '/home':
        return <Home />;
      case '/about':
        return <AboutPage />;
      case '/framework':
        return <FrameworkPage />;
      case '/programmes':
        return <ProgrammesPage />;
      case '/resources':
        return <ResourcesPage />;
      case '/community':
        return <CommunityPage />;
      case '/stories':
        return <StoriesPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-light text-brand-text-dark selection:bg-brand-gold selection:text-brand-dark overflow-x-hidden font-sans">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;