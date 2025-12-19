import { ArrowRight, Quote, Star } from "lucide-react";

const TESTIMONIALS_DATA = [
  { name: "Mr. Venkataraman Rajagopal", role: "Show Stoppers", text: `We are a performing music band. Thank you ONLINE KINGS!Gazebo 2mts x 2 mts made to specification. That too after a 3 x 3 was made.Also a standee and a pack of visiting cards Extremely thankful to Mrs.Madeeha Hamid , Mr.Hussain and their efficient and courteous staff who left no compromise on quality and commitment! Thanks once again`, stars: 5 },
  { name: "Mr. Deepak", role: "Aishu's Kitchen, Anna Nagar", text: "We are having a small cloud kitchen and wanted to start our cloud kitchen to open public.To advertise and start a outlet, we had talks with madeeha for canopy (6*6) and standee for (6*2). She gave us a lot of ideas and marketing concepts and designs for the canopy. She was very helping in understanding our needs and shared details / quotation for the canopy and standee.We enquired few other shops and her quote was the best and she gave further discount assuring more business from us. We sent all the required images by evening around 5am and bang, the next day by 11am we got our designs ready 🤯 Few corrections were made and the final copy was sent within 24 hours and next 24 hours went for printing got it delivered the third day. Excellent coordination and happy with the product output and quality 🙏🙏. Good job 👌👌Highly recommended for all printing works 👍👍", stars: 5 },
  { name: "Mr. Shivashankar", role: "Sphere Housing, Chennai", text: "Have got a gazebo first from Online Kings, After that for all the promotion activity in my organisation we are giving back to back work to them because of the commitment and quality. If you are looking for any Marketing related things you can rely on Online Kings. Keep up the good work.", stars: 5 },
  { name: "Mr. Mani", role: "TR Cross Fit, Mayiladuthurai", text: "Hello I'm mani,Recently I planned to open a gym and ordered pamphlets from Online Kings. This is my first time online purchase and order for pamphlet. It was good experience, quality was nice, genuine handling, and then after delivery the product is also good. Direct owner to customer service is nice. I'm satisfied. 🙏 Thank you Online Kings and my best wishes for your growth to other branches. ", stars: 5 },
  { name: "Mr. Fayas Hameed", role: "Ad Thowbah Haj and Umrah Service, Karaikal", text: "I Ordered a Canopy for My Business Startup... It was really good and attractive 😍. They are Providing Good Service and are down to earth. Customer friendly service. Timely dispatch. I Got What I expected ❤️", stars: 5 },
  { name: "Mr. Daniel Joseph", role: "Virginia Business Solutions, Chennai", text: "Online kings are definitely the best and reliable printers in Chennai as far as I'm concerned. I did give them an order in the night for Banners and standees for one of my client's education exhibition stall and they just delivered high quality works in a turn around time of 14 hours. I have done my Visiting cards with them, they are simply superb in terms of pricing, quality and super fast turn around time which is vital for every business owner. As a business owner or as an individual you can just blindly rely on Online Kings for any of your Printing needs. ", stars: 4 },
  { name: "Dr. Shenoie", role: "Ayurkshethra, Kerala", text: "We are from Kerala, We Found this Contact from Fb Market Place. Basically We afraid to Transfer Money to Unknow Vendor. But Really Super Service. Quality Product. Quality Communications. Proper Delivery. Proper Packing. Best Rates. Really We Recommend. We Mark 5 Star for this Team👍 And Today We are Placing a Bulk Order to this Team. Really Confident✅", stars: 5 },
  { name: "Mr. Prabhu,", role: "Chennai", text: "Excellent service. Because i placed order for jus one canopy, though they take bulk orders....they just did it for me yesterday. I am yet to receive the product. Once i see the end product, will again give them 5stars.thank you.", stars: 5 },
  { name: "Dr. Irfan", role: "Millers Dental, Egmore", text: "Fastest , easiest and affordable place for all your printing and advertising requirements. Highly recommended.Thank you Kursheed. ", stars: 5 },
  { name: "Ms. Shyamala", role: "Fashion Drift Magazine, Adambakkam", text: "Affordable and pretty fast delivery. We can rely on them for even last min requests.", stars: 4 },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            Wall of Love
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Loved by <span className="text-green-600">businesses in Chennai.</span>
          </h2>
          <p className="text-lg text-slate-600">
            Don't just take our word for it. Here is what our clients have to say about our service.
          </p>
        </div>

        {/* Masonry Layout via CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {TESTIMONIALS_DATA.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="break-inside-avoid bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <Quote size={32} className="text-slate-100 mb-2 group-hover:text-green-100 transition-colors" />
              
              <p className="text-slate-700 mb-6 leading-relaxed font-medium">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-500 font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-green-600 font-semibold uppercase tracking-wide">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <a href="" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors border-b border-transparent hover:border-slate-900 pb-0.5">
                View all 30+ reviews on Google
                <ArrowRight size={16} />
            </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials