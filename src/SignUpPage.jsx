import React from "react";
import { Formik, useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { SiGnuprivacyguard } from "react-icons/si";


function SignUpPage() {

    function callSubmitApi () {
        console.log(values.fullName,values.password,values.email);
    }

    const schema = Yup.object().shape({
        fullName:Yup.string().min(3,"Enter valid name").max(50).required(),
        email:Yup.string().required(),
        userName:Yup.string().min(5).required(),
        password:Yup.string().min(8).required(),
        confirmPassword:Yup.string().min(8).required()
    })

    const {handleSubmit,handleChange,handleBlur,values,resetForm,errors,touched,isValid,dirty} = useFormik({
        initialValues:{
            fullName : "",
            email: "",
            userName:"",
            password: "",
            confirmPassword : ""
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
<SiGnuprivacyguard  className="text-9xl text-orange-500 my-9"/>
            <h1 className="text-2xl text-orange-500 font-bold self-center mb-4">
                SignUp to buy!
            </h1>
            <div>
            <label htmlFor="fullName" className="sr-only">
            Enter full Name
            </label>
            <input 
            value = {values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            name="fullName"
            placeholder="Full name"
            type="text"
            id="fullName"
            autoComplete="fullName"
            required
            className="w-72 md:w-80 px-2 rounded bg-white border border-gray-300"></input>
            {touched.fullName && errors.fullName && <div className="text-red-500">{errors.fullName}</div>}


            <label htmlFor="email" className="sr-only">
            Enter email address
            </label>
            <input 
            value = {values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            name="email"
            placeholder="Email-address"
            type="email"
            id="email"
            autoComplete="email"
            required
            className="w-72 md:w-80 px-2 rounded bg-white border border-gray-300 mt-4"></input>
            {touched.email && errors.email && <div className="text-red-500">{errors.email}</div>}

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


            <label htmlFor="confirmPassword" className="sr-only">
            Confirm Password
            </label>
            <input 
            value = {values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="confirmPassword"
            required
            className="w-72 md:w-80 px-2 rounded bg-white border border-gray-300 mt-4"></input>
            {touched.confirmPassword && errors.confirmPassword && <div className="text-red-500">{errors.confirmPassword}</div>}
            </div>

            <div className="flex justify-around self-stretch mt-4">
            <button type="submit" className="px-2 py-1 bg-orange-500 text-white rounded-md w-28 disabled:bg-orange-300" disabled = {!dirty || !isValid}>Submit</button>
            <button type ="button" onClick= {resetForm} className="px-2 py-1 bg-orange-500 text-white rounded-md w-28">Reset</button>
            </div>

            </form>

            <div className=" mt-4">Already have an account?&emsp;
            <Link className="text-orange-500" to = {"../login"}>
            Login!
            </Link>
            </div>
            
        </div>

        </div>
    )
}
export default SignUpPage;