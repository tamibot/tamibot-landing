
import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Onboarding from './components/Onboarding';
import ScrollProgress from './components/ScrollProgress';
import WhatsAppButton from './components/WhatsAppButton';
import Loader from './components/Loader';

// Lazy Load Components
const HowItWorks = React.lazy(() => import('./components/HowItWorks'));
const Ecosystem = React.lazy(() => import('./components/Ecosystem'));
const EducationSolutions = React.lazy(() => import('./components/EducationSolutions'));
const AudienceSplit = React.lazy(() => import('./components/AudienceSplit'));
const FreeDemo = React.lazy(() => import('./components/FreeDemo'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const Footer = React.lazy(() => import('./components/Footer'));
const Dashboard = React.lazy(() => import('./app/dashboard/Dashboard'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Safety timeout: Ensure loader is removed after 2.5s max, even if assets hang
    const safetyTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    const handleLoad = () => {
      // If everything loads quickly, we still want a minimum 1.5s branding moment
      // But if it takes long, the safety timer will kill it at 2.5s
      setTimeout(() => setIsLoading(false), 1500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(safetyTimer);
    };
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-white">
      {isLoading && <Loader />}

      {/* Main Content with fade-in effect to prevent FOUC */}
      <div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <ScrollProgress />
        <Navbar />

        <main>
          <section id="hero">
            <Hero />
          </section>

          {/* 1. SPEED: "Launch in 48h" */}
          <section id="fast-launch">
            <Onboarding />
          </section>

          <Suspense fallback={<div className="h-96 flex items-center justify-center text-gray-400">Cargando contenido...</div>}>
            {/* 2. PROCESS: "How Tami Sells" (WhatsApp Mockups) */}
            <section id="process">
              <HowItWorks />
            </section>



            {/* 4. ECOSYSTEM: "All-in-One" */}
            <section id="features">
              <Ecosystem />
            </section>

            {/* 5. EXPERTISE: "We know Education" */}
            <section id="solutions">
              <EducationSolutions />
            </section>

            {/* 6. SCALE: "Designed for You" */}
            <section id="audience" className="scroll-mt-20">
              <AudienceSplit />
            </section>

            <FreeDemo />

            <section id="precios">
              <Pricing />
            </section>

            <section id="faq">
              <FAQ />
            </section>

            <section id="footer">
              <Footer />
            </section>
          </Suspense>
        </main>

        <WhatsAppButton />
      </div>
    </div>
  );
}

export default App;
