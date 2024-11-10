import React from "react";
import { NavLink } from "react-router-dom";
import LogoNova from "../img/LogoNova.jpeg";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={LogoNova} alt="Projeto Life Logo" className="navbar-logo" />
        <h1>Projeto Life</h1>
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/sobre-e-servicos">Sobre e Serviços</NavLink>
        </li>
        <li>
          <NavLink to="/esportes-e-parceiros">Esportes e Parceiros</NavLink>
        </li>
        <li>
          <NavLink to="/testemunhos-e-contato">Testemunhos e Contato</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
