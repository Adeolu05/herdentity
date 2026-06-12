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
      setCurrentRoute(window.location.pathname);
      
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