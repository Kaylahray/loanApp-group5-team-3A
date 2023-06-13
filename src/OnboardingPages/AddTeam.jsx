import * as Yup from "yup";
import { Formik, Form } from "formik";
import ImageBox from "../Component/ImageBox/ImageBox";
import FormBox from "../Component/FormBox/FormBox";
import Image from "../Component/Image/Image";
import FormikControl from "../Component/FormComponent/FormikControl";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FcNext } from "react-icons/fc";

const AddTeam = () => {
  const [users, setUsers] = useState([]);
  const dropDown = [
    { key: "select", value: "" },
    { key: "Analyst", value: "User" },
    { key: "Admin", value: "Admin" },
  ];

  const initialValues = {
    email: "",
    select: " ",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("invalid").required("Required"),
    select: Yup.string().required("Required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    setUsers((prev) => [...prev, values]);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  const removeList = (list) => {
    const newList = users.filter((item) => item.email !== list.email);
    setUsers(newList);
  };

  return (
    <div className="main">
      <ImageBox>
        <Image />
      </ImageBox>
      <FormBox>
        <div className="logo">SMARTLEND</div>
        <h4 className="welcome">Add team member</h4>
        <div className="size">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnMount
          >
            {(formik) => {
              return (
                <Form>
                  <div className="form-control">
                    <FormikControl
                      control="input"
                      type="text"
                      name="firstName"
                      label="First name"
                      placeholder="e.g chioma"
                      className="inputBox"
                    />
                  </div>
                  <div className="form-control">
                    <FormikControl
                      control="input"
                      type="text"
                      name="lastName"
                      label="Last name"
                      placeholder="e.g christopher"
                      className="inputBox"
                    />
                  </div>
                  <div className="form-control">
                    <FormikControl
                      control="input"
                      type="email"
                      name="email"
                      label="Email address(required)"
                      placeholder="e.g @chiomachris@gmail.com"
                      className="inputBox"
                    />
                  </div>
                  <div className="form-control">
                    <FormikControl
                      control="select"
                      name="select"
                      label="Permission(required)"
                      options={dropDown}
                      className="selectBox"
                    />
                  </div>
                  <button
                    className="btno"
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Add team member
                  </button>
                  <div>
                    {users.length > 0 &&
                      users.map((item) => {
                        const { email } = item;
                        return (
                          <div key={email} className="split">
                            <p>{email} </p>
                            <button
                              type="button"
                              onClick={() => removeList(item)}
                              className="remove"
                            >
                              X
                            </button>
                          </div>
                        );
                      })}
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>

        <div className="skip">
          <button className="btnoo">
            <Link to={"/up"}>Continue</Link>
          </button>

          <button className="hi">
            <Link to={"/up"}> skip</Link>{" "}
            <span>
              <Link to={"/up"}>
                {" "}
                <FcNext />
              </Link>{" "}
            </span>
          </button>
        </div>
      </FormBox>
    </div>
  );
};

export default AddTeam;
