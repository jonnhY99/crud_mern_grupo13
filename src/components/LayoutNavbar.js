import React from 'react';

const LayoutNavbar = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">RetailAI</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Inicio</a>
            <a href="#menu" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Menú</a>
            <a href="#nosotros" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Sobre Nosotros</a>
            <a href="#contacto" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LayoutNavbar;