import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation if clicked on button
    addToCart(product);
  };

  return (
    <Link 
      to={`/product/${product.id}`} 
      className="group block bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-semibold text-slate-900 shadow-sm">
            {product.brand}
          </span>
        </div>
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 bg-indigo-600 text-white p-2.5 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-indigo-700 active:scale-95"
          aria-label="Add to cart"
        >
          <Plus size={20} />
        </button>
      </div>
      <div className="p-4">
        <div className="text-xs text-slate-500 mb-1">{product.category}</div>
        <h3 className="font-bold text-slate-900 truncate mb-1">{product.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-bold text-indigo-600">
            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(product.price)}
          </span>
          <span className="text-xs text-slate-400">
            Delivers in {product.deliveryEstimateDays} days
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;