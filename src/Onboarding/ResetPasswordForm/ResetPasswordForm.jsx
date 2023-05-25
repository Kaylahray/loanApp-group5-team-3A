import styles from "./resetPasswordForm.module.scss";
import FormBox from "../../Component/FormBox/FormBox";
import ImageBox from "../../Component/ImageBox/ImageBox";
import Image from "../../Component/Image/Image";
import Button from "../../Component/Button/Button"
import {
  FormLabel,
  Input,
} from "@chakra-ui/react";





const ResetPasswordForm = () => {
  return (
    <div className={styles.main}>
      <ImageBox>
        <Image />
      </ImageBox>
      <FormBox>
        <div>
          <h1 className={styles.reset}>Reset Password</h1>
          <form>
          <FormLabel>Create new password (required)
        <Input
           name="password" 
          placeholder="**************"
        />
      </FormLabel>

      <FormLabel>Re-enter password(required)
        <Input
          name="password" 
          placeholder="*****************"
        />
      </FormLabel>
          </form>
          <Button>Confirm</Button>
          <p>Here by Mistake?</p>
        </div>
      </FormBox>
    </div>
  );
};

export default ResetPasswordForm;
