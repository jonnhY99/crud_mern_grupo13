import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'; // Asegúrate que exista y tenga los estilos de Tailwind

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
