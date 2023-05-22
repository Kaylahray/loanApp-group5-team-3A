import styles from "./FormBox.module.scss";

// eslint-disable-next-line react/prop-types
const FormBox = ({ children }) => {
  return <div className={styles.boo}>{children}</div>;
};

export default FormBox;
