import { Link } from "react-router-dom";

const PasswordResetSuccess = () => {
  return (
    <div className="cont">
      <div>
        <div className="logo"> SMARTLEND</div>
        <h2 className="h2text">Password Reset Successful!</h2>
      </div>
      <div style={{}}>
        <img src="src/OnboardingPages/OnboardingGIF/pasword.gif" alt="gif" />
      </div>
      <div>
        <button className="btno">
          <Link to={"/login"}>Continue home </Link>
        </button>
      </div>
    </div>
  );
};

export default PasswordResetSuccess;
