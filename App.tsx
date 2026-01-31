import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import About from './components/sections/About';
import Testimonials from './components/sections/Testimonials';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;