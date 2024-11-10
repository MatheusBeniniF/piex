import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Projeto Life</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sobre-e-servicos">Sobre e Serviços</Link>
        </li>
        <li>
          <Link to="/esportes-e-parceiros">Esportes e Parceiros</Link>
        </li>
        <li>
          <Link to="/testemunhos-e-contato">Testemunhos e Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
