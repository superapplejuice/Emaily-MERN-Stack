import React from 'react'
import { useField } from 'formik'

const FormField = ({ label, ...props }) => {
  const [field, { error, touched }] = useField(props)

  return (
    <div>
      <label>{label}</label>
      <input {...field} {...props} />
      {error && touched && <label className='red-text'>{error}</label>}
      <br />
    </div>
  )
}

export default FormField
