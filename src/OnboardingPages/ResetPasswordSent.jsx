const ResetPasswordSent = () => {
  return (
    <div className="">
      <h1 className="">Reset password</h1>
      <div>
        <p className="">
          We just sent a password reset link to{" "}
          <a href="#">peacesandy04@gmail.com</a>
          <br /> Click on the link to complete complete password reset
        </p>

        <p className="">Please know that the link will expire in 4 hours</p>
      </div>
      <div>
        {/* <Button>
          <Link to={"/resetpassword"}> Open email</Link>
        </Button> */}
      </div>
      <div>
        <p>Didn &apos;t get the email? Request again</p>
      </div>
    </div>
  );
};

export default ResetPasswordSent;
