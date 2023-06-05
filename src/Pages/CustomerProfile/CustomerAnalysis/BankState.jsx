
// import { Chart } from 'chart.js'
import styles from './BankState.module.scss'
// import { useState } from 'react-router-dom'
import {CustomerIncome} from '../CustomerData/Data'

import styles from './BankState.module.scss'
import Chart from './Chart'


const BankState = () => {

  return (
    <>
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
    
    <h4 className={styles.header}>Income and expenses in the last 12 months</h4>
    <div className={styles.chart}>
      <Chart/>
    </div>
    </>

   
  )
}

export default BankState