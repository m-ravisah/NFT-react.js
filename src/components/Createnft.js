import React, { useState, useEffect } from "react";
import { useRef } from "react";
import "../css/marketplace.css";
import Topnavbar from "./Topnavbar";
import Footer from "./Footer";
import Form from "react-bootstrap/Form";
import ladyimg from "../img/32716342251668159026599.png";
import { useNavigate } from "react-router-dom";

const Createnft = () => {
  const navigate = useNavigate("");

  const [showError, setShowError] = useState("");
  const [submit, setSubmit] = useState(false);
  const [image1, setImage1] = useState("");
  const inputFile = useRef(null);
  const handleClick = () => {
    inputFile.current.click();
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage1(URL.createObjectURL(event.target.files[0]));
    }
  };

  const [userData, setUserData] = useState({
    title: "",
    price: "",
    profilePic: "",
    description: "",
    about: "",
    
  });

  const dataPreview = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.profilePic) {
      errors.profilePic = "profilePic Required";
    }
    if (!values.title) {
      errors.title = "title Required";
    }
    if (!values.price) {
      errors.price = "price Required";
    }
    if (!values.description) {
      errors.description = "Description Required";
    }
    if (!values.about) {
      errors.about = "About Required";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowError(validate(userData));
    setSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(showError).length == 0 && submit) {
    }
  }, [showError]);

  const emptyImage = () => {
    setShowError("");
  };
  const emptyTitle = () => {
    setShowError("");
  };
  const emptyAbout = () => {
    setShowError("");
  };
  const emptyDescription = () => {
    setShowError("");
  };
  const emptyPrice = () => {
    setShowError("");
  };

  return (
    <div className="body">
      <div className="container">
        <Topnavbar />
        <div className="mt-12 text-center">
          <div>
            <h2 className="text-white text-4xl text-primary text-center font-semibold mt-0 tracking-normal">
              Create NFT
            </h2>
            <p className="mt-3 mb-2 text-lg font-medium text-white tracking-normal">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,
            </p>
          </div>
        </div>

        <div className="justify-center flex px-3 my-5">
          <div className="sticky top-0 w-4/12 px-3">
            <div className="PreviewProfilePic">
              <img src={image1} width={360} />
            </div>
            <div className="sticky top-5">
              <div className="mt-2 sticky top-0 rounded bg-white">
                <div className="p-3">
                  <div className="flex items-center">
                    <div className="w-full flex pr-0 py-3">
                      <div className="flex overflow-hidden">
                        <div className="no">
                          <img src={ladyimg} width={40} alt="previewPic" />
                        </div>
                        <div className="font-12 font-lg-13 font-xl-13 font-xxl-16 font-semibold mt-3 tracking-normal">
                          Ravi Sah
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex items-center pr-0">
                      <div className="flex overflow-hidden  justify-end">
                        <div className="font-10 font-semibold mb-0 ">
                          <p className="nftDuration mb-0 font-thin">
                            12Days 7hrs
                          </p>
                        </div>

                        <div className="font-12 font-lg-14 font-xl-14 font-semibold mb-0 nft-duration-left ml-2">
                          Left
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex pt-1 pb-3 overflow-hidden">
                    <h4 className="pb-0 font-20 font-bold mb-0 tracking-normal">
                      {userData?.title}
                    </h4>
                  </div>

                  <div className="">
                    <p className="pb-0 font-16 font-medium mb-0 text-slate-500">
                      Highest bid
                    </p>
                    <div className="flex justify-between align-center">
                      <div className="font-16 font-semibold">
                        {userData?.price}
                      </div>
                      <div className="d-flex heart-svgbox justify-space-between align-center cursor-pointer">
                        <img
                          src="https://img.icons8.com/emoji/48/null/purple-heart.png"
                          width={32}
                          className=""
                        />
                        <div className="font-16 font-semibold ms-2 mt-1">
                          40
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form className="top-0 w-9/12 px-3" onSubmit={handleSubmit}>
            <div className="uploads">
              <label className="text-white font-urbanist text-primary font-20 font-semibold">
                Upload file
              </label>
              <div className="w-full bg-transparent my-2 py-3 px-5 border-2 rounded border-CBCBCB">
                <div className="flex justify-around">
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
                      name="profilePic"
                      multiple="multiple"
                      onClick={emptyImage}
                      ref={inputFile}
                      accept="image/*"
                      onChange={onImageChange}
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
                {showError?.profilePic}
              </p>
            </div>
            <div className="mt-10">
              <label className="text-white font-urbanist text-primary font-20 font-semibold">
                Title
              </label>

              <input
                type="text"
                onChange={dataPreview}
                onClick={emptyTitle}
                name="title"
                placeholder="Enter Title"
                className=" w-full bg-transparent text-white my-2 px-2 py-3 border-2 rounded border-CBCBCB"
              />
            </div>
            <p
              className="passErr my-2"
              style={{ padding: "0", margin: "0", color: "red" }}
            >
              {showError?.title}
            </p>

            <div className="mt-10">
              <label className="text-white font-urbanist text-primary font-20 font-semibold">
                Price
              </label>
              <input
                type="text"
                onChange={dataPreview}
                onClick={emptyPrice}
                name="price"
                placeholder="Enter Price"
                className=" w-full bg-transparent text-white my-2 px-2 py-3 border-2 rounded border-CBCBCB"
              />
            </div>
            <p
              className="passErr my-2 "
              style={{ padding: "0", margin: "0", color: "red" }}
            >
              {showError?.price}
            </p>

            <div className="mt-10">
              <label className="text-white font-urbanist text-primary font-20 font-semibold">
                Description
              </label>
              <textarea
                type="text"
                placeholder="Enter Description"
                onChange={dataPreview}
                name="description"
                className=" w-full bg-transparent text-white my-2 px-2 py-3 border-2 rounded border-CBCBCB"
                style={{ height: "200px" }}
                onClick={emptyDescription}
              ></textarea>
            </div>
            <p
              className="passErr my-2"
              style={{ padding: "0", margin: "0", color: "red" }}
            >
              {showError?.description}
            </p>

            <div className="mt-10">
              <label className="text-white font-urbanist text-primary font-20 font-semibold">
                About
              </label>
              <textarea
                type="text"
                placeholder="Enter About"
                name="about"
                className=" w-full bg-transparent text-white my-2 px-2 py-3 border-2 rounded border-CBCBCB"
                style={{ height: "200px" }}
                onChange={dataPreview}
                onClick={emptyAbout}
              ></textarea>
            </div>
            <p
              className="passErr my-2"
              style={{ padding: "0", margin: "0", color: "red" }}
            >
              {showError?.about}
            </p>

            <div className="mt-10">
              <div className="flex">
                <div>
                  <label className="text-white font-urbanist text-primary font-20 font-semibold">
                    Collection
                  </label>
                </div>
                <div>
                  <button onClick={() => navigate("/collections")}>
                    <img
                      src="https://img.icons8.com/color/48/null/plus--v1.png"
                      width={25}
                    />
                  </button>
                </div>
              </div>
              <Form.Select
                size="lg"
                className="text-white my-2 px-2 py-3 border-2 bg-transparent"
              >
                <option className="px-2 py-3 bg-transparent">Music</option>
              </Form.Select>
            </div>

            <div className="mt-10">
              <label className="text-white font-urbanist text-primary font-20 font-semibold">
                Block Chain
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
  );
};

export default Createnft;
