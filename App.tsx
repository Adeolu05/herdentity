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
  const [currentRoute, setCurrentRoute] = useState<string>(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      setCurrentRoute(hash);
      
      // Auto scroll to top on route change
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Call once to handle initial mount with a hash
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentRoute) {
      case '#home':
        return <Home />;
      case '#about':
        return <AboutPage />;
      case '#framework':
        return <FrameworkPage />;
      case '#programmes':
        return <ProgrammesPage />;
      case '#resources':
        return <ResourcesPage />;
      case '#community':
        return <CommunityPage />;
      case '#stories':
        return <StoriesPage />;
      case '#contact':
        return <ContactPage />;
      default:
        // Handle anchor sub-scrolling if it's on the homepage
        if (currentRoute.startsWith('#features') || currentRoute.startsWith('#stories')) {
          return <Home />;
        }
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