import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import LogoNova from "../img/LogoNova.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Início', to: '/' },
    { name: 'Sobre e Serviços', to: '/sobre-e-servicos' },
    { name: 'Esportes e Parceiros', to: '/esportes-e-parceiros' },
    { name: 'Eventos', to: '/eventos' },
    { name: 'Galeria dos Apoiadores', to: '/galeria-dos-apoiadores' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <img src={LogoNova} alt="Logo" className="h-16 w-16 object-contain" />
            <span className="text-2xl font-bold text-gray-900">Projeto Life</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors ${
                    isActive
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2 px-4 text-base font-medium ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export { Navbar };