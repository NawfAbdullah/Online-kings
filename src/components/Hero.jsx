import { 
  ArrowRight, Star, ShoppingBag, Menu, X, Play,} from 'lucide-react'
import HeroImg from '../assets/products-hero.png'
import handleQuoteRequest from '../utils/text';
import Logo from '../assets/cropped.png'
import Team1 from '../assets/avatar/1.jpeg'
import Team2 from '../assets/avatar/2.jpeg'
import Team3 from '../assets/avatar/3.jpeg'
const Hero = () => {
  return (
    <main id="home" className="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-start space-y-8 max-w-2xl">
            <div className="flex items-center justify-start">
              <img className='w-[150px]' src={Logo} alt="" />
             
            </div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-50 border border-green-100 shadow-sm">
              <span className="flex h-2 w-2 relative mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold tracking-wide uppercase text-green-800 font-heading">
                Best Rated Printing Service
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-6xl lg:text-[4rem] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Premium print <br/>
              <span className="relative whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500">
                your brand deserves.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-green-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
              The one-stop solution for all your advertisement needs. From high-quality banners to custom retail prints, we deliver excellent fast.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })} className="group flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-heading font-bold text-lg transition-all shadow-[0_10px_20px_-5px_rgba(34,197,94,0.4)] hover:shadow-[0_15px_25px_-5px_rgba(34,197,94,0.5)] transform hover:-translate-y-0.5">
                Browse Catalog
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-bold text-slate-700 bg-white border-2 border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all" onClick={handleQuoteRequest}>
                <Play size={18} className="fill-slate-700" />
                Get a Quote
              </button>
            </div>

            <div className="pt-4 flex items-center gap-6 text-sm text-slate-500 font-medium">
              <div className="flex -space-x-3">
                 {[Team1, Team2, Team3].map((teamImg, i) => (
                   <div key={i} className={`w-10 h-10 rounded-full border-[3px] border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-400 overflow-hidden`}>
                      <img src={teamImg} alt="Team member" className="w-full h-full object-cover" />
                   </div>
                 ))}
                 <div className="w-10 h-10 rounded-full border-[3px] border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                   +1k
                 </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                   {[1,2,3,4,5].map((star) => (
                     <Star key={star} size={14} className="fill-yellow-400 text-yellow-400" />
                   ))}
                </div>
                <p><span className="font-bold text-slate-900 font-heading">4.9/5</span> from verified clients</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visuals */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-green-50 via-teal-50 to-blue-50 rounded-full blur-3xl opacity-70 -z-10"></div>

            <div className="relative w-full max-w-md lg:max-w-full aspect-[4/5] md:aspect-square lg:aspect-auto lg:h-full bg-slate-100 rounded-3xl shadow-2xl border border-white/50 overflow-hidden group">
               <div className="absolute inset-0 bg-slate-50 flex flex-col">
                  <div className="h-12 border-b border-slate-200 flex items-center px-4 gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                      {/* <div className="text-center space-y-4 z-10">
                          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-sm">
                              <ShoppingBag size={48} />
                          </div>
                          <h3 className="font-heading font-bold text-2xl text-slate-800">Your Design Here</h3>
                          <p className="text-slate-500 text-sm">Drag and drop your assets to preview</p>
                          <div className="mt-4 inline-block px-4 py-2 bg-white rounded-lg border border-slate-200 text-xs font-mono text-slate-400 shadow-sm">
                              banner_design_v2.pdf
                          </div>
                      </div> */}
                      <div style={{backgroundImage:`url(${HeroImg})`,backgroundPosition:'center',backgroundSize:'cover'}} className="w-full h-full bg-red-500"></div>
                  </div>
               </div>
            </div>

            <div className="absolute top-10 -right-4 md:-right-8 bg-white p-4 pr-6 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 animate-[bounce_3s_infinite] flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-200">
                 <ShoppingBag size={24} />
              </div>
              <div>
                 <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Total Orders</p>
                 <p className="font-heading font-bold text-2xl text-slate-900">7500+</p>
              </div>
            </div>

            <div className="absolute -bottom-8 left-4 md:-left-8 bg-white p-5 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 max-w-[280px] hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-green-500 text-green-500" />)}
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">2h ago</span>
                </div>
                <p className="text-slate-800 text-sm font-medium leading-relaxed mb-4">
                  "Fastest , easiest and affordable place for all your printing and advertising requirements. Highly recommended.Thank you Kursheed."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                      I
                  </div>
                  <div>
                      <p className="text-xs font-bold text-slate-900 font-heading">Dr.Irfaan</p>
                      <p className="text-[10px] text-slate-500">Millers Dental, Egmore</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero