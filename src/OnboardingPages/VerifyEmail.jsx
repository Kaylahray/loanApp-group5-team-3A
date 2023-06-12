import { Link } from "react-router-dom";

const VerifyEmail = () => {
  return (
    <div className="verify">
      <h2 className="h2text">Verify email address</h2>
      <div>
        <p className="ptext">
          We just sent a verification mail to{" "}
          <a href="#" className="email">
            Jane_doe@gmail.com.
          </a>
          Click on the link in the mail to complete verification.
        </p>
        <p className="ptext2">
          Please note that the link will expire in 4 hours.
        </p>
        <div>
          <button className="btno">
            {" "}
            <Link to={"/verifySuccess"}>Open email </Link>
          </button>
        </div>

        <p className="account">
          Didn&apos;t get the email?<span> Request again</span>
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
