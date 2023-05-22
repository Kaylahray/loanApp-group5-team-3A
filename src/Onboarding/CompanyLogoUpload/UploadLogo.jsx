import styles from "./uploadLogo.module.scss";
import FormBox from "../../Component/FormBox/FormBox";
import ImageBox from "../../Component/ImageBox/ImageBox";

const UploadLogo = () => {
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

export default UploadLogo;
