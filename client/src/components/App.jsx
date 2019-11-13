import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Dashboard from "./Dashboard";
import Header from "./Header";
import Landing from "./Landing";

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
      <div>
        <BrowserRouter>
          <Header />
          {routesHelper()}
        </BrowserRouter>
      </div>
    );
  };

  return rootRender();
};

export default App;
