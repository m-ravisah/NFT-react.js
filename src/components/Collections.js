import React from "react";
import "../css/marketplace.css";
import { useRef } from "react";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Topnavbar from "./Topnavbar";
import { useDispatch } from "react-redux";
import { createCollectionAsync } from "../slices/Collectionservice";
import { assetsAsync } from "../slices/Collectionservice";

const Collections = () => {
  const [showError, setShowError] = useState("");
  const [submit, setSubmit] = useState(false);
  const dispatch= useDispatch();
  const inputFile = useRef(null);
  const handleClick = () => {
    inputFile.current.click();
  };
  const inputFileLogo = useRef(null);
  const handleClickLogo = () => {
    inputFileLogo.current.click();
  };
  const inputFileBanner = useRef(null);
  const handleClickBanner = () => {
    inputFileBanner.current.click();
  };
  

  const [userData, setUserData] = useState({
    collectionName: "",
    bannerImage: "",
    logoImage: "",
    featureImage: "",
    description: "",
  });

  const dataPreview = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.collectionName) {
      errors.collectionName = "collectionName is Required";
    }
    if(!values.bannerImage){
      errors.bannerImage = "bannerImage is Required";
    }
    if (!values.logoImage) {
      errors.logoImage = "logoImage is Required";
    }
    if (!values.featureImage) {
      errors.featureImage = "featureImage Required";
    }
    if (!values.description) {
      errors.description = "Description is Required";
    }

    return errors;
  };
  // const formData = {
  //   collection_name:userData?.collectionName,
  //   banner_image:userData?.bannerImage,
  //   logo_image:userData?.logoImage,
  //   feature_image:userData?.featureImage,
  //   description:userData?.description

  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowError(validate(userData));
    await dispatch(assetsAsync(userData));
    setSubmit(true);
  };
  const [bannerImage,setBannerImage]=useState('')

  const uploadBanner=(e)=>{
    console.log(e.target.value,"trtrt")
    if(e.target.value){
      dispatch(assetsAsync(e.target.value))
    }
  }

  // useEffect(() => {
  //   if (Object.keys(showError).length === 0 && submit) {
  //   }
  // }, [showError]);

  const emptyCollectionName = () => {
    setShowError("");
  };
  const emptyBannerImage = () => {
    setShowError("");
  };
  const emptyLogoImage = () => {
    setShowError("");
  };
  const emptyFeatureImage = () => {
    setShowError("");
  };
  const emptyDescription = () => {
    setShowError("");
  };

  return (
    <>
      <div className="body">
        <div className="container">
          <Topnavbar />
          <div className="mt-12 text-center">
            <div>
              <h2 className="text-white text-4xl text-primary text-center font-semibold mt-0 tracking-normal">
                Create Collection
              </h2>
              <p className="mt-3 mb-2 text-lg font-medium text-white tracking-normal">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,
              </p>
            </div>
          </div>

          <div className="collectionForm flex justify-center">
            <form className="col-sm-6 col-md-8 col-12" onSubmit={handleSubmit}>
              <div
                className="mt-10"
                onChange={dataPreview}
                onClick={emptyCollectionName}
              >
                <label className="text-white font-urbanist text-primary font-20 font-semibold">
                  Collection Name
                </label>

                <input
                  type="text"
                  name="collectionName"
                  placeholder="Enter Collection Name"
                  className=" w-full bg-transparent text-white my-2 px-2 py-3 border-2 rounded border-CBCBCB"
                />
              </div>
              <p
                className="passErr my-2"
                style={{ padding: "0", margin: "0", color: "red" }}
              >
                {showError?.collectionName}
              </p>

              <div className="uploads mt-10">
                <label className="text-white font-urbanist text-primary font-20 font-semibold">
                  Banner Image
                </label>
                <div className="w-full bg-transparent my-2 py-8 px-5 border-2 rounded border-CBCBCB">
                  <div className="flex justify-between">
                    <div className="">
                      <p className="mt-3 text-white">
                        PNG, JPG, GIF, WEBP or MP4 Max 100 MB
                      </p>
                    </div>
                    <div
                    >
                      <input
                        type="file"
                        name="bannerImage"
                        // multiple="multiple"
                        // ref={inputFileBanner}
                        accept="image/*"
                        onChange={uploadBanner}
                      />
                
                    </div>
                  </div>
                </div>
                <p
                  className="passErr my-2"
                  style={{ padding: "0", margin: "0", color: "red" }}
                >
                  {showError?.bannerImage}
                </p>
              </div>

              <div className="uploads mt-10">
                <label className="text-white font-urbanist text-primary font-20 font-semibold">
                  Logo Image
                </label>
                <div className="w-full bg-transparent my-2 py-8 px-5 border-2 rounded border-CBCBCB">
                  <div className="flex justify-between">
                    <div className="">
                      <p className="mt-3 text-white">
                        PNG, JPG, GIF, WEBP or MP4 Max 100 MB
                      </p>
                    </div>
                    <div
                      className=""
                      onClick={handleClickLogo}
                      onChange={dataPreview}
                    >
                      <input
                        type="file"
                        name="logoImage"
                        multiple="multiple"
                        onClick={emptyLogoImage}
                        ref={inputFileLogo}
                        accept="image/*"
                        hidden
                      />
                      <button
                        type="button"
                        className="px-5 py-3 btn-grad rounded-lg "
                        style={{ height: "auto" }}
                      >
                        <span className="capitalize font-16 font-urbanist text-white px-1 px-lg-1 py-1 rounded-lg">
                          Upload
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <p
                  className="passErr my-2"
                  style={{ padding: "0", margin: "0", color: "red" }}
                >
                  {showError?.logoImage}
                </p>
              </div>

              <div className="uploads mt-10">
                <label className="text-white font-urbanist text-primary font-20 font-semibold">
                  Feature Image
                </label>
                <div className="w-full bg-transparent my-2 py-8 px-5 border-2 rounded border-CBCBCB">
                  <div className="flex justify-between">
                    <div className="">
                      <p className="mt-3 text-white">
                        PNG, JPG, GIF, WEBP or MP4 Max 100 MB
                      </p>
                    </div>
                    <div
                      className=""
                      onClick={handleClick}
                      onChange={dataPreview}
                    >
                      <input
                        type="file"
                        name="featureImage"
                        multiple="multiple"
                        onClick={emptyFeatureImage}
                        ref={inputFile}
                        accept="image/*"
                        hidden
                      />
                      <button
                        type="button"
                        className="px-5 py-3 btn-grad rounded-lg "
                        style={{ height: "auto" }}
                      >
                        <span className="capitalize font-16 font-urbanist text-white px-1 px-lg-1 py-1 rounded-lg">
                          Upload
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <p
                  className="passErr my-2"
                  style={{ padding: "0", margin: "0", color: "red" }}
                >
                  {showError?.featureImage}
                </p>
              </div>

              <div className="mt-10">
                <label className="text-white font-urbanist text-primary font-20 font-semibold">
                  Description
                </label>
                <div onChange={dataPreview}>
                  <textarea
                    type="text"
                    placeholder="Enter Description"
                    onClick={emptyDescription}
                    name="description"
                    className=" w-full bg-transparent text-white my-2 px-2 py-3 border-2 rounded border-CBCBCB"
                    style={{ height: "200px" }}
                  ></textarea>
                </div>
              </div>
              <p
                className="passErr my-2"
                style={{ padding: "0", margin: "0", color: "red" }}
              >
                {showError?.description}
              </p>

              <div className="mt-10">
                <label className="text-white font-urbanist text-primary font-20 font-semibold">
                  Catogory
                </label>
                <Form.Select
                  size="lg"
                  className="text-white my-2 px-2 py-3 border-2 bg-transparent"
                >
                  <option className="px-2 py-3 bg-transparent">
                    Select Chain
                  </option>
                  <option className="px-2 py-3 bg-transparent">

                  </option>
                </Form.Select>
              </div>

              <div className="mt-10">
                <label className="text-white font-urbanist text-primary font-20 font-semibold">
                  Create Earning
                </label>
                <Form.Select
                  size="lg"
                  className="text-white my-2 px-2 py-3 border-2 bg-transparent"
                >
                  <option className="px-2 py-3 bg-transparent">
                    Select Chain
                  </option>

                </Form.Select>
              </div>

              <div className="mt-10">
                <label className="text-white font-urbanist text-primary font-20 font-semibold">
                  Blockchain
                </label>
                <Form.Select
                  size="lg"
                  className="text-white my-2 px-2 py-3 border-2 bg-transparent"
                >
                  <option className="px-2 py-3 bg-transparent">
                    Select Chain
                  </option>
                </Form.Select>
              </div>

              <div className="mt-10 mb-15">
                <button
                  className="px-1 px-lg-1 py-3 py-lg-3 btn-grad rounded-lg w-[189px]"
                  type="submit"
                >
                  <span className="capitalize font-16 font-urbanist text-white px-1 px-lg-1 py-3 rounded-lg">
                    Create
                  </span>
                </button>
              </div>
            </form>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Collections;
