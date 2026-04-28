import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from '../assets/logo.png'
import handleQuoteRequest from '../utils/text';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About Us', 'Catalog', 'Testimonials'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2.5 group cursor-pointer">
          <img className="w-20 h-20" src={Logo} alt="" />
          <span className="font-heading font-bold text-xl tracking-tight text-slate-900 group-hover:text-green-600 transition-colors">
            Online Kings
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:scale-105 transition-all">
              {item}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={handleQuoteRequest} className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-600 hover:text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-base font-medium text-slate-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
          <button onClick={handleQuoteRequest} className="w-full bg-green-500 text-white font-bold py-3 rounded-lg">
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar