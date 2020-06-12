import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { isSignedIn } from "../services/auth";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  //Var que indica se o usuário está logado
  const signed = isSignedIn();

  //Verifica se o usuário não está logado e se a rota é privada
  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  //Verifica se o usuário está logado e a rota é pública
  // if (signed && !isPrivate) {
  //   return <Redirect to={"/home/cliente"} />;
  // }

  //Caso o usuário esteja logado e acessando uma rota privada
  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
