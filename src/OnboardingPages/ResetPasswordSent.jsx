import { Link } from "react-router-dom";

const ResetPasswordSent = () => {
  return (
    <div className="verify">
      <div className="logo">SMARTLEND</div>
      <h1 className="h2text">Reset password</h1>
      <div>
        <p className="ptext">
          We just sent a password reset link to{" "}
          <a href="#" className="email">
            peacesandy04@gmail.com
          </a>
          <br /> Click on the link to complete complete password reset
        </p>

        <p className="ptext2">
          Please know that the link will expire in 4 hours
        </p>
      </div>

      <div>
        <button className="btno">
          {" "}
          <Link to={"/resetPassword"}>Open email </Link>
        </button>
      </div>

      <p className="account">
        Didn&apos;t get the email?<span> Request again</span>
      </p>
    </div>
  );
};

export default ResetPasswordSent;
