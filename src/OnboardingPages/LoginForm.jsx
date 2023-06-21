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
import Loader from "./Loader";
import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),

    password: Yup.string().required("No password provided."),
  });

  const onSubmit = (values, onSubmitProps) => {
    setIsLoading(true);
    axios({
      url: "https://smartlendapp-backend-app.onrender.com/api/admin/login",
      method: "POST",
      data: values,
    }).then((response) => navigate("/layout"))
      .catch((result) => {
        console.log(result);
          Swal.fire({
            title: "Error!",
            text: result.response.data.error,
            icon: "error",
          });
      })
      .finally(() => {
        setIsLoading(false);
        onSubmitProps.setSubmitting(false);
      });
  };
  return (
    <div className="main">
      { isLoading ? <Loader /> : <></> }
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
                    className="btno"
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
