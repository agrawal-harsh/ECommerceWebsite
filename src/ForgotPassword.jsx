import React from "react";
import { Formik, useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { GiNightSleep } from "react-icons/gi";

function ForgotPassword() {

    function callSubmitApi () {
        console.log(values.email);
    }

    const schema = Yup.object().shape({
        email:Yup.string().required(),
    })

    const {handleSubmit,handleChange,handleBlur,values,resetForm,errors,touched,isValid,dirty} = useFormik({
        initialValues:{
            email:"",
        } ,
        onSubmit : callSubmitApi,
        validationSchema : schema,
    }); 

    return(
        <div className="w-full h-full flex flex-col justify-center items-center mx-auto">

        <div>

            <form
            onSubmit={handleSubmit}
            className="flex flex-col  md:w-96 p-5 rounded-md md:shadow-md bg-gray-100 items-center">

            <GiNightSleep  className="text-9xl text-orange-500 my-9"/>

            <h1 className="text-2xl text-orange-500 font-bold self-center mb-4">
                Keep Moving!
            </h1>
            <div>
            <label htmlFor="email" className="sr-only">
            Enter email address
            </label>
            <input 
            value = {values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            name="email"
            placeholder="Email-address"
            type="text"
            id="email"
            autoComplete="email"
            required
            className="w-72 md:w-80 px-2 rounded bg-white border border-gray-300 mt-4"></input>
            {touched.email && errors.email && <div className="text-red-500">{errors.email}</div>}

            </div>

            <div className="flex flex-col mt-4 self-stretch gap-4">
            <button type="submit" className="px-2 py-1 bg-orange-500 text-white rounded-md  disabled:bg-orange-300" disabled = {!dirty || !isValid}>Request Password</button>
            <button type ="button" onClick= {resetForm} className="px-2 py-1 bg-orange-500 text-white rounded-md ">Reset</button>
            </div>

            </form>

            <div  className="text-orange-500 mt-4">
            <Link to = {"../login"}>
            Back to Login
            </Link>
            </div>

            <div className=" mt-2">Don't have an account?&emsp;
            <Link className="text-orange-500" to = {"../signup"}>
            Signup!
            </Link>
            </div>
            
        </div>

        </div>
    )
}
export default ForgotPassword;