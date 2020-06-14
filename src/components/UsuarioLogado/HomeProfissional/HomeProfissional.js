import React from "react";
import { signOut } from "../../../services/auth";
import { Link } from "react-router-dom";

export default function HomeProfissional() {
  return (
    <div>
      <h1>Home Profissional</h1>
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
