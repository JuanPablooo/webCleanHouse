import React from "react";
import "./efeitos/ancora";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark 
      bg-blue d-flex align-items-start"
    >
      <div className="logotipo"></div>

      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navegacao"
      >
        <span className="navbar-toggler-icon mr-3"></span>
      </button>

      <div id="navegacao" className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="#section-o-que-somos" className="nav-link">
              Quem somos ?
            </a>
          </li>
          <li className="nav-item">
            <a href="#section-como-funciona" className="nav-link">
              Como funciona ?
            </a>
          </li>
          <li className="nav-item">
            <a href="#section-vantagens" className="nav-link">
              Vantagens
            </a>
          </li>
          <li className="nav-item">
            <a href="#section-regioes" className="nav-link">
              Regiões
            </a>
          </li>
          <li className="nav-item">
            <a href="#section-depoimentos" className="nav-link">
              Depoimentos
            </a>
          </li>
        </ul>
        <button className="btn btn-blue-dark btn-radius btn-nav">Entrar</button>
      </div>
    </nav>
  );
}
