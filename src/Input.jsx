import { useField, useFormik } from "formik";
import React from "react";

function Input({ id, lable,name, className, ...rest }) {

    const [data,meta] = useField(name);
    const {value,onBlur,onChange} = data;
    const {error,touched} = meta;

  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {lable}
      </label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
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
export default Input;
