import styles from "./Image.module.scss";
import Imagee from "./man.svg";
const Image = () => {
  return (
    <div className={styles.img}>
      <img src={Imagee} className={styles.image} />
    </div>
  );
};

export default Image;
