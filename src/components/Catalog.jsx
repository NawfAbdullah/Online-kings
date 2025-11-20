import { ShoppingBag,  Printer, Layers, Image as ImageIcon, Flag, 
  Coffee, Briefcase, Lightbulb, ChevronRight 
} from 'lucide-react';
import { useState } from "react";
import ProductCard from './ProductCard';

const CATALOG_DATA = [
  {
    id: 'digital',
    label: 'Digital Printing',
    icon: Printer,
    products: [
      { name: 'Visiting Cards', variants: ['Classic', 'Glossy', 'Matte', 'Textured'] },
      { name: 'Pamphlets', variants: ['A4', 'A5', 'DL Size'] },
      { name: 'Brochures', variants: ['Bi-Fold', 'Tri-Fold', 'Z-Fold'] },
      { name: 'Letterheads' },
      { name: 'Envelope Covers' },
      { name: 'Books' },
      { name: 'Bill Books' },
      { name: 'Stickers' },
      { name: 'Certificates' },
      { name: 'Voucher Books' },
      { name: 'Danglers' }
    ]
  },
  {
    id: 'offset',
    label: 'Offset Printing',
    icon: Layers,
    products: [
      { name: 'Leaflets' },
      { name: 'Pamphlets (Bulk)' },
      { name: 'Brochures (Bulk)' },
      { name: 'Wall Posters' },
      { name: 'Magazines' }
    ]
  },
  {
    id: 'vinyl',
    label: 'Vinyl Printing',
    icon: ImageIcon,
    products: [
      { name: 'Flex Banners' },
      { name: 'Vinyl Stickers' },
      { name: 'Foam Boards' },
      { name: 'Sunpack Boards' }
    ]
  },
  {
    id: 'promo',
    label: 'Promotional Products',
    icon: Flag,
    products: [
      { name: 'Promotional Canopy' },
      { name: 'Promotional Gazebo' },
      { name: 'Promotional Table' },
      { name: 'Promotional Umbrella' },
      { name: 'Table with Umbrella' },
      { name: 'Promotional Flag' },
      { name: 'Roll-up Standee' },
      { name: 'Adjustable Backdrop' }
    ]
  },
  {
    id: 'sublimation',
    label: 'Sublimation',
    icon: Coffee,
    products: [
      { name: 'T-Shirts' },
      { name: 'Caps' },
      { name: 'Mugs' },
      { name: 'Water Bottles' }
    ]
  },
  {
    id: 'office',
    label: 'Office Needs',
    icon: Briefcase,
    products: [
      { name: 'Business Cards' },
      { name: 'Round Badges' },
      { name: 'ID Cards' },
      { name: 'Lanyards' },
      { name: 'Diaries' },
      { name: 'Table-top Calendar' },
      { name: 'Rubber Stamp' }
    ]
  },
  {
    id: 'signage',
    label: 'Signages',
    icon: Lightbulb,
    products: [
      { name: 'Acrylic Name Boards' },
      { name: 'ACP Letters' },
      { name: 'LED Boards' },
      { name: 'Backlight Boards' },
      { name: 'Front Light Boards' }
    ]
  }
];

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState(CATALOG_DATA[0].id);
  const activeCategoryData = CATALOG_DATA.find(cat => cat.id === activeCategory);

  return (
    <section id="catalog" className="py-20 bg-slate-50/50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6">
            <ShoppingBag size={14} className="text-green-600" />
            Our Products
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Everything you need to <br />
            <span className="text-green-600">grow your business.</span>
          </h2>
          <p className="text-lg text-slate-600">
            Browse our extensive catalog of printing solutions. If you don't see what you need, just ask.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex overflow-x-auto pb-8 no-scrollbar gap-4 mb-8 snap-x">
          {CATALOG_DATA.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex-shrink-0 snap-start flex items-center gap-2 px-6 py-3 rounded-full font-heading font-bold text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-slate-900 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-400 hover:text-slate-900'
              }`}
            >
              <category.icon size={16} />
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[500px]">
          {activeCategoryData && activeCategoryData.products.map((product, idx) => (
            <ProductCard product={product} key={idx} activeCategoryData={activeCategoryData}/>
          ))}
        </div>

        {/* Catalog Footer CTA */}
        <div className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
           <div className="relative z-10">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                  Need something custom?
              </h3>
              <p className="text-slate-300 mb-8 max-w-lg mx-auto">
                  We handle bulk orders and custom sizes that aren't listed here. Get in touch with our design team.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all">
                  Request Custom Quote
              </button>
           </div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-500 opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>

      </div>
    </section>
  );
};

export default Catalog