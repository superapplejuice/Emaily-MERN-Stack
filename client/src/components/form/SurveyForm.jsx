import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";

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
import FormField from "./FormField";

const SurveyForm = ({ header, formAction }) => {
  const initialValues = {
    surveyTitle: "",
    subjectLine: "",
    emailBody: "",
    recipientList: ""
  };

  const validationSchema = yup.object().shape({
    surveyTitle: yup.string().required("Please enter a title"),
    subjectLine: yup.string().required("Please enter a subject line"),
    emailBody: yup.string().required("Please enter the body of the email"),
    recipientList: yup
      .string()
      .required("Please enter email addresses to send your survey to")
  });

  return (
    <Fragment>
      <h4>{header}</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          formAction(values);
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
