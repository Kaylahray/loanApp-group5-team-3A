import styles from "./loginPage.module.scss";
import FormBox from "../../Component/FormBox/FormBox";
import ImageBox from "../../Component/ImageBox/ImageBox";

const LoginPage = () => {
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

export default LoginPage;
