import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import CheckoutSuccess from './pages/CheckoutSuccess';
import ProductDetails from './pages/ProductDetails';
import AiAssistant from './components/AiAssistant';
import InstallBanner from './components/InstallBanner';

const App: React.FC = () => {
  return (
    <HashRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout-success" element={<CheckoutSuccess />} />
            </Routes>
          </main>
          <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
            <div className="container mx-auto px-4">
              <p>&copy; {new Date().getFullYear()} LuxeMarket. All rights reserved.</p>
              <p className="mt-2">Premium brands: Nike, Adidas, Calvin Klein, US Polo Assn.</p>
            </div>
          </footer>
          <AiAssistant />
          <InstallBanner />
        </div>
      </CartProvider>
    </HashRouter>
  );
};

export default App;