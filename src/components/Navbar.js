import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoNova from "../img/LogoNova.jpeg";
import "../styles/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuAndScrollToTop = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={LogoNova} alt="Projeto Life Logo" className="navbar-logo" />
        <h1 className="navbar-title">Projeto Life</h1>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" onClick={closeMenuAndScrollToTop}>
            Início
          </NavLink>
        </li>
        <li>
          <NavLink to="/sobre-e-servicos" onClick={closeMenuAndScrollToTop}>
            Sobre e Serviços
          </NavLink>
        </li>
        <li>
          <NavLink to="/esportes-e-parceiros" onClick={closeMenuAndScrollToTop}>
            Esportes e Parceiros
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
