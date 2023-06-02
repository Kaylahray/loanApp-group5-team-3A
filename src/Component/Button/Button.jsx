import styles from "./Button.module.scss";

// eslint-disable-next-line react/prop-types
const Button = ({ children }) => {
  return (
    <button type="submit" className={styles.btn}>
      {children}
    </button>
  );
};

export default Button;
