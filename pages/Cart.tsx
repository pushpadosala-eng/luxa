import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { DELIVERY_FEE, FREE_DELIVERY_THRESHOLD } from '../constants';

const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate();

  const isFreeDelivery = totalPrice >= FREE_DELIVERY_THRESHOLD;
  const finalTotal = totalPrice + (isFreeDelivery ? 0 : DELIVERY_FEE);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
        <div className="w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center mb-6">
          <Trash2 size={48} className="text-slate-300" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Your cart is empty</h2>
        <p className="text-slate-500 mb-8">Looks like you haven't added anything yet.</p>
        <button 
          onClick={() => navigate('/shop')}
          className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-8">Shopping Cart ({cart.length} items)</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
              <div className="w-24 h-24 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-slate-900">{item.name}</h3>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <p className="text-sm text-slate-500">{item.brand} | {item.category}</p>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center bg-slate-100 rounded-lg p-1">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-white rounded-md transition-colors disabled:opacity-50"
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="mx-3 font-medium text-sm w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-white rounded-md transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="font-bold text-slate-900">
                    {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.price * item.quantity)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg sticky top-24">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Order Summary</h3>
            
            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Delivery</span>
                {isFreeDelivery ? (
                  <span className="text-green-600 font-medium">Free</span>
                ) : (
                  <span>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(DELIVERY_FEE)}</span>
                )}
              </div>
              {!isFreeDelivery && (
                <div className="text-xs text-slate-400 mt-1">
                  Add {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(FREE_DELIVERY_THRESHOLD - totalPrice)} more for free delivery.
                </div>
              )}
            </div>

            <div className="border-t border-slate-100 pt-4 mb-6">
              <div className="flex justify-between font-bold text-lg text-slate-900">
                <span>Total</span>
                <span>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(finalTotal)}</span>
              </div>
            </div>

            <button 
              onClick={() => navigate('/checkout-success')}
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-slate-800 transition-colors"
            >
              <span>Checkout</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;