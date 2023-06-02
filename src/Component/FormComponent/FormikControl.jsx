import Input from "./Input";
import Select from "./Select";

/* eslint-disable react/prop-types */
const FormikControl = (props) => {
  const { control, variant, ...rest } = props;

  switch (control) {
    case "input":
      return <Input variant= {variant} {...rest} />;
    case "select":
      return <Select {...rest} />;
  }
};

export default FormikControl;
