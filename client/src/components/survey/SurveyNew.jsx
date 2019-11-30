import React from "react";
import { connect } from "react-redux";

import { postSurveyAction } from "../../redux/actions";

import SurveyForm from "./form/SurveyForm";

const SurveyNew = ({ postSurveyAction }) => {
  const header = "Create a new Survey";

  return <SurveyForm header={header} formAction={postSurveyAction} />;
};

export default connect(undefined, { postSurveyAction })(SurveyNew);
