import React from "react";
import Logo from "../img/LogoNova.jpeg";
import "../navbar.css"; // Certifique-se de criar o arquivo CSS correspondente.

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">
          <img src={Logo} alt="Logo" className="logo-img" />
        </a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home">Início</a>
        </li>
        <li>
          <a href="#sobre-nos" >Sobre Nós</a>
        </li>
        <li>
          <a href="#servicos-oferecidos" >Nossos Projetos</a>
        </li>
      </ul>
    </nav>
  );
};
