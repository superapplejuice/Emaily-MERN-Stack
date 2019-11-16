import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { fetchUserAction } from "../redux/actions";

import Dashboard from "./global/Dashboard";
import Header from "./global/Header";
import Landing from "./global/Landing";

import SurveyNew from "./survey/SurveyNew";

const App = props => {
  const { fetchUserAction } = props;

  useEffect(() => {
    fetchUserAction();
    // eslint-disable-next-line
  }, []);

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
        <div className="container">{routesHelper()}</div>
      </BrowserRouter>
    );
  };

  return rootRender();
};

export default connect(undefined, { fetchUserAction })(App);
