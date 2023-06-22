import { Link } from "react-router-dom";
import FormBox from "../Component/FormBox/FormBox";
import Image from "../Component/Image/Image";
import ImageBox from "../Component/ImageBox/ImageBox";
import { useState } from "react";
import { FcNext } from "react-icons/fc";

const UploadLogo = () => {
  const [file, setFile] = useState("");

  const handleImage = (e) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    setFile(URL.createObjectURL(file));
  };

  return (
    <div className="main">
      <ImageBox>
        <Image />
      </ImageBox>
      <FormBox>
        <div className="logo">SMARTLEND</div>
        <p className="welcomee">Upload Company Logo</p>
        <p className="space">
          Give your workspace a more pleasing feel with your company logo
        </p>
        <div className="size">
          <label htmlFor="image-upload" className="uploadLabel">
            <input
              id="image-upload"
              type="file"
              onChange={handleImage}
              accept="image/*"
              className="uploadInput"
            />

            <div className="uploadIcon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="uploadingIcon" />
                <path
                  d="M1 13L1 14C1 15.6569 2.34315 17 4 17L14 17C15.6569 17 17 15.6569 17 14L17 13M13 5L9 1M9 
                      1L5 5M9 1L9 13"
                  stroke="#111827"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p>Drag and drop or select from device</p>
            <img src={file} className="company-logo" />
          </label>
        </div>

        <div className="skip">
          <button className="btno" type="submit">
            <Link to={"/verify"}> Complete Sign up</Link>
          </button>

          <button className="hi">
            <Link to={"/verify"}> skip</Link>{" "}
            <span>
              <Link to={"/verify"}>
                {" "}
                <FcNext />
              </Link>{" "}
            </span>
          </button>
        </div>
      </FormBox>
    </div>
  );
};

export default UploadLogo;
