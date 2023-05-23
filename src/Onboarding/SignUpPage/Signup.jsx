import FormBox from "../../Component/FormBox/FormBox";
import ImageBox from "../../Component/ImageBox/ImageBox";
import styles from "./Signup.module.scss";
// import Icon from "./Icon.png";
import { useContext } from "react";
import { Context } from "../../Context";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Image from "../../Component/Image/Image";
import Button from "../../Component/Button/Button";
// import ButtonComponent from "../../Component/Button/Button";

const Signup = () => {
  const { show, visiblePassword } = useContext(Context);
  return (
    <div className={styles.main}>
      <ImageBox>
        <Image />
      </ImageBox>
      <FormBox>
        <div className={styles.signup}>
          <div className={styles.logo}> LoGo</div>
          <p className={styles.welcome}>Welcome let&apos;s get you started</p>
          <form>
            <FormControl marginBottom={"15px"}>
              <FormLabel fontWeight={400} fontSize={"14px"}>
                Work email address(required)
              </FormLabel>
              <Input
                variant={"outline"}
                size="sm"
                type="text"
                name="fullName"
                placeholder="e.g @chiomachris@gmail.com"
              />
            </FormControl>
            <FormControl marginBottom={"15px"}>
              <FormLabel fontWeight={400} fontSize={"14px"}>
              
                Company name(required)
              </FormLabel>
              <Input
                variant={"outline"}
                size="sm"
                type="text"
                name="fullName"
                placeholder="e.g Stutern"
              />
            </FormControl>
            <FormControl marginBottom={"15px"}>
              <FormLabel fontWeight={400} fontSize={"14px"}>
                Number of employees(required)
              </FormLabel>
              <Input
                variant={"outline"}
                size="sm"
                type="number"
                name="fullName"
                placeholder="e.g Stutern"
              />
            </FormControl>
            <FormControl marginBottom={"15px"}>
              <FormLabel fontWeight={400} fontSize={"14px"}>
                Password (required)
              </FormLabel>
              <InputGroup>
                <Input
                  size="sm"
                  type="password"
                  // type={show ? 'text' : 'password'}
                  placeholder="***********"
                />
                <InputRightElement width="4.5rem">
                  <button onClick={visiblePassword}>
                    <p> {show ? "ok" : "no"}</p>
                  </button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button>Continue</Button>
          </form>
        </div>
      </FormBox>
    </div>
  );
};

export default Signup;
