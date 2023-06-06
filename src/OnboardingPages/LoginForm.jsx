// const LoginForm = () => {
//   return <div>

//   </div>;
// };

// export default LoginForm;
import * as Yup from "yup";
import { Formik, Form } from "formik";
import ImageBox from "../Component/ImageBox/ImageBox";
import FormBox from "../Component/FormBox/FormBox";
import Image from "../Component/Image/Image";
import FormikControl from "../Component/FormComponent/FormikControl";
import { useNavigate, Link } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),

    password: Yup.string().required("No password provided."),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    console.log(onSubmitProps);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    navigate("/layout");
  };
  return (
    <div className="main">
      <ImageBox>
        <Image />
      </ImageBox>

      <FormBox>
        <div className="logo"> SMARTLEND</div>
        <p className="welcome">Welcome let&apos;s get you started</p>
        <div className="size">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              console.log(formik);
              return (
                <Form>
                  <div className="form-control">
                    <FormikControl
                      control="input"
                      type="email"
                      name="email"
                      label="Work email address(required)"
                      placeholder="e.g @chiomachris@gmail.com"
                      className="inputBox"
                    />
                  </div>

                  <div className="form-control">
                    <FormikControl
                      control="input"
                      type="password"
                      name="password"
                      label="Password (required)"
                      placeholder="*********"
                      variant={true}
                      className="inputBox"
                    />
                  </div>
                  <p className="forgot">
                    <Link to={"/forgotPassword"}>Forgot password?</Link>
                  </p>
                  <button
                    className="btn"
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Login
                  </button>
                  <p className="account">
                    Don&apos;t have an account?{" "}
                    <span>
                      {" "}
                      <Link to={"/signup"}> Sign up</Link>
                    </span>
                  </p>
                </Form>
              );
            }}
          </Formik>
        </div>
      </FormBox>
    </div>
  );
};

export default LoginForm;
