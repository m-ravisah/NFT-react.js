import React from "react";
import "../css/marketplace.css";
import { useRef } from "react";
import { useState, useEffect } from "react";
import Topnavbar from "./Topnavbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { getAsync, updateAsync } from "../slices/authservice";

const Edit = () => {
  const dispatch = useDispatch();
  const [showError, setShowError] = useState("");
  const [submit, setSubmit] = useState(false);
  const [coverImage, setCoverImage] = useState("");
  const [profileData, setProfileData] = useState('');

  const coverPic = useRef(null);
  const data = useSelector((state) => state?.auth?.user);
  const token = JSON.parse(localStorage.getItem("token"));



  useEffect(() => {
    if(token){
      dispatch(getAsync(token));
    }
  },  []);

  
  useEffect(()=>{
    if(data){
      setProfileData(data?.data)
    }
  },[profileData])
  


  
  
    const changePic = () => {
      coverPic.current.click();
    };
  // const [profileData, setProfileData] = useState({
  //   userName: "",
  //   firstName: "",
  //   lastName: "",
  //   phoneNumber: "",
  // });

  const dataPreview = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
    
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setCoverImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const formData = {
   username: profileData?.userName,
   firstname: profileData?.firstName,
   lastname: profileData?.lastName,
   phone_number: profileData?.phoneNumber,
  };


  const validate = (values) => {
    const errors = {};
    var checkname = /^[A-Za-z]+([\ A-Za-z]+)*/;
    var resultusername = checkname.test(values.userName);
    var checkfirstname = /^[A-Za-z]+([\ A-Za-z]+)*/;
    var resultfirstname = checkfirstname.test(values.firstName);
    var checklastname = /^[A-Za-z]+([\ A-Za-z]+)*/;
    var resultlastname = checklastname.test(values.lastName);

    if (!values.userName) {
      errors.userName = "userName is Required";
    } else if (resultusername === false) {
      errors.userName = "format is incorrect";
    }
    if (!values.firstName) {
      errors.firstName = "firstname is required";
    } else if (resultfirstname === false) {
      errors.firstName = "Only characters are allowed";
    }
    if (!values.lastName) {
      errors.lastName = "lastname is required";
    } else if (resultlastname === false) {
      errors.lastName = "Only characters are allowed";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "phoneNumber is required";
    }
    if (!values.coverPic) {
      errors.coverPic = "coverPic is required";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowError(validate(profileData));
    await dispatch(updateAsync(formData));
    setSubmit(true);
  };


  const emptyUserName = () => {
    setShowError("");
  };
  const emptyFirstName = () => {
    setShowError("");
  };
  const emptyLastName = () => {
    setShowError("");
  };
  const emptyPhoneNumber = () => {
    setShowError("");
  };
  const emptyCoverPic = () => {
    setShowError("");
  };

  return (
    <div className="body">
      <div className="container">
        <Topnavbar />
        <div className="mt-12 text-center">
          <div>
            <h2 className="text-white text-4xl text-primary text-center font-semibold mt-0 tracking-normal">
              Profile Edit
            </h2>
            <p className="mt-3 mb-2 text-lg font-medium text-white tracking-normal">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,
            </p>
          </div>
        </div>
        <div className="flex profileEdit p-2 mt-10">
          <div className="profileImageDiv col-sm-6 col-md-4 col-12 p-2 mr-4">
            <img src={coverImage} />
            <div
              className=" inset-0 flex justify-center align-center editicon"
              onClick={changePic}
            >
              <input
                type="file"
                ref={coverPic}
                hidden
                name="coverPic"
                onClick={emptyCoverPic}
                onChange={onImageChange}
              />
              <img
                className="absolute"
                src="https://img.icons8.com/external-anggara-glyph-anggara-putra/32/000000/external-edit-ui-basic-anggara-glyph-anggara-putra.png"
              />
            </div>
            <p
              className="passErr my-2"
              style={{ padding: "0", margin: "0", color: "red" }}
            >
              {showError?.coverPic}
            </p>
          </div>
          <div className="profileForm ml-4 p-2 mb-10 col-sm-6 col-md-8 col-12">
            <form
              className=""
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <div className="mt-0">
                <label className="font-urbanist text-white text-primary font-20 font-semibold">
                  User Name
                </label>
                <div>
                  <input
                    type="text"
                    name="userName"
                    placeholder="Enter username"
                    className=" w-full bg-transparent text-white my-2 px-2 py-3 border-2 rounded border-CBCBCB"
                    onClick={emptyUserName}
                    onChange={dataPreview}
                    value={profileData?.username}
                  />
                </div>
                <p
                  className="passErr my-2"
                  style={{ padding: "0", margin: "0", color: "red" }}
                >
                  {showError?.userName}
                </p>
              </div>

              <div className="mt-8">
                <label className="font-urbanist text-white text-primary font-20 font-semibold">
                  First Name
                </label>
                <div className="">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter first name"
                    className=" w-full bg-transparent text-white my-2 px-2 py-3 border-2 rounded border-CBCBCB"
                    onClick={emptyFirstName}
                    onChange={dataPreview}
                    value={profileData?.firstname}
                  />
                </div>
                <p
                  className="passErr my-2"
                  style={{ padding: "0", margin: "0", color: "red" }}
                >
                  {showError?.firstName}
                </p>
              </div>

              <div className="mt-8">
                <label className="font-urbanist text-white text-primary font-20 font-semibold">
                  Last Name
                </label>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter last name"
                    className=" w-full bg-transparent text-white my-2 px-2 py-3 border-2 rounded border-CBCBCB"
                    onClick={emptyLastName}
                    onChange={dataPreview}
                    value={profileData?.lastname}
                  />
                </div>
                <p
                  className="passErr my-2"
                  style={{ padding: "0", margin: "0", color: "red" }}
                >
                  {showError?.lastName}
                </p>
              </div>

              <div className="mt-8">
                <label className="font-urbanist text-white text-primary font-20 font-semibold">
                  Phone Number
                </label>
                <div>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter phone number"
                    className=" w-full bg-transparent text-white my-2 px-2 py-3 border-2 rounded border-CBCBCB"
                    onClick={emptyPhoneNumber}
                    onChange={dataPreview}
                    value={profileData?.phone_number}
                  />
                </div>
                <p
                  className="passErr my-2"
                  style={{ padding: "0", margin: "0", color: "red" }}
                >
                  {showError?.phoneNumber}
                </p>
              </div>

              <div className="flex mt-10 mb-15">
                <div>
                  <button
                    className="px-1 px-lg-1 py-3 py-lg-3 btn-grad rounded-lg w-[189px]"
                    type="submit"
                  >
                    <span className="capitalize font-16 font-urbanist text-white px-1 px-lg-1 py-3 rounded-lg">
                      Create
                    </span>
                  </button>
                </div>
                <div className="ml-4">
                  <button
                    type="button"
                    className="px-1 px-lg-1 py-3 py-lg-3 btn-grad rounded-lg w-[189px]"
                  >
                    <span className="capitalize font-16 font-urbanist text-white px-1 px-lg-1 py-3 rounded-lg">
                      Preview
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Edit;
