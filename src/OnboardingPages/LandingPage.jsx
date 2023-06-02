import { Link } from "react-router-dom";
import logo from "./OnboardingLogo/smartlend.svg";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="downlanding">
        <img src={logo} alt="chii" />
        <div className="land">
          <button className="btnnn">
            <Link to={"./login"}>Login </Link>
          </button>
          <button className="btnn">
            <Link to={"./signup"}>SignUp </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
