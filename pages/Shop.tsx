import React, { useState, useMemo } from 'react';
import { Filter, Search } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Category, Brand } from '../types';

const Shop: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [selectedBrand, setSelectedBrand] = useState<Brand | 'All'>('All');

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
      return matchesSearch && matchesCategory && matchesBrand;
    });
  }, [searchQuery, selectedCategory, selectedBrand]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Shop All</h1>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 sticky top-20 z-30 bg-slate-50/95 backdrop-blur py-4 -mx-4 px-4 md:static md:bg-transparent md:p-0">
        
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search shoes, jackets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-white"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as Category | 'All')}
            className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 focus:border-indigo-500 outline-none cursor-pointer whitespace-nowrap"
          >
            <option value="All">All Categories</option>
            {Object.values(Category).map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value as Brand | 'All')}
            className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 focus:border-indigo-500 outline-none cursor-pointer whitespace-nowrap"
          >
            <option value="All">All Brands</option>
            {Object.values(Brand).map(b => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="inline-block p-6 rounded-full bg-slate-100 mb-4">
            <Filter size={48} className="text-slate-300" />
          </div>
          <h3 className="text-xl font-bold text-slate-700 mb-2">No products found</h3>
          <p className="text-slate-500">Try adjusting your filters or search query.</p>
          <button 
            onClick={() => {
              setSelectedBrand('All');
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-4 text-indigo-600 font-medium hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;