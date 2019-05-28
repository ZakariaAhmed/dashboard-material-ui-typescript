import React from "react";
import { Route } from "react-router";
import Layout from "./layout/Layout";
import "./App.css";
import GAAccountManagement from "./views/GAAccountManagement/GAAccountManagement";
import history from "./history";
import { Router, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" render={props => <GAAccountManagement {...props} />} />
      </Switch>
    </Router>
  );
};

export default App;
