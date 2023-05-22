import styles from "./personalDetailForm.module.scss";
import FormBox from "../../Component/FormBox/FormBox";
import ImageBox from "../../Component/ImageBox/ImageBox";

const PersonalDetailForm = () => {
  return (
    <div className={styles.main}>
      <ImageBox>
        <div>
          <p>imageeeeeee link</p>
        </div>
      </ImageBox>
      <FormBox>
        <div>formmmmmmmmmmmmm</div>
      </FormBox>
    </div>
  );
};

export default PersonalDetailForm;
