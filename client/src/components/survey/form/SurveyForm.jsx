import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";

import FormField from "./FormField";

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
        onSubmit={values => console.log(values)}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <FormField name="surveyTitle" label="Survey Title" />
              <FormField name="subjectLine" label="Subject Line" />
              <FormField name="emailBody" label="Email Body" />
              <FormField name="recipientList" label="Recipient List" />
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
