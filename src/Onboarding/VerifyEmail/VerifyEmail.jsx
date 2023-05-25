import styles from './VerifyEmail.module.scss';
import Button from "../../Component/Button/Button.jsx";
// import LoGo from "../../Component/Logo";


  const VerifyEmail = () => {
    return (
      <div className={styles.main}>
      <h2 className={styles.h2text}>
        Verify email address
      </h2>
      <div>
        <p className={styles.ptext}>
            We just sent a verification mail to <a href ="#" className={styles.email}>Jane_doe@gmail.com</a>. Click on the link in the mail to complete verification.
        </p>
        <p className={styles.ptext2}>
            Please note that the link will expire in 4 hours. 
        </p>
      </div>
      <div>
        <Button>
          Open email
        </Button>
        </div>
        <div className={styles.footer}>
       <a href="#"><p>Didn't get the email?<span> Request again</span></p>
       </a>
        </div>
    </div>
    ) 
  };
  
  export default VerifyEmail;
