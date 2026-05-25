import { Award, CheckCircle, Clock, Globe, Palette, ShieldCheck, Users, Zap } from "lucide-react";
import AbtUs from '../assets/printing.jpg'
import AnimatedCounter from "./AnimatedCounter";
const About = () => {
  return (
    <section id="about-us" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Visuals */}
          <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                          <Award size={32} />
                      </div>
                      <h3 className="font-heading font-bold text-5xl text-slate-900 mb-2">
                          <AnimatedCounter end={7} suffix="+" />
                      </h3>
                      <p className="text-slate-500 font-medium">Years of Experience</p>
                      <p className="text-xs text-slate-400 mt-2">Serving Chennai since 2018</p>
                  </div>

                  <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 text-white">
                      <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-green-400 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                          <CheckCircle size={32} />
                      </div>
                      <h3 className="font-heading font-bold text-5xl text-white mb-2">
                          <AnimatedCounter end={7500} duration={2500} suffix="+" />
                      </h3>
                      <p className="text-slate-400 font-medium">Projects Completed</p>
                      <p className="text-xs text-slate-500 mt-2">Trusted by 1000+ businesses</p>
                  </div>

                  <div className="sm:col-span-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 flex items-center justify-between relative overflow-hidden">
                      <div className="relative z-10">
                          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm mb-4 group-hover:scale-110 transition-transform">
                              <Zap size={32} fill="currentColor" />
                          </div>
                          <h3 className="font-heading font-bold text-5xl text-slate-900 mb-2">
                              <AnimatedCounter end={24} suffix=" Hrs" />
                          </h3>
                          <p className="text-slate-600 font-medium">Record Turnaround Speed</p>
                      </div>
                      <Clock size={180} className="absolute -right-10 -bottom-10 text-green-200/50 rotate-12" />
                  </div>

              </div>
          </div>

          {/* Right: Text Content */}
          <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Who Are We?
              </div>
              
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  We bring your digital <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">ideas to life.</span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  We are a Chennai-based printing and promotional company, offering a wide range of high-quality, affordable printing solutions. Since 2018, we've been trusted by customers for our unique promotional products, faster service and reliable results.
                  <br /><br />
                  Whether you need budget-friendly branding, outdoor display solutions or regular office prints, we are your perfect printing partner in Tamil Nadu.
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