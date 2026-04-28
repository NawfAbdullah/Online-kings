import Geo from '../assets/prime/geo.png'
import AlShifa from '../assets/prime/alshifa.jpeg'
import Amaron from '../assets/prime/amarpn.jpeg'
import Api from '../assets/prime/api.jpeg'
import Byjus from '../assets/prime/byjus.png'
import CBD from '../assets/prime/cbd.jpeg'
import Decathlon from '../assets/prime/Decathlon_Logo.png'
import DMK from '../assets/prime/dmk.png'
import Ensinger from '../assets/prime/ensinger.png'
import Goodwill from '../assets/prime/goodwill.jpeg'
import Jio from '../assets/prime/jio.png'
import KTM from '../assets/prime/ktm.png'
//import MP from '../assets/prime/makkal paathi.jpeg'
import MNM from '../assets/prime/makkalnidhimayyam.jpeg'
import Naturals from '../assets/prime/naturals.jpeg'
import Noor from '../assets/prime/noor.jpeg'
import Rela from '../assets/prime/rela.jpeg'


const CLIENT_LOGOS = [
  { name: "Geo", icon: Geo, color: "text-blue-600" },
  { name: "Alshifa", icon: AlShifa, color: "text-green-600" },
  { name: "Amaron", icon: Amaron, color: "text-orange-600" },
  { name: "Api", icon: Api, color: "text-red-600" },
  { name: "Byjus", icon: Byjus, color: "text-teal-600" },
  { name: "Crescent Blood Donors", icon: CBD, color: "text-yellow-600" },
  { name: "Decathlon", icon: Decathlon, color: "text-slate-600" },
  { name: "DMK", icon: DMK, color: "text-purple-600" },
  { name: "Ensinger", icon: Ensinger, color: "text-purple-600" },
  { name: "Goodwill", icon: Goodwill, color: "text-purple-600" },
  { name: "Jio", icon: Jio, color: "text-purple-600" },
  { name: "Ktm", icon: KTM, color: "text-purple-600" },
  { name: "MNM", icon: MNM, color: "text-purple-600" },
  { name: "Naturals", icon: Naturals, color: "text-purple-600" },
  { name: "Noor", icon: Noor, color: "text-purple-600" },
  { name: "Rela", icon: Rela, color: "text-purple-600" },
];

const ClientLogos = () => {
  return (
    <section className="w-full py-12 bg-white border-t border-slate-100 border-b overflow-hidden">
       <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Our Valued Customers</p>
       </div>
       <div className="relative flex overflow-x-hidden overflow-y-hidden group pause-on-hover">
          {/* First Marquee Track */}
          <div className="w-full animate-marquee whitespace-nowrap flex items-center gap-16 pt-3">
             {CLIENT_LOGOS.map((logo, i) => (
                <div key={i} className="flex items-center gap-3 opacity-100 hover:opacity-100 transition-all duration-300 cursor-default group/item">
                   <div className={`w-20 h-20 rounded-xl bg-slate-50 flex items-center justify-center ${logo.color} group-hover/item:bg-slate-100 transition-colors`}>
                        <img src={logo.icon} alt={logo.name} />
                   </div>
                  
                </div>
             ))}
             {/* Duplicate for seamless loop */}
            {CLIENT_LOGOS.map((logo, i) => (
                <div key={i} className="flex items-center gap-3 opacity-40 hover:opacity-100  transition-all duration-300 cursor-default group/item">
                   <div className={`w-20 h-20 rounded-xl bg-slate-50 flex items-center justify-center ${logo.color} group-hover/item:bg-slate-100 transition-colors`}>
                        <img src={logo.icon} alt={logo.name} />
                   </div>
                  
                </div>
             ))}
          </div>
       </div>
    </section>
  )
}

export default ClientLogos