/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from "../../Component/FormComponent/FormikControl";
import "./Settings.scss";

const MaintainRoles = () => {
    const dropDown = [
        { key: "select", value: "" },
        { key: "Analyst", value: "User" },
        { key: "Admin", value: "Admin" },
      ];
      
    
      const initialValues = {
        email: "",
        lastName: "",
        firstName: "",
        role: "",
      };
      const validationSchema = Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email("invalid").required("Required"),
        role: Yup.string().required("Required"),
      });
    
      const onSubmit = (values, onSubmitProps) => {
        console.log(values);
        console.log(onSubmitProps);
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
        
      };
      return (
        
        
        <div className="mr-mainn">
            <div className="mr-title">
            <h1>Maintain Roles</h1>
            </div>
          <div className="size-two">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => {
                console.log(formik);
                return (
                  <Form>
                    <select
        name="color"
        
      >
        <option value="" label="Select team member's email address" />
        <option value="red" label="red" />
        <option value="blue" label="blue" />
        <option value="green" label="green" />
      </select>
                    <div className="form-control">
                      <FormikControl
                        control="input"
                        type="text"
                        name="firstName"
                        label="First name"
                        placeholder="shakirat"
                        className="inputBox-one"
                      />
                    </div>
                    <div className="form-control">
                      <FormikControl
                        control="input"
                        type="text"
                        name="lastName"
                        label="Last name"
                        placeholder="chioma"
                        className="inputBox-one"
                      />
                    </div>
                    <div className="form-control">
                      <FormikControl
                        control="input"
                        type="email"
                        name="email"
                        label="Email address"
                        placeholder="e.g Stutern"
                        className="inputBox-one"
                      />
                    </div>
                    <div className="form-control">
                      <FormikControl
                        control="select"
                        type="select"
                        name="role"
                        options={dropDown}
                        label="Role"
                        className="selectBox-one"
                      />
                    </div>
    
                    <button
                      className="btno"
                      type="submit"
                      disabled={!formik.isValid || formik.isSubmitting}
                    >
                      Save
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      );
}

export default MaintainRoles