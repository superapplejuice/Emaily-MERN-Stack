import React, { Fragment } from 'react'
import { useField } from 'formik'

const FormField = ({ label, ...props }) => {
  const [field, { error, touched }] = useField(props)

  return (
    <Fragment>
      <label>{label}</label>
      <input {...field} {...props} />
      {error && touched && <label className='red-text'>{error}</label>}
      <br />
    </Fragment>
  )
}

export default FormField
