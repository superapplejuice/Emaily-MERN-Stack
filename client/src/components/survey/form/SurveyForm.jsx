import React, { Fragment } from "react";
import { withFormik, Form } from "formik";
import * as yup from "yup";

import {
  surveyTitle,
  subjectLine,
  emailBody,
  recipientList,
  survey_title,
  subject_line,
  email_body,
  recipient_list,
  surveyForm
} from "./types";
import FormField from "./FormField";

const SurveyForm = ({ isSubmitting, header }) => {
  return (
    <Fragment>
      <h4>{header}</h4>
      <Form>
        <FormField name={surveyTitle} label={survey_title} />
        <FormField name={subjectLine} label={subject_line} />
        <FormField name={emailBody} label={email_body} />
        <FormField name={recipientList} label={recipient_list} />
        <button
          className="btn waves-effect waves-light"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
      </Form>
    </Fragment>
  );
};

const formEnhancer = withFormik({
  validationSchema: yup.object().shape({
    surveyTitle: yup.string().required("Please enter a title"),
    subjectLine: yup.string().required("Please enter a subject line"),
    emailBody: yup.string().required("Please enter the body of the email"),
    recipientList: yup
      .string()
      .required(
        "Please enter valid email addresses of the recipients who will receive your survey"
      )
  }),

  // initialValues
  mapPropsToValues: () => ({
    surveyTitle: "",
    subjectLine: "",
    emailBody: "",
    recipientList: ""
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log(values);
    setSubmitting(false);
  },

  displayName: surveyForm
});

export default formEnhancer(SurveyForm);
