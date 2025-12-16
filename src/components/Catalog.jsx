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
      { 
        name: 'Visiting Cards', 
        description: '300 GSM art board visiting cards desirable for your business connections',
        variants: ['Classic', 'Glossy', 'Matte', 'Textured'] 
      },
      { 
        name: 'Pamphlets', 
        description: 'Art paper, glossy finish, double and single side prints.',
        variants: ['A4', 'A5', 'DL Size', '80 GSM', '100 GSM', '120 GSM', '130 GSM'],
        customizable: true
      },
      { 
        name: 'Brochures', 
        description: 'Suitable to present your catalog to your clients',
        variants: ['Bi-Fold', 'Tri-Fold', 'Z-Fold', '80 GSM', '100 GSM', '120 GSM', '130 GSM'],
        customizable: true
      },
      { 
        name: 'Letterheads', 
        description: 'Letterheads with your brand printed are the best way to project your brand professionally.',
        customizable: true
      },
      { 
        name: 'Envelope Covers', 
        description: 'Advertise your brand in and out with customizable envelope covers.',
        customizable: true
      },
      { 
        name: 'Books', 
        description: 'Print your product catalogs, user manuals, and company portfolios for your offices.'
      },
      { 
        name: 'Bill Books', 
        description: 'Give as purchase receipts for your clients.'
      },
      { 
        name: 'Stickers', 
        description: 'Label your brand on your products with attractive, peel-off stickers.'
      },
      { 
        name: 'Certificates', 
        description: 'Laminated certificates as a recognition for awardees and event attendees.',
        variants: ['300 GSM art board']
      },
      { 
        name: 'Voucher Books', 
        description: 'For keeping track of your office accounts.'
      },
      { 
        name: 'Danglers', 
        description: '300 GSM art board danglers used to hang out in shops, outlet stores and showrooms.'
      },
      { 
        name: 'Coupons', 
        description: 'Short, easily readable handy cards for introducing sale and discounts.'
      }
    ]
  },
  {
    id: 'offset',
    label: 'Offset Printing',
    icon: Layers,
    products: [
      { 
        name: 'Paper Inserts', 
        description: 'Short ad handouts for newspaper inserts, as thanks coupons for customers, for festive offer announcements etc.'
      },
      { 
        name: 'Pamphlets', 
        description: 'Designed to educate your customers about your products and services. Art paper, glossy finish, double and single side prints.',
        variants: ['80 GSM', '100 GSM', '120 GSM', '130 GSM'],
        customizable: true
      },
      { 
        name: 'Brochures', 
        description: 'A quick handout to your clients that speaks on your product catalogue',
        variants: ['80 GSM', '100 GSM', '120 GSM', '130 GSM'],
        customizable: true
      },
      { 
        name: 'Wall Posters', 
        description: 'Brand recall, high visibility in outdoors for your products and services especially on offers, festive discounts or any product launches.'
      },
      { 
        name: 'Magazines', 
        description: 'Premium quality paper with a glossy finish that brings your magazine an extraordinary look and shows your photographs sharp.'
      },
      { 
        name: 'Calendars', 
        description: 'Thick and sturdy papers with glossy finish, and writable surface for planning your years. Best for client gifts.'
      }
    ]
  },
  {
    id: 'vinyl',
    label: 'Vinyl Printing',
    icon: ImageIcon,
    products: [
      { 
        name: 'Flex', 
        description: 'High-quality flex prints with vibrant colors and sharp clarity - perfect for banners, hoardings and outdoor ads.'
      },
      { 
        name: 'Vinyl Stickers', 
        description: 'Stickers in large sizes and bulk quantity.'
      },
      { 
        name: 'Foam Boards', 
        description: 'Lightweight, steady foam boards that give you a high-quality finish - great for events, exhibitions and outdoor presentations.'
      },
      { 
        name: 'Sunpack Boards', 
        description: 'Budget-friendly ad boards that are waterproof, UV resistant for bold, long-lasting displays.'
      }
    ]
  },
  {
    id: 'promo',
    label: 'Promotional Products',
    icon: Flag,
    products: [
      { 
        name: 'Promotional Canopy', 
        description: 'Sturdy, long-lasting, portable and easy-to-use product best suitable for outdoor promotional activities.',
        variants: ['4x4x7 ft.', '6x6x7 ft.'],
        material: 'Star flex',
        customizable: true
      },
      { 
        name: 'Promotional Gazebo', 
        description: 'Tents well suited for outdoor events, banquets, highway motels, roadside diners etc. Strong enough to withstand everyday winds and moderate rains.',
        variants: ['6.5x6.5 ft.', '10x10 ft.', '10x15 ft.', '10x20 ft.'],
        colors: ['Red', 'Blue', 'Green', 'Orange', 'Yellow', 'Black', 'White'],
        customizable: true
      },
      { 
        name: 'Roll-up Standees', 
        description: 'Sleek, attractive in look, unique in style promotional product which is perfect for both your indoor and outdoor displays. Portable, foldable, and compact in design.',
        variants: ['5x2 ft.', '6x2.5 ft.', '6x3 ft.'],
        material: 'Satin media, Star flex, Normal flex',
        customizable: true
      },
      { 
        name: 'Promotional Table', 
        description: 'Handy, portable display desk to showcase your products effortlessly. Hassle-free installation and dismantle. Includes two racks at the back, a desk on top and a brand board over the head.',
        material: 'PVC',
        customizable: true
      },
      { 
        name: 'Promotional Table with Umbrella', 
        description: 'A custom-made design to satisfy our clients\' needs. This combined product adds shelter while you advertise your brand. We truly care for you while you advertise.',
        customizable: true
      },
      { 
        name: 'Promotional Umbrella', 
        description: 'Spacious shelter for roadside promotional stalls, easy-to-fix, portable and long lasting.',
        variants: ['Diameter: 6 ft.', 'Height: 7 ft. (adjustable)'],
        colors: ['Red', 'Blue', 'Green', 'Orange', 'Yellow', 'White'],
        customizable: true
      },
      { 
        name: 'Promotional Flag', 
        description: 'A promotional product that gives you high visibility making your brand stand out in the crowd.',
        variants: ['6x2 ft.', '8x2 ft.', '10x2 ft.'],
        customizable: true
      },
      { 
        name: 'Adjustable Backdrop', 
        description: 'A good, movable promotional product that serves as a brand wall in business events, award functions, indoor offices, even in public corridors and malls.',
        variants: ['Standard size: 8x8 ft.'],
        customizable: true
      },
      { 
        name: 'Wooden Easel Stand', 
        description: 'Desirable portrait stands that makes your brand look elegant. Perfect for business events, outlet stores, stalls, promotions in malls, weddings etc.'
      },
      { 
        name: 'Lollipop Boards', 
        description: 'Want your brand to stand out in style? Try out our lollipop boards. Apt for store entrances, food trucks, mall outlets and street food diners.'
      }
    ]
  },
  {
    id: 'sublimation',
    label: 'Sublimation Printing',
    icon: Coffee,
    products: [
      { 
        name: 'T-Shirts', 
        description: 'Custom printed T-shirts with fade-resistant prints and premium cotton cloth - perfect for daily wear.'
      },
      { 
        name: 'Caps', 
        description: 'Quality printed caps ideal for promotions, corporate branding and team wear.'
      },
      { 
        name: 'Mugs', 
        description: 'Ceramic custom printed mugs with bright printing - perfect for gifts and branding.'
      },
      { 
        name: 'Water Bottles', 
        description: 'Durable water bottles with custom prints desirable for office needs, gifts and promotions.'
      }
    ]
  },
  {
    id: 'office',
    label: 'Office Needs',
    icon: Briefcase,
    products: [
      { 
        name: 'Round Badges', 
        description: 'Represent your brand wherever you go. Pin attached badges, magnetic metal badges and acrylic badges.'
      },
      { 
        name: 'ID Cards', 
        description: 'Non tearable, clear print ID cards for your colleagues, teammates and staff.'
      },
      { 
        name: 'Lanyards', 
        description: 'Durable ID ropes with multi-color prints and non-itchy material for daily wear.'
      },
      { 
        name: 'Diaries', 
        description: 'As owners you always need a diary to keep yourself reminded and organized. You can gift this to your customers as well.'
      },
      { 
        name: 'Table-top Calendars', 
        description: 'Scheduling made easy with table-top calendars that are compact in size and flexible in use.'
      },
      { 
        name: 'Rubber Stamps', 
        description: 'You are not authenticated without your seal. Get a stamp customized on your brand immediately.'
      },
      { 
        name: 'Keychains', 
        description: 'Small in size, big on impact-gift that keeps your clients view your brand daily.'
      },
      { 
        name: 'Frames', 
        description: 'Quality frames for your certificates to be displayed on your office walls.'
      }
    ]
  },
  {
    id: 'signage',
    label: 'Signages',
    icon: Lightbulb,
    products: [
      { 
        name: 'Acrylic Name Boards', 
        description: 'Elegant acrylic name boards with a premium glass-like finish - perfect for office interiors and exteriors.'
      },
      { 
        name: 'ACP Letters', 
        description: 'High-quality ACP letters with clean edges and vibrant visibility for impactful branding.'
      },
      { 
        name: 'LED Boards', 
        description: 'Durable, weatherproof LED boards with vibrant lights for powerful storefront advertising.'
      },
      { 
        name: 'Backlight Boards', 
        description: 'High-quality backlit boards with even lighting - perfect for premium displays.'
      },
      { 
        name: 'Front Light Boards', 
        description: 'Durable front lit boards with sharp prints and strong illumination for day-night visibility.'
      },
      { 
        name: 'Iron Fabricated Standees', 
        description: 'Fixed, weatherproof and sturdy standee made of iron and is apt for outdoor displays.'
      }
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
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6">
            <ShoppingBag size={14} className="text-green-600" />
            Our Products
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
            Everything you need to <br />
            <span className="text-green-600">grow your business.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600">
            Browse our extensive catalog of printing solutions. If you don't see what you need, just ask.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex overflow-x-auto pb-6 sm:pb-8 no-scrollbar gap-2 sm:gap-4 mb-8 snap-x">
          {CATALOG_DATA.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex-shrink-0 snap-start flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full font-heading font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-slate-900 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-400 hover:text-slate-900'
              }`}
            >
              <category.icon size={14} className="hidden sm:block" />
              <span className="text-xs sm:text-sm">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 min-h-[500px]">
          {activeCategoryData && activeCategoryData.products.map((product, idx) => (
            <ProductCard product={product} key={idx} activeCategoryData={activeCategoryData}/>
          ))}
        </div>

        {/* Catalog Footer CTA */}
        <div className="mt-12 sm:mt-16 bg-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden">
           <div className="relative z-10">
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                  Need something customised?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mb-6 sm:mb-8 max-w-lg mx-auto px-2">
                  We handle bulk orders and custom sizes that aren't listed here. Get in touch with our design team.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 text-sm sm:text-base rounded-full transition-all">
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