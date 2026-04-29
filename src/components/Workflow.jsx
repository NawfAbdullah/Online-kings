import { CalendarClock, Clock, FileCheck, Filter, PenTool, Printer, Scissors, ThumbsUp, Truck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WORKFLOW_STEPS = [
  { icon: Filter, title: "Lead", desc: "We gather your requirements and understand your brand vision." },
  { icon: PenTool, title: "Design & Prep", desc: "Our designers optimize your files for the perfect print output." },
  { icon: FileCheck, title: "Proofing", desc: "You receive digital proofs to approve before we proceed." },
  { icon: CalendarClock, title: "Scheduling", desc: "Your order is prioritized and slotted for immediate production." },
  { icon: Printer, title: "Printing", desc: "High-precision printing using industry-leading machinery." },
  { icon: Scissors, title: "Finishing", desc: "Cutting, laminating, and quality checking every single unit." },
  { icon: Truck, title: "Delivery", desc: "Secure packaging and fast shipping directly to your location." },
  { icon: ThumbsUp, title: "Review", desc: "We follow up to ensure you are 100% satisfied with the results." }
];


const Workflow = () => {
  const sectionRef = useRef(null);
  const [progressHeight, setProgressHeight] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState(new Array(WORKFLOW_STEPS.length).fill(false));
  const windowWidth = window.innerWidth

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      const startOffset = windowHeight * 0.6;
      const scrolled = startOffset - sectionTop;
      
      let percentage = (scrolled / sectionHeight) * 100;
      percentage = Math.max(0, Math.min(100, percentage));
      
      setProgressHeight(percentage);

      const newVisibleSteps = WORKFLOW_STEPS.map((_, idx) => {
         const threshold = (idx * 11); 
         return percentage > threshold;
      });
      setVisibleSteps(newVisibleSteps);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="workflow" ref={sectionRef} className="py-24 bg-slate-50 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
             <Clock size={14} className="text-green-600" />
             Our Process
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
             From idea to delivery, <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">
                we handle it all.
             </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
             Our 8-step quality control workflow ensures that every print leaving our company meets the Online King's standard.
          </p>
        </div>

        <div className="relative pb-20">
           
           <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 rounded-full"></div>
           
           <div 
              className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-green-400 to-green-600 -translate-x-1/2 rounded-full transition-all duration-100 ease-linear progress-glow z-0"
              style={{ height: `${progressHeight}%` }}
           ></div>

           <div className="space-y-20">
              {WORKFLOW_STEPS.map((step, index) => {
                 const StepIcon = step.icon;
                 const isVisible = visibleSteps[index];
                 
                 return (
                   <div 
                      key={index} 
                      className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                      <div className="hidden md:block w-1/2"></div>

                      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                        <div className={`
                            w-14 h-14 rounded-full border-4 flex items-center justify-center shadow-xl transition-all duration-500
                            ${isVisible 
                              ? 'bg-green-500 border-green-200 scale-110 text-white' 
                              : 'bg-white border-slate-200 text-slate-300 scale-100'}
                        `}>
                            <StepIcon size={24} strokeWidth={isVisible ? 2.5 : 2} />
                        </div>
                      </div>

                      <div className={`w-full md:w-1/2 pl-24 md:pl-0 md:px-16 workflow-step ${isVisible ? 'visible' : ''}`} 
                          style={{ 
                              transform: index % 2 === 0 ? 'translateX(100px)' : 'translateX(-50px)'
                          }}
                      >
                        <div className={`
                            group relative p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-1
                            ${isVisible
                              ? 'bg-white/80 backdrop-blur border-green-100 shadow-[0_10px_40px_-10px_rgba(34,197,94,0.1)]'
                              : 'bg-white/40 border-slate-100 grayscale opacity-50'}
                        `}>
                            <span className="absolute -top-4 -right-2 font-heading font-black text-6xl text-slate-100/80 z-0 select-none">
                              0{index + 1}
                            </span>

                            <div className="relative z-10">
                              <h3 className={`font-heading font-bold text-2xl mb-3 ${isVisible ? 'text-slate-900' : 'text-slate-400'}`}>
                                {step.title}
                              </h3>
                              <p className="text-slate-600 leading-relaxed font-medium">
                                {step.desc}
                              </p>
                            </div>

                            <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-16 h-[2px] 
                              ${index % 2 === 0 ? '-left-16' : '-right-16'}
                              ${isVisible ? 'bg-green-300' : 'bg-slate-200'}
                            `}></div>
                        </div>
                      </div>
                   </div>
                 );
              })}
           </div>

           <div className={`absolute left-8 md:left-1/2 bottom-0 -translate-x-1/2 w-6 h-6 rounded-full border-4 shadow-sm transition-colors duration-500 z-10 ${progressHeight >= 98 ? 'bg-green-500 border-green-200' : 'bg-slate-300 border-white'}`}></div>

        </div>

      </div>
    </section>
  );
};

export default Workflow