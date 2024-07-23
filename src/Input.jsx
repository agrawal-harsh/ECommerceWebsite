import { useField, useFormik } from "formik";
import React from "react";
import formikInputHOC from "./formikInputHOC";

function Input({ id, lable,name, className,touched,error, ...rest }) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {lable}
      </label>
      <input
        id={id}
        required
        className={
          "w-72 md:w-80 px-2 rounded bg-white border border-gray-300 mt-4" +
          " " +
          className
        }
        {...rest}
      ></input>
      {touched && error && <div className="text-red-500">{error}</div>}
    </div>
  );
}
export const FormikInput = formikInputHOC(Input);
export default Input;
