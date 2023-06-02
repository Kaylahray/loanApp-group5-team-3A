import styles from "./Top.module.scss";

const Top = ({children}) => {
  return (
    <div className={styles.top}>
      {children}
    </div>
  );
};

export default Top;
