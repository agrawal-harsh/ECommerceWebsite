import React from "react";
import { Formik, useFormik ,Form, withFormik} from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { GiNightSleep } from "react-icons/gi";
import Input from "./Input";


function callSubmitApi () {
    console.log(values.email);
}

const schema = Yup.object().shape({
    email:Yup.string().email().required(),
})

const initialValues = {
    email:"",
}

function ForgotPassword({errors,touched,values,handleSubmit,handleBlur,handleChange,resetForm,dirty,isValid}) {


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
            <Input 
                label = "enter Email-address"
                id = "email"
                name = "email"
                values={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                touched = {touched.email}
                error = {errors.email} 
                placeholder = "Enter Email"
                autoComplete = "email-address"
                className = ""
                type = "email"
            />
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

const formikHOC = withFormik({
    initialValues : initialValues,
    onSubmit : callSubmitApi,
    validationSchema : schema})


export default formikHOC(ForgotPassword);