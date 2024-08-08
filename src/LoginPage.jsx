import { useContext } from "react";
import { withFormik } from "formik";
import { Link, Navigate } from "react-router-dom";
import * as Yup from "yup";
import { HiOutlineLogin } from "react-icons/hi";
import Input from "./Input";
import axios from "axios";
import { UserContext } from "./Context";
import { withAlert,withUser } from "./withProvider";

function callSubmitApi(values,bag) {
  axios
    .post("https://myeasykart.codeyogi.io/login", {
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      bag.props.setUser(user);
      bag.props.setAlert({type:"success" , message : "Logged in Successfully"})
    })
    .catch((error) => {
      bag.props.setAlert({type:"failed" , message : "Invalid Creditails"})
    });
}

const schema = Yup.object().shape({
  email: Yup.string().min(5).required(),
  password: Yup.string().min(8).required(),
});

const initialValues = {
  email: "",
  password: "",
};

function LoginPage({
  errors,
  touched,
  values,
  handleSubmit,
  handleBlur,
  handleChange,
  dirty,
  resetForm,
  isValid
}) {
    const {user} = useContext(UserContext);
    if(user){
        return <Navigate to = "/" />
    }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center mx-auto">
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col  md:w-96 p-5 rounded-md md:shadow-md bg-gray-100 items-center"
        >
          <HiOutlineLogin className="text-9xl text-orange-500 my-9" />

          <h1 className="text-2xl text-orange-500 font-bold self-center mb-4">
            Login to buy!
          </h1>
          <div>
            <Input
              label="enter Email Address"
              id="email"
              name="email"
              values={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.email}
              error={errors.email}
              placeholder="Email Address"
              autoComplete="email"
              className=""
              type="email"
            />

            <Input
              label="enter password"
              id="password"
              name="password"
              values={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.password}
              error={errors.password}
              placeholder="Enter password"
              autoComplete="last-password"
              className=""
              type="password"
            />
          </div>

          <div className="flex justify-evenly mt-4 self-stretch">
            <button
              type="submit"
              className="px-2 py-1 bg-orange-500 text-white rounded-md w-28 disabled:bg-orange-300"
              disabled={!dirty || !isValid}
            >
              Login
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="px-2 py-1 bg-orange-500 text-white rounded-md w-28"
            >
              Reset
            </button>
          </div>
        </form>

        <div className="text-orange-500 mt-4">
          <Link to={"../forgotPassword"}>Forgot Password?</Link>
        </div>

        <div className=" mt-2">
          Don't have an account?&emsp;
          <Link className="text-orange-500" to={"../signup"}>
            Signup!
          </Link>
        </div>
      </div>
    </div>
  );
}

const formikHOC = withFormik({
  initialValues: initialValues,
  handleSubmit: callSubmitApi,
  validationSchema: schema,
});

export default withAlert(withUser(formikHOC(LoginPage)));
