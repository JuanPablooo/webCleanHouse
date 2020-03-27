import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-blue">
        <Link To="/" className="navbar-brand bg-white">
          {" "}
        </Link>

        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navegacao"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navegacao" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link"> O que Somos?</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"> Como funciona?</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"> Vantagens</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"> Regiões</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"> Depoimentos</Link>
            </li>
          </ul>
          <button className="btn btn-blue-dark btn-radius btn-nav">
            Entrar
          </button>
        </div>
      </nav>
    );
  }
}
