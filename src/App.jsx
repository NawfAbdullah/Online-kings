
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Catalog from './components/Catalog';
import Workflow from './components/Workflow';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ClientLogos from './components/ValuedCustomer';

// --- 1. GLOBAL STYLES & CONSTANTS ---

const FontStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@500;700;800&display=swap');
    
    .font-heading { font-family: 'Outfit', sans-serif; }
    .font-body { font-family: 'Inter', sans-serif; }
    
    html { scroll-behavior: smooth; }
    
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-blob {
      animation: blob 7s infinite;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: marquee 30s linear infinite;
    }
    .pause-on-hover:hover .animate-marquee {
      animation-play-state: paused;
    }
    
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

    /* Workflow Animations */
    .workflow-step {
      opacity: 0;
      transition: all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1);
    }
    .workflow-step.visible {
      opacity: 1;
      transform: translateX(0) !important;
    }
    
    /* Progress Line Glow */
    .progress-glow {
      box-shadow: 0 0 15px 2px rgba(34, 197, 94, 0.6);
    }

    @media only screen and (max-width:600px){

    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }

    .animate-marquee {
      animation: marquee 15s linear infinite;
    }
    }

  `}</style>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white font-body text-slate-900 selection:bg-green-100 selection:text-green-900">
      <FontStyles />
      <Navbar />
      <Hero />
      <ClientLogos />
      <About />
      <Workflow />
      <Catalog />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;