import { Clock, Globe, Palette, ShieldCheck, Users, Zap } from "lucide-react";
import AbtUs from '../assets/printing.jpg'
const About = () => {
  return (
    <section id="about-us" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Visuals */}
          <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-square lg:aspect-[4/5] group">
                 <div className="absolute inset-0 bg-slate-100">
                    <div 
                        className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform duration-700"
                        style={{
                            backgroundImage:`url(${AbtUs})`
                        }}
                        >
                      
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                 </div>
                 {/* Floating Card 1: Experience */}
                 <div className="absolute top-8 left-8 bg-white/90 backdrop-blur p-4 pr-6 rounded-2xl border border-white shadow-lg flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                        7
                     </div>
                     <div>
                        <p className="font-heading font-bold text-slate-900 text-sm">Years Experience</p>
                        <p className="text-xs text-slate-500">Since 2018</p>
                     </div>
                 </div>
                 {/* Floating Card 2: Speed */}
                 <div className="absolute bottom-8 right-8 left-8 bg-white/95 backdrop-blur p-6 rounded-2xl border border-white shadow-xl">
                    <div className="flex items-center gap-4 mb-2">
                       <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                          <Clock size={24} />
                       </div>
                       <div>
                          <p className="font-heading font-bold text-slate-900 text-lg">Record Speed</p>
                          <p className="text-sm text-slate-500">Average turnaround: <span className="text-green-600 font-semibold">2-3 Days</span></p>
                       </div>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2 overflow-hidden">
                        <div className="bg-green-500 w-11/12 h-full rounded-full"></div>
                    </div>
                 </div>
              </div>
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
          </div>

          {/* Right: Text Content */}
          <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Who We Are
              </div>
              
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  We bring your digital <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">ideas to life.</span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  We are a Chennai-based printing and promotional company, offering a wide range of high-quality, affordable printing solutions. Since 2018, we've been trusted by customers for our unique promotional products, faster service and reliable results.
                  <br /><br />
                  Whether you need budget-friendly branding, outdoor display solutions or regular office prints, we are your perfect printing partner in Chennai.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
                  {[
                      { icon: Zap, title: "Lightning Fast", desc: "Same-day printing options available for urgent orders." },
                      { icon: ShieldCheck, title: "Quality Guaranteed", desc: "Thick, premium paper stocks & vibrant, lasting inks." },
                      { icon: Palette, title: "Custom Design", desc: "Free design assistance with every bulk order placed." },
                    //   { icon: Globe, title: "Eco-Friendly", desc: "Sustainable materials and zero-waste printing process." }
                  ].map((feature, idx) => (
                      <div key={idx} className="flex gap-4 group">
                          <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white group-hover:bg-green-50 border-2 border-slate-100 group-hover:border-green-200 flex items-center justify-center text-slate-400 group-hover:text-green-600 transition-all duration-300 shadow-sm">
                              <feature.icon size={22} strokeWidth={2} />
                          </div>
                          <div>
                              <h3 className="font-heading font-bold text-slate-900 text-lg mb-1">{feature.title}</h3>
                              <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About