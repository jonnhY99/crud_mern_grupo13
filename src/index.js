import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'; // Tailwind u otros estilos

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Registro del Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js")
      .then(reg => console.log("✅ SW registrado", reg))
      .catch(err => console.error("❌ Error registrando SW", err));
  });
}
