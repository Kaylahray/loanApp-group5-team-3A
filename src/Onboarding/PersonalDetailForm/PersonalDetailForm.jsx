import styles from "./personalDetailForm.module.scss";
import FormBox from "../../Component/FormBox/FormBox";
import ImageBox from "../../Component/ImageBox/ImageBox";
import Image from "../../Component/Image/Image";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

const PersonalDetailForm = () => {
  const [input, setInput] = useState(" ");
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === "";
  return (
    <div className={styles.main}>
      <h1>
        <img src="./component/img.svg" alt="" />
      </h1>
      <ImageBox>
        <Image />
      </ImageBox>
      <FormBox>
        <section>
          <div className={styles.logo}></div>
          <FormControl isInvalid={isError}>
            <FormLabel className="label">First name (required)</FormLabel>
            <Input placeholder="e.g. Oluwatofunmi" type="text" />
            <FormErrorMessage>First name is required</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={isError}>
            <FormLabel>Last name (required)</FormLabel>
            <Input placeholder="e.g. Idowu" type="text" />
            <FormErrorMessage>Last name is required</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={isError}>
            <FormLabel>Role (required)</FormLabel>
            <Input placeholder="e.g. Bank manager" type="text" />
            <FormErrorMessage>Role is required</FormErrorMessage>
          </FormControl>
        </section>
      </FormBox>
    </div>
  );
};

export default PersonalDetailForm;