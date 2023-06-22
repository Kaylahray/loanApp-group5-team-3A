/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import * as Yup from "yup";
import { Formik, Form } from "formik";
import ImageBox from "../Component/ImageBox/ImageBox";
import FormBox from "../Component/FormBox/FormBox";
import Image from "../Component/Image/Image";
import FormikControl from "../Component/FormComponent/FormikControl";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Loader from "./Loader"; 

const SignUp = () => {
  const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    email: "",
    companyname: "",
    employeenumber: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Format").required("Required"),
    companyname: Yup.string().required("Required"),
    employeenumber: Yup.number().positive().integer().required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "must contain at least 8 letters."),
  });

  const onSubmit = async (values, onSubmitProps) => {
    try {
      setIsLoading(true);
      const response = await axios.post("https://smartlendapp-backend-app.onrender.com/api/admin/signup", values);
      const generatedId = response.data.message.userId;
      localStorage.setItem("userId", generatedId);
      localStorage.setItem("userEmail", values.email);

      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
      navigate("/pdetails");


      
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.response.data,
        icon: "error",
      });
    }
  
    setIsLoading(false);
    

    
  };
  return (
    <div className="main">
      {isLoading ? <Loader /> : <></>}
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
                      type="text"
                      name="companyname"
                      label="Company name(required)"
                      placeholder="e.g Stutern"
                      className="inputBox"
                    />
                  </div>
                  <div className="form-control">
                    <FormikControl
                      control="input"
                      type="number"
                      name="employeenumber"
                      label="Number of employees(required)"
                      placeholder="e.g Stutern"
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

                  <button
                    className="btno"
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Continue
                  </button>
                  <p className="account">
                    Have an account?{" "}
                    <span>
                      {" "}
                      <Link to={"/login"}> Login </Link>
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

export default SignUp;
