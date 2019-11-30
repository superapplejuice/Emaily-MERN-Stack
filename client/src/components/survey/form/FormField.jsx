import React, { Fragment } from "react";
import { useField } from "formik";

const FormField = ({ label, ...props }) => {
  const [field, { error, touched }] = useField(props);
  return (
    <Fragment>
      <div>{label}</div>
      <input {...field} {...props} />
      {error && touched && <div className="red-text">{error}</div>}
    </Fragment>
  );
};

export default FormField;
