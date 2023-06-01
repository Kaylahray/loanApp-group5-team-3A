import * as Yup from "yup";
import { Formik, Form } from "formik";
import ImageBox from "../Component/ImageBox/ImageBox";
import FormBox from "../Component/FormBox/FormBox";
import Image from "../Component/Image/Image";
import FormikControl from "../Component/FormComponent/FormikControl";
import { useNavigate, Link } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    console.log(onSubmitProps);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    navigate("/resetPasswordSent");
  };
  return (
    <div className="main">
      <ImageBox>
        <Image />
      </ImageBox>

      <FormBox>
        <div className="logo"> LOGO</div>
        <p className="welcome">Forgot Password</p>
        <p className="paragraph">
          Enter the email address associated with this account to request
          password reset verification link
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            console.log(formik);
            return (
              <Form>
                <div className="form-control form-cont">
                  <FormikControl
                    control="input"
                    type="email"
                    name="email"
                    label="Work email (required)"
                    placeholder="e.g @chiomachris@gmail.com"
                  />
                </div>

                <button
                  className="btn"
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Continue
                </button>
                <p className="account">
                  Remember password?{" "}
                  <span>
                    <Link to={"/login"}> Login</Link>
                  </span>
                </p>
              </Form>
            );
          }}
        </Formik>
      </FormBox>
    </div>
  );
};

export default ForgotPassword;
