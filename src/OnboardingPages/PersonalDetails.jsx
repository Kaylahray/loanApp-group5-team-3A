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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Loader from "./Loader";

const PersonalDetails = () => {
  const navigate = useNavigate();
const [isLoading, setIsLoading] = useState(false);
  const initialValues = {
    firstname: "",
    lastname: "",
    role: "",
  };
  const validationSchema = Yup.object({
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    role: Yup.string().required("Required"),
  });
  const onSubmit = async (values, onSubmitProps) => {
    setIsLoading(true);
    try {
      const userId = localStorage.getItem("userId"); 
      
      const payload = {
        ...values,
        id: userId,
      };


      
      const response = await axios.post("https://smartlendapp-backend-app.onrender.com/api/admin/signup/personal", payload);
      console.log(response.data); 
  
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
      navigate("/add");
    } catch (error) {
      console.error(error);
      
    }
       setIsLoading(false);
    const storedId = localStorage.getItem("6493b22a22b06002cb166e4c");
    console.log(storedId);
    
  };
  return (
    <div className="main">
      {isLoading ? <Loader /> : <></>}
      <ImageBox>
        <Image />
      </ImageBox>

      <FormBox>
        <div className="logo"> SMARTLEND</div>
        <p className="welcome">Personal Details</p>
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
                      type="text"
                      name="firstname"
                      label="First name"
                      placeholder="e.g chioma"
                      className="inputBox"
                    />
                  </div>
                  <div className="form-control">
                    <FormikControl
                      control="input"
                      type="text"
                      name="lastname"
                      label="Last name"
                      placeholder="e.g christopher"
                      className="inputBox"
                    />
                  </div>
                  <div className="form-control">
                    <FormikControl
                      control="input"
                      type="text"
                      name="role"
                      label="Role"
                      placeholder="e.g Bank manager"
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
