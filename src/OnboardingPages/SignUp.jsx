import * as Yup from "yup";
import { Formik, Form } from "formik";
import ImageBox from "../Component/ImageBox/ImageBox";
import FormBox from "../Component/FormBox/FormBox";
import Image from "../Component/Image/Image";
import FormikControl from "../Component/FormComponent/FormikControl";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    company: "",
    employees: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Format").required("Required"),
    company: Yup.string().required("Required"),
    employees: Yup.number().required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "must contain at least 8 letters."),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    console.log(onSubmitProps);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    navigate("/pdetails");
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
                    />
                  </div>
                  <div className="form-control">
                    <FormikControl
                      control="input"
                      type="text"
                      name="company"
                      label="Company name(required)"
                      placeholder="e.g Stutern"
                    />
                  </div>
                  <div className="form-control">
                    <FormikControl
                      control="input"
                      type="number"
                      name="employees"
                      label="Number of employees(required)"
                      placeholder="e.g Stutern"
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
                    Have an account? <span> Login</span>
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

export default SignUp;
