import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LayoutNavbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">RetailAI</span>
          </div>

          {/* Botón hamburguesa */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuAbierto ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menú en pantallas grandes */}
          <ul className="hidden md:flex space-x-6 items-center">
            <li><Link to="/" className="hover:text-blue-600">Inicio</Link></li>
            <li><Link to="/productos" className="hover:text-blue-600">Demo</Link></li>
            <li><Link to="/nosotros" className="hover:text-blue-600">Sobre Nosotros</Link></li>
            <li><Link to="/contacto" className="hover:text-blue-600">Contacto</Link></li>
          </ul>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {menuAbierto && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-2">
            <li><Link to="/" onClick={toggleMenu} className="block py-2">Inicio</Link></li>
            <li><Link to="/productos" onClick={toggleMenu} className="block py-2">Demo</Link></li>
            <li><Link to="/nosotros" onClick={toggleMenu} className="block py-2">Sobre Nosotros</Link></li>
            <li><Link to="/contacto" onClick={toggleMenu} className="block py-2">Contacto</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default LayoutNavbar;
