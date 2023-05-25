
import styles from './passwordResetSucess.module.scss';
import Button from "../../Component/Button/Button.jsx";
// import LoGo from "../../Component/Logo";


  const PasswordResetSuccess = () => {
    return (
    <div className={styles.container}>
      {/* <LoGo/> */}
      <div>
      <h2 className={styles.h2text}>
        Password reset successful!
      </h2>
      </div>
      <div>
        <Button>
          Login
        </Button>
        </div>
    </div>
    ) 
  };
  
  export default PasswordResetSuccess;
