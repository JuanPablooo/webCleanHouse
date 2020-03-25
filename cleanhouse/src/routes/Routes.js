import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Importe das páginas/componentes
import Home from "../components/home/Home";

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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
