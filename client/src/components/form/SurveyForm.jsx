import React, { Fragment } from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { connect } from 'react-redux'

import { postSurveyAction } from '../../redux/actions'
import history from '../history'

import FormField from './form-utils/FormField'

const SurveyForm = ({ header, postSurveyAction }) => {
  const initialValues = {
    title: '',
    subject: '',
    body: '',
    recipients: ''
  }

  const validationSchema = yup.object().shape({
    title: yup.string().required('Please enter a title'),
    subject: yup.string().required('Please enter a subject line'),
    body: yup.string().required('Please enter the body of the email'),
    recipients: yup.string().required('Please enter valid email addresses')
  })

  // field names
  const title = 'title'
  const subject = 'subject'
  const body = 'body'
  const recipients = 'recipients'

  // field labels
  const Title = 'Title'
  const Subject = 'Subject'
  const Body = 'Body'
  const Recipients = 'Recipients'

  return (
    <Fragment>
      <h4>{header}</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          postSurveyAction(values)
          setSubmitting(false)
          history.push('/surveys/submit')
        }}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <FormField name={title} label={Title} />
              <FormField name={subject} label={Subject} />
              <FormField name={body} label={Body} />
              <FormField name={recipients} label={Recipients} />
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
}

export default connect(undefined, { postSurveyAction })(SurveyForm)
