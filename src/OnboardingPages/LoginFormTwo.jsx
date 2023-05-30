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
import { useNavigate } from "react-router-dom";

const LoginFormTwo = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    passwordConfirmation: " ",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),

    password: Yup.string().required("No password provided."),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    console.log(onSubmitProps);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    navigate("./pdetails");
  };
  return (
    <div className="main">
      <ImageBox>
        <Image />
      </ImageBox>

      <FormBox>
        <div className="logo"> LOGO</div>
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
                      label="Work email"
                      placeholder="e.g @chiomachris@gmail.com"
                    />
                  </div>

                  <div className="form-control">
                    <FormikControl
                      control="input"
                      type="password"
                      name="password"
                      label="Password"
                      placeholder="*********"
                    />
                  </div>

                  <div className="form-control">
                    <FormikControl
                      control="input"
                      type="password"
                      name="passwordConfirmation"
                      label=" Confirm Password"
                      placeholder="*********"
                    />
                  </div>

                  <button
                    className="btn"
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Login
                  </button>
                  <p className="account">
                    Have an account? <span> Sign in</span>
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

export default LoginFormTwo;
