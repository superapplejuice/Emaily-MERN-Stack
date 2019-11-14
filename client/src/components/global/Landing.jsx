import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const renderComponents = () => {
    return (
      <div>
        <Link to="/">Landing</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/survey/new">New Survey</Link>
      </div>
    );
  };

  return (
    <div>
      Landing Page
      {renderComponents()}
    </div>
  );
};

export default Landing;
