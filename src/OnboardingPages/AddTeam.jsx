import * as Yup from "yup";
import { Formik, Form } from "formik";
import ImageBox from "../Component/ImageBox/ImageBox";
import FormBox from "../Component/FormBox/FormBox";
import Image from "../Component/Image/Image";
import FormikControl from "../Component/FormComponent/FormikControl";
import { Link } from "react-router-dom";

const AddTeam = () => {
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
    email: Yup.string().email("invalid").required("Required"),
    select: Yup.string().required("Required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    console.log(onSubmitProps);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
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
              console.log(formik);
              return (
                <Form>
                  <div className="form-control">
                    <FormikControl
                      control="input"
                      type="email"
                      name="email"
                      label="Email address(required)"
                      placeholder="e.g @chiomachris@gmail.com"
                    />
                  </div>
                  <div className="form-control">
                    <FormikControl
                      control="select"
                      name="select"
                      label="Permission(required)"
                      options={dropDown}
                    />
                  </div>

                  <button
                    className="btn"
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Add team member
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
        <div className="fetch_container">
          <div className="fetch">
            <p>halimaibrahim123@gmail.com</p>
            <div className="close-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="Menu / Close_MD">
                    <path
                      id="Vector"
                      d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="fetch">
            <p>chiomachris09@gmail.com</p>
            <div className="close-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="Menu / Close_MD">
                    <path
                      id="Vector"
                      d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="skip">
            <button className="btn">
              <Link to={"/up"}>Continue</Link>
            </button>

            <div>
              <Link to={"/up"}>skip</Link>
            </div>
          </div>
        </div>
      </FormBox>
    </div>
  );

  //

  //             <div className="fetch_container">
  //               <div className={styles.fetch}>
  //                 <p>halimaibrahim123@gmail.com</p>
  //                 <div className={styles.closeicon}>
  //                   <svg
  //                     viewBox="0 0 24 24"
  //                     fill="none"
  //                     xmlns="http://www.w3.org/2000/svg"
  //                   >
  //                     <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
  //                     <g
  //                       id="SVGRepo_tracerCarrier"
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                     ></g>
  //                     <g id="SVGRepo_iconCarrier">
  //                       <g id="Menu / Close_MD">
  //                         <path
  //                           id="Vector"
  //                           d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
  //                           stroke="#000000"
  //                           strokeWidth="2"
  //                           strokeLinecap="round"
  //                           strokeLinejoin="round"
  //                         ></path>
  //                       </g>
  //                     </g>
  //                   </svg>
  //                 </div>
  //               </div>
  //               <div className={styles.fetch}>
  //                 <p>chiomachris09@gmail.com</p>
  //                 <div className={styles.closeicon}>
  //                   <svg
  //                     viewBox="0 0 24 24"
  //                     fill="none"
  //                     xmlns="http://www.w3.org/2000/svg"
  //                   >
  //                     <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
  //                     <g
  //                       id="SVGRepo_tracerCarrier"
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                     ></g>
  //                     <g id="SVGRepo_iconCarrier">
  //                       <g id="Menu / Close_MD">
  //                         <path
  //                           id="Vector"
  //                           d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
  //                           stroke="#000000"
  //                           strokeWidth="2"
  //                           strokeLinecap="round"
  //                           strokeLinejoin="round"
  //                         ></path>
  //                       </g>
  //                     </g>
  //                   </svg>
  //                 </div>
  //               </div>
  //             </div>
  //             <p className={styles.errormsg}>{message}</p>
  //             <Button>
  //               <Link to={"/upload"}>Continue</Link>
  //             </Button>
  //             <div className={styles.skipnav}>
  //               <p>Skip</p>
  //             </div>
  //           </form>
  //         </div>
  //       </FormBox>
  //     </div>
};

export default AddTeam;
