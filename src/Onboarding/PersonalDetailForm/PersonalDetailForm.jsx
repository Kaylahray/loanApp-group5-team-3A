import styles from "./personalDetailForm.module.scss";
import FormBox from "../../Component/FormBox/FormBox";
import ImageBox from "../../Component/ImageBox/ImageBox";
import Image from "../../Component/Image/Image";

const PersonalDetailForm = () => {
  return (
    <div className={styles.main}>
      <ImageBox>
        <Image />
      </ImageBox>
      <FormBox>
        <div>formmmmmmmmmmmmm</div>
      </FormBox>
    </div>
  );
};

export default PersonalDetailForm;
