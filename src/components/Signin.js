import React from "react";
import "../css/marketplace.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginAsync } from "../slices/authservice";
import Topnavbar from "./Topnavbar";
import Footer from "./Footer";
import google from "../img/download.svg";
import { useNavigate } from "react-router-dom";
// import { useSelect } from '@mui/base';

const Signin = () => {
  const [showError, setShowError] = useState({});
  const [submit, setSubmit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email Required";
    }
    if (!values.password) {
      errors.password = "Password Required";
    }

    return errors;
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowError(validate(formData));
    await dispatch(loginAsync(formData));
    setSubmit(true);
    if (JSON.parse(localStorage.getItem("token"))) {
      navigate("/profile");
    } else {
      alert("invalid credential");
    }
  };

  useEffect(() => {
    if (Object.keys(showError).length == 0 && submit) {
    }
  }, [showError]);

  const emptyEmailfunc = () => {
    setShowError("");
  };
  const emptyPasswordfunc = () => {
    setShowError("");
  };

  return (
    <>
      <div className="body">
        <div className="container">
          <Topnavbar />

          <div className="signin_section">
            <div className="signinTitle">
              <h1 className="loginColor">Login</h1>
              <p className="accountColor">
                Don't have an account yet?{" "}
                <span className="signupColor"> Sign Up </span>
              </p>
            </div>

            <div className="credentialSection">
              <form onSubmit={handleSubmit}>
                <div className="email">
                  <label className="emailLabel"> Enter Email*</label> <br />
                  <input
                    className="inputEmail rounded-md"
                    type="email"
                    placeholder="Enter Your Email Id."
                    name="email"
                    onClick={emptyEmailfunc}
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
                    placeholder="Enter Your Password"
                    name="password"
                    onClick={emptyPasswordfunc}
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
                    className="LoginBtn rounded-md"
                    type="submit"
                    value="Login"
                    placeholder="Login"
                  />
                </div>

                <div className="forgot">
                  <span className="forgotP">Forgot Password?</span>
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
                      <span className="signinSpan"> Sign In With Google</span>
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

export default Signin;
