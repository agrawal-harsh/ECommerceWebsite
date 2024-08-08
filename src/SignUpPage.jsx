import "react";
import { withFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { SiGnuprivacyguard } from "react-icons/si";
import Input from "./Input";
import axios from "axios";
import {withUser,withAlert} from "./withProvider";

function callSubmitApi(values, bag) {
  console.log(values.fullName, values.password, values.email);
  axios
    .post("https://myeasykart.codeyogi.io/signup", {
      fullName: values.fullName,
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      bag.props.setUser(user);
      bag.props.setAlert({
        type: "success",
        message: "Signed Up Successfully",
      });
    })
    .catch(() =>
      bag.props.setAlert({ type: "failed", message: "Invalid Creditails" })
    );
}

const schema = Yup.object().shape({
  fullName: Yup.string().min(3, "Enter valid name").max(50).required(),
  email: Yup.string().email().required(),
  userName: Yup.string().min(5).required(),
  password: Yup.string().min(8).required(),
  confirmPassword: Yup.string().min(8).required(),
});

const initialValues = {
  fullName: "",
  email: "",
  userName: "",
  password: "",
  confirmPassword: "",
};

function SignUpPage({
  errors,
  touched,
  values,
  handleSubmit,
  handleBlur,
  handleChange,
  dirty,
  resetForm,
  isValid,
}) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center mx-auto">
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col  md:w-96 p-5 rounded-md md:shadow-md bg-gray-100 items-center"
        >
          <SiGnuprivacyguard className="text-9xl text-orange-500 my-9" />
          <h1 className="text-2xl text-orange-500 font-bold self-center mb-4">
            SignUp to buy!
          </h1>
          <div>
            <Input
              label="enter your name"
              id="fullName"
              name="fullName"
              required
              values={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.fullName}
              error={errors.fullName}
              placeholder="full Name"
              autoComplete="full name"
              className=""
              type="text"
            />

            <Input
              label="enter Email-address"
              id="email"
              name="email"
              values={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.email}
              error={errors.email}
              placeholder="Enter Email"
              autoComplete="email-address"
              className=""
              type="email"
            />

            <Input
              label="enter user name"
              id="userName"
              name="userName"
              values={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.userName}
              error={errors.userName}
              placeholder="Enter user Name"
              autoComplete="user name"
              className=""
              type="text"
            />

            <Input
              label="enter your password"
              id="password"
              name="password"
              values={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.password}
              error={errors.password}
              placeholder="Enter password"
              autoComplete="password"
              className=""
              type="password"
            />

            <Input
              label="Confirm your password"
              id="confirmPassword"
              name="confirmPassword"
              values={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.confirmPassword}
              error={errors.confirmPassword}
              placeholder="confirm your password"
              autoComplete="confirmPassword"
              className=""
              type="password"
            />
          </div>

          <div className="flex justify-around self-stretch mt-4">
            <button
              type="submit"
              className="px-2 py-1 bg-orange-500 text-white rounded-md w-28 disabled:bg-orange-300"
              disabled={!dirty || !isValid}
            >
              Submit
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

        <div className=" mt-4">
          Already have an account?&emsp;
          <Link className="text-orange-500" to={"../login"}>
            Login!
          </Link>
        </div>
      </div>
    </div>
  );
}

const formikHOC = withFormik({
  initialValues: initialValues,
  validationSchema: schema,
  handleSubmit: callSubmitApi,
});
const EasySignupPage = formikHOC(SignUpPage);
export default withAlert(withUser(EasySignupPage));
