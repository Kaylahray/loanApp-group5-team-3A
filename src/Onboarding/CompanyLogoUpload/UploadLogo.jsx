import styles from "./uploadLogo.module.scss";
import FormBox from "../../Component/FormBox/FormBox";
import ImageBox from "../../Component/ImageBox/ImageBox";
import Image from "../../Component/Image/Image";

const UploadLogo = () => {
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

export default UploadLogo;
