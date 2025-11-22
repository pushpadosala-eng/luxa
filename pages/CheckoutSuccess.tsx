import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CheckoutSuccess: React.FC = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  // Mock random order ID
  const orderId = Math.floor(100000 + Math.random() * 900000);
  
  // Mock delivery date (3 days from now)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);
  const formattedDate = deliveryDate.toLocaleDateString('en-IN', { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[60vh] text-center animate-in fade-in zoom-in duration-500">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
        <CheckCircle size={48} />
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Order Confirmed!</h1>
      <p className="text-slate-500 text-lg mb-8 max-w-md">
        Thank you for shopping with LuxeMarket. Your order <span className="font-mono font-bold text-slate-700">#{orderId}</span> has been placed successfully.
      </p>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 max-w-md w-full mb-8 text-left">
        <div className="flex items-start space-x-4">
          <div className="bg-indigo-50 p-3 rounded-lg text-indigo-600">
            <Package size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900">Estimated Delivery</h3>
            <p className="text-indigo-600 font-medium text-lg mt-1">{formattedDate}</p>
            <p className="text-sm text-slate-400 mt-2">You will receive a tracking link via SMS/Email shortly.</p>
          </div>
        </div>
      </div>

      <Link 
        to="/"
        className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold inline-flex items-center space-x-2 hover:bg-slate-800 transition-colors"
      >
        <span>Continue Shopping</span>
        <ArrowRight size={20} />
      </Link>
    </div>
  );
};

export default CheckoutSuccess;