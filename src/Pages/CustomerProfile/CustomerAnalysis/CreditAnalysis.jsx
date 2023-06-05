// import React from 'react'
import styles from './CreditAnalysis.module.scss'

const CreditAnalysis = () => {
  return (
    <div>
      <div className={styles.gridcotainer}>
        <div className={styles.griditem}>
          <p>Total borrowed</p>
          <h3>500, 890 NGN</h3>
        </div>

        <div className={styles.griditem}>
          <p>Total defaults</p>
          <h3>45,680 NGN</h3>
        </div>

        <div className={styles.griditem}>
          <p>Total outstanding</p>
          <h3>45,680 NGN</h3>
        </div>

        <div className={styles.griditem}>
          <p>Highest loan amount</p>
          <h3>500, 890 NGN</h3>
        </div>

        <div className={styles.griditem}>
          <p>Total credit account</p>
          <h3>7</h3>
        </div>

        <div className={styles.griditem}>
          <p>Total watchlist account</p>
          <h3>2</h3>
        </div>

        <div className={styles.griditem}>
          <p>Total lost account</p>
          <h3>1</h3>
        </div>
      </div>

    </div>
  )
}

export default CreditAnalysis