import { Link } from "react-router-dom";

const VerificationSuccess = () => {
  return (
    <div className="cont">
      <div>
        <h2 className="h2text">Verification successful!</h2>
      </div>
      <div className="gif">
        <img
          src="/OnboardingGIF/mailverified.gif"
          alt="gif"
        />
      </div>
      <div>
        <button className="btno">
          <Link to={"/login"}>Continue home </Link>
        </button>
      </div>
    </div>
  );
};

export default VerificationSuccess;
