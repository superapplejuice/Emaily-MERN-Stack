import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { fetchUserAction } from "../redux/actions";

import Dashboard from "./main/Dashboard";
import Header from "./main/Header";
import Landing from "./main/Landing";
import AddCredits from "./credits/AddCredits";
import SurveyNew from "./survey/SurveyNew";

const App = ({ fetchUserAction }) => {
  useEffect(() => {
    fetchUserAction();
    // eslint-disable-next-line
  }, []);

  const routesHelper = () => {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/surveys/new" component={SurveyNew} />
        <Route path="/add_credits" component={AddCredits} />
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
