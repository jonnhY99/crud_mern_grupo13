import React from 'react';
import { Link } from 'react-router-dom';

const LayoutNavbar = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">RetailAI</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Demo</Link></li>
            <li><a href="/nosotros" target="_blank" rel="noopener noreferrer" className="px-4 py-2 hover:text-blue-500">Sobre Nosotros</a>
            </li>
            <li><Link to="/contacto" className="px-4 py-2 hover:text-blue-500">Contacto</Link></li>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default LayoutNavbar;
