import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, ShieldCheck, CreditCard } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Brand } from '../types';

const Home: React.FC = () => {
  const featuredProducts = MOCK_PRODUCTS.slice(0, 4);

  return (
    <div className="pb-10">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://picsum.photos/id/103/1600/900" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50 z-10" />
        
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 flex flex-col items-start">
          <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            New Collection
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-xl mb-6">
            Street Style <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Redefined
            </span>
          </h1>
          <p className="text-slate-300 text-lg mb-8 max-w-md">
            Discover the latest drops from Nike, Adidas, Calvin Klein, and US Polo Assn. Authentic gear for the urban explorer.
          </p>
          <Link 
            to="/shop"
            className="bg-white text-slate-900 font-bold px-8 py-3 rounded-full inline-flex items-center space-x-2 hover:bg-indigo-50 transition-colors shadow-lg"
          >
            <span>Shop Now</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Brands ticker */}
      <div className="bg-white border-b border-slate-100 py-6 overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-4">Trusted Brands</p>
          <div className="flex justify-center flex-wrap gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {Object.values(Brand).filter(b => b !== Brand.OTHER).map(brand => (
              <span key={brand} className="text-xl font-bold text-slate-800">{brand}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
              <Truck size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Fast Delivery</h3>
              <p className="text-sm text-slate-500 mt-1">Get your gear in 2-5 days depending on your location.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4">
            <div className="bg-green-100 p-3 rounded-lg text-green-600">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Authentic Brands</h3>
              <p className="text-sm text-slate-500 mt-1">100% original products from top global manufacturers.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4">
            <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
              <CreditCard size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Secure Payment</h3>
              <p className="text-sm text-slate-500 mt-1">Transactions in INR. Supports UPI, Cards & Netbanking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Trending Now</h2>
          <Link to="/shop" className="text-indigo-600 font-semibold text-sm hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;