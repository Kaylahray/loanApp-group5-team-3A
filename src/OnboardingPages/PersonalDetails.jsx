import * as Yup from "yup";
import { Formik, Form } from "formik";
import ImageBox from "../Component/ImageBox/ImageBox";
import FormBox from "../Component/FormBox/FormBox";
import Image from "../Component/Image/Image";
import FormikControl from "../Component/FormComponent/FormikControl";
import { useNavigate } from "react-router-dom";

const PersonalDetails = () => {
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    role: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    role: Yup.string().required("Required"),
  });
  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    console.log(onSubmitProps);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    navigate("./add");
  };
  return (
    <div className="main">
      <ImageBox>
        <Image />
      </ImageBox>

      <FormBox>
        <div className="logo"> LOGO</div>
        <p className="welcome">Personal Details</p>
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
                      type="text"
                      name="firstName"
                      label="First name"
                      placeholder="e.g chioma"
                    />
                  </div>
                  <div className="form-control">
                    <FormikControl
                      control="input"
                      type="text"
                      name="lastName"
                      label="Last name"
                      placeholder="e.g christopher"
                    />
                  </div>
                  <div className="form-control">
                    <FormikControl
                      control="input"
                      type="text"
                      name="role"
                      label="Role"
                      placeholder="e.g Bank manager"
                    />
                  </div>

                  <button
                    className="btn"
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Submit
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

export default PersonalDetails;
