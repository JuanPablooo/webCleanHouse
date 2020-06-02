import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

//Importe das páginas/componentes
import { store } from "../store/store";
import Home from "../components/home/Home";

import Cadastro from "../components/Cadastro/Cadastro";

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
          <Route path="/cadastro" component={Cadastro} />
          <Route component={NotFound} />
        </Switch>
      </Provider>
    </div>
  </Router>
);

export default Routes;
