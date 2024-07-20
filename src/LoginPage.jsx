import React from "react";
import { Formik, useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { HiOutlineLogin } from "react-icons/hi";


function LoginPage() {

    function callSubmitApi () {
        console.log(values.userName,values.password);
    }

    const schema = Yup.object().shape({
        userName:Yup.string().min(5).required(),
        password:Yup.string().min(8).required(),
    })

    const {handleSubmit,handleChange,handleBlur,values,resetForm,errors,touched,isValid,dirty} = useFormik({
        initialValues:{
            userName:"",
            password: "",
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

            <HiOutlineLogin  className="text-9xl text-orange-500 my-9"/>

            <h1 className="text-2xl text-orange-500 font-bold self-center mb-4">
                Login to buy!
            </h1>
            <div>
            <label htmlFor="userName" className="sr-only">
            Enter user name
            </label>
            <input 
            value = {values.userName}
            onChange={handleChange}
            onBlur={handleBlur}
            name="userName"
            placeholder="user name"
            type="text"
            id="userName"
            autoComplete="userName"
            required
            className="w-72 md:w-80 px-2 rounded bg-white border border-gray-300 mt-4"></input>
            {touched.userName && errors.userName && <div className="text-red-500">{errors.userName}</div>}



            <label htmlFor="password" className="sr-only">
            Enter password
            </label>
            <input 
            value = {values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            name="password"
            placeholder="password"
            type="password"
            id="password"
            autoComplete="password"
            required
            className="w-72 md:w-80 px-2 rounded bg-white border border-gray-300 mt-4"></input>
            {touched.password && errors.password && <div className="text-red-500">{errors.password}</div>}

            </div>

            <div className="flex justify-evenly mt-4 self-stretch">
            <button type="submit" className="px-2 py-1 bg-orange-500 text-white rounded-md w-28 disabled:bg-orange-300" disabled = {!dirty || !isValid}>Login</button>
            <button type ="button" onClick= {resetForm} className="px-2 py-1 bg-orange-500 text-white rounded-md w-28">Reset</button>
            </div>

            </form>

            <div  className="text-orange-500 mt-4">
            <Link to = {"./forgotPassword"}>
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
export default LoginPage;