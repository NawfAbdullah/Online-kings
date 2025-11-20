import { Box, Circle, Coffee, Hexagon, Palette, ShieldCheck, ShoppingBag, Triangle, Truck, Zap } from "lucide-react";

const CLIENT_LOGOS = [
  { name: "TechCorp", icon: Hexagon, color: "text-blue-600" },
  { name: "GreenLeaf", icon: Circle, color: "text-green-600" },
  { name: "BuildIt", icon: Box, color: "text-orange-600" },
  { name: "EduSmart", icon: Triangle, color: "text-red-600" },
  { name: "MedCare", icon: ShieldCheck, color: "text-teal-600" },
  { name: "Foodies", icon: Coffee, color: "text-yellow-600" },
  { name: "AutoDrive", icon: Truck, color: "text-slate-600" },
  { name: "FashionHub", icon: ShoppingBag, color: "text-purple-600" },
  { name: "StudioX", icon: Palette, color: "text-pink-600" },
  { name: "NextGen", icon: Zap, color: "text-indigo-600" },
];

const ClientLogos = () => {
  return (
    <section className="py-12 bg-white border-t border-slate-100 border-b overflow-hidden">
       <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Our Valued Customers</p>
       </div>
       <div className="relative flex overflow-x-hidden group pause-on-hover">
          {/* First Marquee Track */}
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 pr-16">
             {CLIENT_LOGOS.map((logo, i) => (
                <div key={i} className="flex items-center gap-3 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-default group/item">
                   <div className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center ${logo.color} group-hover/item:bg-slate-100 transition-colors`}>
                       <logo.icon size={24} strokeWidth={2} />
                   </div>
                   <span className="font-heading font-bold text-xl text-slate-800">{logo.name}</span>
                </div>
             ))}
             {/* Duplicate for seamless loop */}
             {CLIENT_LOGOS.map((logo, i) => (
                <div key={`dup-${i}`} className="flex items-center gap-3 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-default group/item">
                   <div className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center ${logo.color} group-hover/item:bg-slate-100 transition-colors`}>
                       <logo.icon size={24} strokeWidth={2} />
                   </div>
                   <span className="font-heading font-bold text-xl text-slate-800">{logo.name}</span>
                </div>
             ))}
          </div>
          {/* Second Track (for seamlessness if needed, though CSS usually handles one long track) 
              Note: The above track duplicates the content internally which is usually enough for pure CSS marquee 
              if the track is wide enough. To be safe for very wide screens, we often render two separate scrolling divs, 
              but here I concatenated the array to make the track long.
          */}
       </div>
    </section>
  )
}

export default ClientLogos