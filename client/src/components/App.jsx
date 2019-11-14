import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "./global/Dashboard";
import Header from "./global/Header";
import Landing from "./global/Landing";

import SurveyNew from "./survey/SurveyNew";

const App = () => {
  const routesHelper = () => {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/survey/new" component={SurveyNew} />
      </Switch>
    );
  };

  const rootRender = () => {
    return (
      <BrowserRouter>
        <Header />
        {routesHelper()}
      </BrowserRouter>
    );
  };

  return rootRender();
};

export default App;
