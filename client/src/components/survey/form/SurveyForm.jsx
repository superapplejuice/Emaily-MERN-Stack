import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";

import FormField from "./FormField";
import {
  surveyTitle,
  subjectLine,
  emailBody,
  recipientList,
  survey_title,
  subject_line,
  email_body,
  recipient_list
} from "./types";

const SurveyForm = () => {
  const initialValues = {
    surveyTitle: "",
    subjectLine: "",
    emailBody: "",
    recipientList: ""
  };

  const surveySchema = yup.object().shape({
    surveyTitle: yup.string().required("Please enter a title"),
    subjectLine: yup.string().required("Please enter a subject line"),
    emailBody: yup.string().required("Please enter the body of the email"),
    recipientList: yup
      .string()
      .required(
        "Please enter email addresses of recipients who will receive your survey"
      )
  });

  return (
    <Fragment>
      <h4>Create a new Survey</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={surveySchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => {
          return (
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
          );
        }}
      </Formik>
    </Fragment>
  );
};

export default SurveyForm;
