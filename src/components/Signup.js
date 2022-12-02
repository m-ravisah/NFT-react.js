import React from "react";
import "../css/marketplace.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Topnavbar from "./Topnavbar";
import Footer from "./Footer";
import google from "../img/download.svg";
import { useNavigate } from "react-router-dom";
import { registerAsync } from "../slices/authservice";

const Signup = () => {
  const [showError, setShowError] = useState({});
  // const [checkEmail, setCheckEmail] = useState()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [submit, setSubmit] = useState(false);
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function validation(values) {
    const errors = {};
    var checkname = /^[A-Za-z]+([\ A-Za-z]+)*/;
    var resultusername = checkname.test(values.username);
    var checkpassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var resultpassword = checkpassword.test(values.password);
    var checkemail = /\S+@\S+\.\S+/;
    var resultemail = checkemail.test(values.email);

    //   if (values?.email?.length > 0) {
    // 	emailData && emailData?.data?.map((ele) => {
    // 	  if (ele.email == values?.email) {
    // 		errors.email = "Email Already Exists"
    // 	  }
    // 	})
    //   }

    if (!values.username) {
      errors.username = "Name is Required.";
    } else if (resultusername === false) {
      errors.username = "Name must Characters.";
    }

    if (!values.password) {
      errors.password = "Password is Required.";
    } else if (resultpassword === false) {
      errors.password =
        "Must be more than 8 characters with a capital letter, number, and special character.";
    }
    if (resultemail === false) {
      errors.email = "email should be vaildated";
    }
    if (!values.email) {
      errors.email = "Required email";
    }

    return errors;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowError(validation(formData));
    await dispatch(registerAsync(formData));
    setSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(showError).length == 0 && submit) {
      // dispatch(registerAsync(formData));
    }
  }, [showError]);

  const emptyfunc = () => {
    setShowError("");
  };

  return (
    <>
      <div className="body">
        <div className="container">
          <Topnavbar />

          <div className="signin_section">
            <div className="signinTitle">
              <h1 className="loginColor">Register</h1>
              <p className="accountColor">
                Already have an account?{" "}
                <span className="signupColor"> Sign In </span>
              </p>
            </div>

            <div className="credentialSection">
              <form onSubmit={handleSubmit}>
                <div className="nameDiv">
                  <label className="nameLabel"> Enter Name*</label> <br />
                  <input
                    className="inputName rounded-md"
                    type="text"
                    onClick={emptyfunc}
                    placeholder="Enter Name"
                    name="username"
                    value={formData?.username}
                    onChange={handleChange}
                  />
                  <p
                    className="passErr my-2 mx-4"
                    style={{ padding: "0", margin: "0", color: "red" }}
                  >
                    {showError?.username}
                  </p>
                </div>
                <div className="email">
                  <label className="emailLabel"> Enter Email*</label> <br />
                  <input
                    className="inputEmail rounded-md"
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData?.email}
                    onChange={handleChange}
                  />
                  <p
                    className="passErr my-2 mx-4"
                    style={{ padding: "0", margin: "0", color: "red" }}
                  >
                    {showError?.email}
                  </p>
                </div>
                <div className="password">
                  <label className="passwordLabel"> Enter Password*</label>{" "}
                  <br />
                  <input
                    type="password"
                    className="inputPassword rounded-md"
                    placeholder="Password"
                    id="password"
                    autoComplete="current-password"
                    name="password"
                    value={formData?.password}
                    onChange={handleChange}
                  />
                  <p
                    className="passErr my-2 mx-4"
                    style={{ padding: "0", margin: "0", color: "red" }}
                  >
                    {showError?.password}
                  </p>
                </div>

                <div className="checkbox">
                  <input type="checkbox" />
                  <span className="ml-3 checkLabel opacity-60">
                    Keep me logged in{" "}
                  </span>
                  <span className="sessionColor">
                    (session will expire after 1 week of inactivity)
                  </span>
                </div>

                <div className="">
                  <input
                    className="RegisterBtn rounded-md"
                    type="submit"
                    value="Submit"
                  />
                </div>

                <hr className="horizontalRule" />

                <div className="orDiv">
                  <span className="orSpan">or</span>
                </div>

                <div className="googleDiv">
                  <button className="googleSigninBtn rounded-sm">
                    <div>
                      <img src={google} alt="google" />
                    </div>
                    <div className="googleSignin mx-5">
                      <span className="signinSpan"> Sign Up With Google</span>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Signup;
