import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, Home, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/shop', label: 'Shop', icon: ShoppingBag },
    { path: '/cart', label: 'Cart', icon: ShoppingCart },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-indigo-600 p-1.5 rounded-lg">
            <ShoppingBag className="text-white h-6 w-6" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            LuxeMarket
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                isActive(link.path) 
                  ? 'text-indigo-600' 
                  : 'text-slate-600 hover:text-indigo-600'
              }`}
            >
              <link.icon size={18} />
              <span>{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Cart Icon & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative p-2 text-slate-600 hover:text-indigo-600 transition-colors">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full shadow-sm">
                {totalItems}
              </span>
            )}
          </Link>
          
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-3 p-2 rounded-lg ${
                  isActive(link.path)
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-slate-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <link.icon size={20} />
                <span className="font-medium">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;