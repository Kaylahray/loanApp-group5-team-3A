import styles from"./resetPasswordSent.module.scss"
import Button from "../../Component/Button/Button"

const ResetPasswordSent = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.h1text}>Reset password</h1>
      <div>
        <p className={styles.ptext}>We just sent a password reset link to   <a href="#">peacesandy04@gmail.com</a>
        <br/> Click on the link to complete
        complete password reset</p>

        <p className={styles.ptext2}>Please know that the link will expire in 4 hours</p>
      </div>
      <div>
        <Button>Open email</Button>
      </div>
      <div> <p>Didn't get the email? Request again</p></div>
      </div>
  )
}

export default ResetPasswordSent