import React from "react";
import { Formik,Form} from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { HiOutlineLogin } from "react-icons/hi";
import { FormikInput } from "./Input";


function LoginPage() {

    function callSubmitApi () {
        console.log(values.userName,values.password);
    }

    const schema = Yup.object().shape({

        userName:Yup.string().min(5).required(),
        password:Yup.string().min(8).required(),
    })


    return(
        <div className="w-full h-full flex flex-col justify-center items-center mx-auto">

        <div>
        <Formik
        initialValues={{
            userName:"",
            password: "",
        } }
        onSubmit = {callSubmitApi}
        validationSchema = {schema}
        >
            <Form
            className="flex flex-col  md:w-96 p-5 rounded-md md:shadow-md bg-gray-100 items-center">

            <HiOutlineLogin  className="text-9xl text-orange-500 my-9"/>

            <h1 className="text-2xl text-orange-500 font-bold self-center mb-4">
                Login to buy!
            </h1>
            <div>
            <FormikInput 
                label = "enter user name"
                id = "userName"
                name = "userName"
                placeholder = "user name"
                autoComplete = "user name"
                className = ""
                type = "text"
            />



            <FormikInput 
                label = "enter password"
                id = "password"
                name = "password"
                placeholder = "Enter password"
                autoComplete = "last-password"
                className = ""
                type = "password"
            />  

            </div>

            <div className="flex justify-evenly mt-4 self-stretch">
            <button type="submit" className="px-2 py-1 bg-orange-500 text-white rounded-md w-28 disabled:bg-orange-300" >Login</button>
            <button type ="button" className="px-2 py-1 bg-orange-500 text-white rounded-md w-28">Reset</button>
            </div>

            </Form>
            </Formik>

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
export default LoginPage;