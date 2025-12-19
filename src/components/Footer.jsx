import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Logo from '../assets/darkthemeLogo.png'
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <img src={Logo} alt="" className="w-10 h-10" />
              <span className="font-heading font-bold text-2xl text-white tracking-tight">Online Kings</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Chennai's premier printing solution for businesses. We combine speed, quality, and affordability to help your brand shine.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/share/1Bim1hQ9xb/" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
                 <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/onlinekings.in?igsh=MWthYzd0aDFhajJiZg==" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
                 <Instagram size={18} />
              </a>
              <a href="https://www.youtube.com/channel/UCFM5W7yMbbWSVhzfkY3f0cw" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
                 <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold font-heading mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#about-us" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#workflow" className="hover:text-green-400 transition-colors">Our Process</a></li>
              <li><a href="#catalog" className="hover:text-green-400 transition-colors">Product Catalog</a></li>
              <li><a href="#testimonials" className="hover:text-green-400 transition-colors">Client Reviews</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-bold font-heading mb-6">Our Services</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#catalog" className="hover:text-green-400 transition-colors">Digital Printing</a></li>
              <li><a href="#catalog" className="hover:text-green-400 transition-colors">Offset Bulk Printing</a></li>
              <li><a href="#catalog" className="hover:text-green-400 transition-colors">Vinyl & Signage</a></li>
              <li><a href="#catalog" className="hover:text-green-400 transition-colors">Corporate Gifting</a></li>
              <li><a href="#catalog" className="hover:text-green-400 transition-colors">Custom Merchandise</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-bold font-heading mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="flex-shrink-0 text-green-500 mt-0.5" size={18} />
                <a href="https://www.google.com/maps?q=13.0555554,80.2697601&z=17&hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">77, Mohammed Hussain Street,<br/> Royapet, Chennai - 600014.</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="flex-shrink-0 text-green-500" size={18} />
                <span>+91 9585854540</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="flex-shrink-0 text-green-500" size={18} />
                <span>onlinekings.in@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2025 Online Kings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer