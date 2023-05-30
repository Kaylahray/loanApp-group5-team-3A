import { Link } from "react-router-dom";
import FormBox from "../Component/FormBox/FormBox";
import Image from "../Component/Image/Image";
import ImageBox from "../Component/ImageBox/ImageBox";

const UploadLogo = () => {
  return (
    <div className="main">
      <ImageBox>
        <Image />
      </ImageBox>
      <FormBox>
        <div className="logo">SMARTLEND</div>
        <h4 className="welcomee">Upload Company Logo</h4>
        <p>Give your workspace a more pleasing feel with your company logo</p>
        <div className="size"></div>

        <div className="skip">
          <button className="btn" type="submit">
            Complete Sign Up
          </button>

          <Link to={"./verify"}> skip</Link>
        </div>
      </FormBox>
    </div>
  );
};

export default UploadLogo;
