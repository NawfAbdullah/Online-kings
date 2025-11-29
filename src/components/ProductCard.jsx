import { ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import handleQuoteRequest from '../utils/text'
import Placeholder from '../assets/hero.jpg'

function ProductCard({product,activeCategoryData}) {
    const [selectedType,setSelectedSubType] = useState(null)
  return (
    <div 
        className="group bg-white rounded-2xl border border-slate-100 hover:border-green-200 hover:shadow-xl hover:shadow-green-100/50 transition-all duration-300 flex flex-col justify-start lg:justify-between h-full overflow-hidden"
            >
            <img className='w-full h-50 lg:h-80 object-cover' src={Placeholder} alt="" />
            <div className="p-6">

              <div>
                {/* Card Icon Visual */}
                <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-green-50 text-slate-400 group-hover:text-green-600 flex items-center justify-center mb-4 transition-colors">
                  <activeCategoryData.icon size={24} />
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
                  {product.name}
                </h3>

                {/* Variants Tags */}
                {product.variants && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {product.variants.map((variant, vIdx) => (
                      <span key={vIdx} className={`cursor-pointer px-2 py-1 bg-slate-100 ${variant===selectedType?'text-green-500':'text-slate-600'} text-[10px] font-bold uppercase tracking-wide rounded-md`} onClick={()=>setSelectedSubType(variant)}>
                        {variant}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Footer */}
              <div className="mt-auto mb-2 pt-6 border-t border-slate-50 flex items-center justify-between" onClick={() =>{
                 if(!selectedType){
                     handleQuoteRequest(product.name)
                }else{
                    handleQuoteRequest(`${selectedType} ${product.name}`)
                 }
                 
                 }}>
                <span className="text-xs font-bold text-slate-400 group-hover:text-green-600 transition-colors">
                  Quotation
                </span>
                <button className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 group-hover:bg-green-500 group-hover:text-white flex items-center justify-center transition-all">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
            </div>
  )
}

export default ProductCard