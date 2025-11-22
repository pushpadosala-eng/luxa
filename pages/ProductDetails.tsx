import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Truck, RotateCcw } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = MOCK_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Product not found</h2>
        <button onClick={() => navigate('/shop')} className="mt-4 text-indigo-600 hover:underline">
          Return to Shop
        </button>
      </div>
    );
  }

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + product.deliveryEstimateDays);
  const formattedDate = deliveryDate.toLocaleDateString('en-IN', { weekday: 'long', month: 'short', day: 'numeric' });

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center text-slate-500 hover:text-slate-800 mb-6 transition-colors"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        {/* Image */}
        <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <div className="mb-2">
             <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">{product.brand}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-slate-900 mb-6">
            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(product.price)}
          </p>

          <p className="text-slate-600 leading-relaxed mb-8 text-lg">
            {product.description}
          </p>

          <div className="space-y-4 mb-8 border-t border-b border-slate-100 py-6">
            <div className="flex items-center text-slate-700">
              <Truck size={20} className="mr-3 text-indigo-600" />
              <span>Order now to get it by <span className="font-bold">{formattedDate}</span></span>
            </div>
            <div className="flex items-center text-slate-700">
              <RotateCcw size={20} className="mr-3 text-indigo-600" />
              <span>14-Day Free Returns & Exchange</span>
            </div>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="w-full bg-indigo-600 text-white text-lg font-bold py-4 rounded-2xl shadow-lg hover:bg-indigo-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center"
          >
            <ShoppingCart size={24} className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;