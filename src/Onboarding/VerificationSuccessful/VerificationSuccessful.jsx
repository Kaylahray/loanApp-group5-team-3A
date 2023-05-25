
import styles from './VerificationSuccesful.module.scss';
import Button from "../../Component/Button/Button.jsx";
// import LoGo from "../../Component/Logo";


  const VerificationSuccessful = () => {
    return (
      <div className={styles.container}>
      <div>
      <h2 className={styles.h2text}>
        Verification successful!
      </h2>
      </div>
      <div>
        <Button>
          Continue home
        </Button>
        </div>
    </div>
    ) 
  };
  
  export default VerificationSuccessful;
