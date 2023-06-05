/* eslint-disable react/prop-types */
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { useState } from "react";

const Input = (props) => {
  const [show, setShow] = useState("password");
  const [active, setActive] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { name, label, variant, type, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <div className="hide">
        <Field id={name} name={name} type={variant ? show : type} {...rest} />
        {variant && (
          <div className="eye">
            {active ? (
              <FiEyeOff
                onClick={() => {
                  setActive((prev) => !prev);
                  setShow("password");
                }}
              />
            ) : (
              <FiEye
                onClick={() => {
                  setActive((prev) => !prev);
                  setShow("text");
                }}
              />
            )}
          </div>
        )}
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
