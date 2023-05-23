import FormBox from "../../Component/FormBox/FormBox";
import ImageBox from "../../Component/ImageBox/ImageBox";
import styles from "./Signup.module.scss";
import validate from "../../validate";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../Context";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import Image from "../../Component/Image/Image";
import Button from "../../Component/Button/Button";
import { useState } from "react";

const Signup = () => {
  const { show, visiblePassword } = useContext(Context);
  const [values, setValues] = useState({
    companyName: "",
    email: "",
    numberOfEmployees: "",
    password: "",
  });
  const [errors, setFormError] = useState({});
  const [error, setError] = useState(false);
  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    if (error) setFormError("");
    if (errors) setError(null);
    const newData = { ...values, [e.target.name]: e.target.value };
    setValues(newData);
    console.log(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate(values);
    console.log(err);
    setFormError(err);

    if (Object.keys(err).length > 0) {
      setError(true);
      return;
    }

    const userData = {
      email: values.email,
      companyName: values.companyName,
      numberOfEmployees: values.numberOfEmployees,
      password: values.password,
      // id: nanoid(),
    };
    // setLoading(true);

    // JUST TESTING THE API .THIS IS FROM THE PREVIOUS TASK
    axios
      .post(
        "https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries",
        userData
      )
      .then((response) => {
        console.log(response.data);
        console.log(Object.values(response.data));

        setError(false);
        setFormError(false);
        setRecords([...records, values]);
        setValues({
          companyName: "",
          email: "",
          numberOfEmployees: "",
          password: "",
        });
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };
  return (
    <div className={styles.main}>
      <ImageBox>
        <Image />
      </ImageBox>
      <FormBox>
        <div className={styles.signup}>
          <div className={styles.logo}> LoGo</div>
          <p className={styles.welcome}>Welcome let&apos;s get you started</p>
          <form onSubmit={handleSubmit}>
            <FormControl marginBottom={"15px"} isInvalid={errors.email}>
              <FormLabel fontWeight={400} fontSize={"14px"}>
                Work email address(required)
              </FormLabel>
              <Input
                onChange={handleChange}
                value={values.email}
                variant={"outline"}
                size="sm"
                type="email"
                name="email"
                placeholder="e.g @chiomachris@gmail.com"
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl marginBottom={"15px"} isInvalid={errors.companyName}>
              <FormLabel fontWeight={400} fontSize={"14px"}>
                Company name(required)
              </FormLabel>
              <Input
                onChange={handleChange}
                value={values.companyName}
                variant={"outline"}
                size="sm"
                type="text"
                name="companyName"
                placeholder="e.g Stutern"
              />
              <FormErrorMessage>{errors.companyName}</FormErrorMessage>
            </FormControl>
            <FormControl
              marginBottom={"15px"}
              isInvalid={errors.numberOfEmployees}
            >
              <FormLabel fontWeight={400} fontSize={"14px"}>
                Number of employees(required)
              </FormLabel>
              <Input
                onChange={handleChange}
                value={values.numberOfEmployees}
                variant={"outline"}
                size="sm"
                type="number"
                name="numberOfEmployees"
                placeholder="e.g Stutern"
              />
              <FormErrorMessage>{errors.numberOfEmployees}</FormErrorMessage>
            </FormControl>
            <FormControl marginBottom={"15px"} isInvalid={errors.password}>
              <FormLabel fontWeight={400} fontSize={"14px"}>
                Password (required)
              </FormLabel>
              <InputGroup>
                <Input
                  onChange={handleChange}
                  value={values.password}
                  size="sm"
                  name="password"
                  type={show ? "text" : "password"}
                  placeholder="***********"
                />

                <InputRightElement width="4.5rem">
                  {/* STILL HAVENT FIXED THE RIGHT ICON BUT IT DOESN'T RELOAD ANYMORE */}
                  <button type="button" onClick={visiblePassword}>
                    <p> {show ? "ok" : "no"}</p>
                  </button>
                </InputRightElement>
              </InputGroup>

              {!errors.password ? (
                <FormHelperText>must contain at least 8 letters</FormHelperText>
              ) : (
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              )}
            </FormControl>

            {/* FOR THIS BUTTON BELOW, CHECK THE COMPONENT FOLDER FOR WHAT IS LOOKS LIKE */}
            <Button>
              {/* instead of anchor tag we will use link */}

              <a> Continue</a>
            </Button>
          </form>
        </div>
      </FormBox>
    </div>
  );
};

export default Signup;
