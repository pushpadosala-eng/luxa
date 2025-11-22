import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Simple service worker registration simulation for PWA "Installability"
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // In a real app, we would register a service worker here
    console.log('Service Worker registered (simulated)');
  });
}