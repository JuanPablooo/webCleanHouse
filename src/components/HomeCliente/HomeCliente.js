import React from "react";
import { signOut } from "../../services/auth";
import { Link } from "react-router-dom";

export default function HomeCliente() {
  return (
    <div>
      <h1>Home Clientes</h1>
      <Link
        to="/"
        className="btn btn-primary"
        onClick={() => {
          signOut();
        }}
      >
        sair
      </Link>
    </div>
  );
}
