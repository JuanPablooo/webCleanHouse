import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Route from "./Route";

//Importe das páginas/componentes
import { store } from "../store/store";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Cadastro from "../components/Cadastro/Cadastro";
import HomeCliente from "../components/HomeCliente/HomeCliente";

const NotFound = () => {
  return (
    <div>
      <h1>404 page not found</h1>
    </div>
  );
};

const Routes = () => (
  <Router>
    <div className="App">
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/home/cliente" component={HomeCliente} isPrivate />
          <Route component={NotFound} />
        </Switch>
      </Provider>
    </div>
  </Router>
);

export default Routes;
