import React, { Fragment } from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'

import {
  surveyTitle,
  subjectLine,
  emailBody,
  recipientList,
  survey_title,
  subject_line,
  email_body,
  recipient_list
} from './form-utils/types'
import FormField from './form-utils/FormField'

const SurveyForm = ({
  initialValues,
  validationSchema,
  header,
  formAction
}) => (
  <Fragment>
    <h4>{header}</h4>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema(yup)}
      onSubmit={(values, { setSubmitting }) => {
        formAction(values)
        setSubmitting(false)
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
              className='btn waves-effect waves-light'
              type='submit'
              disabled={isSubmitting}
            >
              Submit
              <i className='material-icons right'>send</i>
            </button>
          </Form>
        )
      }}
    </Formik>
  </Fragment>
)

export default SurveyForm
