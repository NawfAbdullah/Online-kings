import { Award, Briefcase, Heart } from 'lucide-react';
import founderImage from '../assets/transparent.png';

const Founder = () => {
  return (
    <section id="founder" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6">
            <Briefcase size={14} className="text-green-600" />
            Our Leadership
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Meet Our Founder
          </h2>
        </div>

        {/* Founder Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Founder Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur opacity-25 h-[80%]"></div>
              <img
                src={founderImage}
                alt="Mr. Kursheed Hussain - Founder"
                className="relative w-full h-[80%] rounded-2xl shadow-2xl object-cover border-4 border-green-500"
              />
            </div>
          </div>

          {/* Founder Bio */}
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-3xl font-bold text-slate-900 mb-2">
                Mr. Kursheed Hussain
              </h3>
              <p className="text-green-600 font-semibold">Founder & CEO</p>
            </div>

            {/* Bio Text */}
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Mr. Kursheed Hussain is a successful entrepreneur, and the driving force behind Online Kings, 
                that he founded in 2018. He holds a graduate degree in Polymer Technology and an MBA in 
                Entrepreneurship, bringing together strong technical knowledge and business acumen.
              </p>

              <p>
                Ever since he was in school, Mr. Hussain has taken up various leadership roles that shaped 
                his professional values. Before establishing Online Kings, he gained diverse real-world 
                experience by working as a Polymer Process Engineer in a reputed manufacturing company, and 
                has also gained early operational exposure through roles in journalism and logistics. This has 
                contributed to his deeper understanding of end-to-end business operations and customer focused 
                service delivery.
              </p>

              <p>
                Known within his network for his reliability, accountability, responsiveness and transparent 
                communication, Mr. Hussain is deeply committed to service excellence. With him at the helm, 
                Online Kings continues to deliver fast, reliable and efficient services to its clients.
              </p>
            </div>

            {/* Key Values */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-slate-50 p-4 rounded-lg text-center">
                <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-slate-900">Excellence</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg text-center">
                <Briefcase className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-slate-900">Experience</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg text-center">
                <Heart className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-slate-900">Commitment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
