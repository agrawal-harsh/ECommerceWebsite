import React from "react";
import { Formik,Form, withFormik} from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { HiOutlineLogin } from "react-icons/hi";
import Input  from "./Input";

function callSubmitApi () {
    console.log(values.userName,values.password);
}

const schema = Yup.object().shape({

    userName:Yup.string().min(5).required(),
    password:Yup.string().min(8).required(),
})

const initialValues={
    userName:"",
    password: "",
} 

function LoginPage({errors,touched,values,handleSubmit,handleBlur,handleChange,dirty,resetForm,isValid}) {




    return(
        <div className="w-full h-full flex flex-col justify-center items-center mx-auto">

        <div>
            <form
            onSubmit={handleSubmit}
            className="flex flex-col  md:w-96 p-5 rounded-md md:shadow-md bg-gray-100 items-center">

            <HiOutlineLogin  className="text-9xl text-orange-500 my-9"/>

            <h1 className="text-2xl text-orange-500 font-bold self-center mb-4">
                Login to buy!
            </h1>
            <div>
            <Input 
                label = "enter user name"
                id = "userName"
                name = "userName"
                values={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
                touched = {touched.userName}
                error = {errors.userName} 
                placeholder = "user name"
                autoComplete = "user name"
                className = ""
                type = "text"
            />



            <Input 
                label = "enter password"
                id = "password"
                name = "password"
                values={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                touched = {touched.password}
                error = {errors.password} 
                placeholder = "Enter password"
                autoComplete = "last-password"
                className = ""
                type = "password"
            />  

            </div>

            <div className="flex justify-evenly mt-4 self-stretch">
            <button type="submit" className="px-2 py-1 bg-orange-500 text-white rounded-md w-28 disabled:bg-orange-300"  disabled = {!dirty || !isValid}>Login</button>
            <button type ="button" onClick={resetForm} className="px-2 py-1 bg-orange-500 text-white rounded-md w-28">Reset</button>
            </div>

            </form>

            <div  className="text-orange-500 mt-4">
            <Link to = {"../forgotPassword"}>
            Forgot Password?
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
validationSchema : schema,
});

export default formikHOC(LoginPage);