import { X, Palette, Zap, Package } from 'lucide-react';
import handleQuoteRequest from '../utils/text';

function ProductModal({ product, isOpen, onClose, icon: Icon, categoryLabel }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-white/30 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors z-10"
          >
            <X size={24} className="text-slate-500" />
          </button>

          {/* Modal Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
            
            {/* Product Image Section */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-full bg-slate-50 rounded-xl p-8 flex items-center justify-center mb-4 h-80">
                <div className="text-slate-300">
                  {Icon && <Icon size={80} />}
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">
                <Package size={12} />
                {categoryLabel}
              </div>
            </div>

            {/* Product Details Section */}
            <div className="flex flex-col justify-between">
              
              {/* Header */}
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  {product.name}
                </h2>
                
                {/* Customizable Badge */}
                {product.customizable && (
                  <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg font-semibold text-sm mt-3 mb-4">
                    <Palette size={16} />
                    Customizable
                  </div>
                )}

                {/* Description */}
                {product.description && (
                  <div className="mt-6">
                    <h3 className="font-heading font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <Zap size={18} className="text-green-600" />
                      About
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Details Grid */}
              <div className="space-y-4 mt-8">
                
                {/* Variants */}
                {product.variants && product.variants.length > 0 && (
                  <div>
                    <label className="block font-heading font-bold text-slate-900 mb-3 text-sm">
                      Available Options
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map((variant, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg hover:bg-green-100 hover:text-green-700 transition-colors"
                        >
                          {variant}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Material */}
                {product.material && (
                  <div>
                    <label className="block font-heading font-bold text-slate-900 mb-2 text-sm">
                      Material
                    </label>
                    <p className="text-slate-600 text-sm">{product.material}</p>
                  </div>
                )}

                {/* Colors */}
                {product.colors && product.colors.length > 0 && (
                  <div>
                    <label className="block font-heading font-bold text-slate-900 mb-3 text-sm">
                      Available Colors
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg text-sm"
                        >
                          <div
                            className="w-4 h-4 rounded-full border border-slate-300"
                            style={{
                              backgroundColor: color.toLowerCase() === 'white' ? '#f5f5f5' : color.toLowerCase()
                            }}
                          />
                          <span className="text-slate-700 font-medium">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => {
                    handleQuoteRequest(product.name);
                    onClose();
                  }}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Request Quote
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductModal;
