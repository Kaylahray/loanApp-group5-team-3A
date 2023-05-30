import Input from "./Input";
import Select from "./Select";

/* eslint-disable react/prop-types */
const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "select":
      return <Select {...rest} />;
  }
};

export default FormikControl;
