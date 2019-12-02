import React from 'react'
import { connect } from 'react-redux'

import { postSurveyAction } from '../../redux/actions'

import SurveyForm from '../form/SurveyForm'

const SurveyNew = ({ postSurveyAction }) => {
  const initialValues = {
    surveyTitle: '',
    subjectLine: '',
    emailBody: '',
    recipientList: ''
  }

  const validationSchema = yup =>
    yup.object().shape({
      surveyTitle: yup.string().required('Please enter a title'),
      subjectLine: yup.string().required('Please enter a subject line'),
      emailBody: yup.string().required('Please enter the body of the email'),
      recipientList: yup
        .string()
        .required('Please enter email addresses to send your survey to')
    })

  const header = 'Create a new Survey'

  return (
    <SurveyForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      header={header}
      formAction={postSurveyAction}
    />
  )
}

export default connect(undefined, { postSurveyAction })(SurveyNew)
