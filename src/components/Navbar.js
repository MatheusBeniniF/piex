import React from "react";
import { NavLink } from "react-router-dom";
import LogoNova from "../img/LogoNova.jpeg";
import "../styles/navbar.css";

const Navbar = () => {
  // Função para rolar para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adiciona uma animação suave ao scroll
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={LogoNova} alt="Projeto Life Logo" className="navbar-logo" />
        <h1>Projeto Life</h1>
      </div>
      <ul>
        <li>
          <NavLink to="/" onClick={scrollToTop}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/sobre-e-servicos" onClick={scrollToTop}>
            Sobre e Serviços
          </NavLink>
        </li>
        <li>
          <NavLink to="/esportes-e-parceiros" onClick={scrollToTop}>
            Esportes e Parceiros
          </NavLink>
        </li>
        <li>
          <NavLink to="/testemunhos-e-contato" onClick={scrollToTop}>
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
