import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { lazy, Suspense } from 'react';

const About = lazy(() => import('./components/About'));
const Procedures = lazy(() => import('./components/Procedures'));
const Education = lazy(() => import('./components/Education'));
const Publications = lazy(() => import('./components/Publications'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// WhatsApp number — same as in Contact.jsx (country code + number, digits only)
const WHATSAPP_NUMBER = '919876543210';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <main>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-primary font-bold">Loading...</div>}>
          <About />
          <Procedures />
          <Education />
          <Publications />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Dr. Radadiya, I would like to enquire about your services.')}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
      >
        {/* Tooltip label */}
        <span className="hidden group-hover:block bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Chat with us
        </span>
        {/* Green WhatsApp circle */}
        <div className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110">
          {/* WhatsApp SVG icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8" fill="white">
            <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.67 4.86 1.94 6.96L2 30l7.26-1.9A13.93 13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.5 11.5 0 01-5.9-1.62l-.42-.25-4.31 1.13 1.15-4.2-.28-.44A11.5 11.5 0 1116 27.5zm6.34-8.62c-.35-.17-2.06-1.01-2.38-1.13-.32-.12-.55-.17-.79.17-.23.35-.91 1.13-1.11 1.36-.21.24-.41.26-.76.09-.35-.17-1.47-.54-2.8-1.72a10.48 10.48 0 01-1.94-2.4c-.2-.35-.02-.54.15-.71.16-.16.35-.41.53-.62.17-.21.23-.35.35-.59.12-.23.06-.44-.03-.62-.09-.17-.79-1.9-1.08-2.6-.28-.68-.57-.59-.79-.6h-.67c-.23 0-.62.09-.95.44-.32.35-1.23 1.2-1.23 2.94s1.26 3.41 1.43 3.64c.18.24 2.48 3.78 6 5.3.84.36 1.5.58 2.01.74.84.27 1.61.23 2.22.14.68-.1 2.06-.84 2.35-1.65.29-.82.29-1.52.2-1.66-.08-.15-.3-.24-.64-.4z" />
          </svg>
        </div>
      </a>
    </div>
  );
}

export default App;
