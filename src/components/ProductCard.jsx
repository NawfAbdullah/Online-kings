import { ChevronRight, Palette } from 'lucide-react'
import React, { useState } from 'react'
import handleQuoteRequest from '../utils/text'
import Placeholder from '../assets/hero.jpg'
import ProductModal from './ProductModal'

function ProductCard({product,activeCategoryData}) {
    const [selectedType,setSelectedSubType] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
    <div 
        className="group bg-white rounded-2xl border border-slate-100 hover:border-green-200 hover:shadow-xl hover:shadow-green-100/50 transition-all duration-300 flex flex-col justify-start lg:justify-between h-full overflow-hidden relative cursor-pointer"
        onClick={() => setIsModalOpen(true)}
            >
            {/* Customizable Badge */}
            {product.customizable && (
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-bold shadow-lg z-10">
                <Palette size={12} />
                Customizable
              </div>
            )}
            <img className='w-full h-40 sm:h-50 lg:h-80 object-cover' src={Placeholder} alt="" />
            <div className="p-4 sm:p-6 flex flex-col h-full">

              <div>
                {/* Card Icon Visual */}
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-slate-50 group-hover:bg-green-50 text-slate-400 group-hover:text-green-600 flex items-center justify-center mb-3 sm:mb-4 transition-colors">
                  <activeCategoryData.icon size={20} />
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2">
                  {product.name}
                </h3>

                {/* Description */}
                {product.description && (
                  <p className="text-xs sm:text-sm text-slate-600 mb-2 sm:mb-3 line-clamp-2">
                    {product.description}
                  </p>
                )}

                {/* Variants Tags */}
                {product.variants && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                    {product.variants.slice(0, 3).map((variant, vIdx) => (
                      <span key={vIdx} className={`cursor-pointer px-2 py-0.5 sm:py-1 bg-slate-100 ${variant===selectedType?'text-green-500':'text-slate-600'} text-[8px] sm:text-[10px] font-bold uppercase tracking-wide rounded-md`} onClick={()=>setSelectedSubType(variant)}>
                        {variant}
                      </span>
                    ))}
                    {product.variants.length > 3 && (
                      <span className="text-[8px] sm:text-[10px] text-slate-500 px-2 py-0.5 sm:py-1">
                        +{product.variants.length - 3} more
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Action Footer */}
              <div className="mt-auto pt-3 sm:pt-6 border-t border-slate-50 flex items-center justify-between" onClick={() =>{
                 if(!selectedType){
                     handleQuoteRequest(product.name)
                }else{
                    handleQuoteRequest(`${selectedType} ${product.name}`)
                 }
                 
                 }}>
                <span className="text-[10px] sm:text-xs font-bold text-slate-400 group-hover:text-green-600 transition-colors">
                  Quotation
                </span>
                <button className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-slate-100 text-slate-400 group-hover:bg-green-500 group-hover:text-white flex items-center justify-center transition-all">
                  <ChevronRight size={14} className="sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
            </div>
      
      <ProductModal 
        product={product} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        icon={activeCategoryData.icon}
        categoryLabel={activeCategoryData.label}
      />
    </>
  )
}

export default ProductCard