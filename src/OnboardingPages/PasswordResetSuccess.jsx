import { Link } from "react-router-dom";

const PasswordResetSuccess = () => {
  return (
    <div className="cont">
      <div>
        <div className="logo"> SMARTLEND</div>
        <h2 className="h2text">Password Reset Successful!</h2>
      </div>
      <div>
        <button className="btn">
          <Link to={"/login"}>Continue home </Link>
        </button>
      </div>
    </div>
  );
};

export default PasswordResetSuccess;
