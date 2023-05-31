import styles from './BankState.module.scss'



const BankState = () => {

  return (

    <div className={styles.gridcotainer}>
      <div className={styles.griditem}>
        <p>Average credit</p>
        <h3>500, 890 NGN</h3>
      </div>

      <div className={styles.griditem}>
        <p>Average debit</p>
        <h3>45,680 NGN</h3>
      </div>

      <div className={styles.griditem}>
        <p>Average balance</p>
        <h3>45,680 NGN</h3>
      </div>

      <div className={styles.griditem}>
        <p>Most frequent balance</p>
        <h3>500, 890 NGN</h3>
      </div>

      <div className={styles.griditem}>
        <p>Monthly average income</p>
        <h3>500, 890 NGN</h3>
      </div>

      <div className={styles.griditem}>
        <p>Re-occurring expense</p>
        <h3>45,680 NGN</h3>
      </div>

      <div className={styles.griditem}>
        <p>Monthly average expense</p>
        <h3>45,680 NGN</h3>
      </div>
    </div>

   
  )
}

export default BankState