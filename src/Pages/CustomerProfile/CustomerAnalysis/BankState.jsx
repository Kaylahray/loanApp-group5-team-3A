// import { Chart } from 'chart.js'
import styles from './BankState.module.scss'
// import { useState } from 'react-router-dom'
// import {CustomerIncome} from '../CustomerData/Data'

const BankState = () => {

  // const [customerIncome, setCustomerIncome] = useState({
  //   labels: CustomerIncome.map((item) => item.month),
  //   datasets: [{
  //     label: 'Income and expenses in the last 12 months',
  //     data: CustomerIncome.map((item) => item.income),
  //     backgroundColor: 'rgba(255, 99, 132, 0.2)',
  //     borderColor: 'rgba(255, 99, 132, 1)',
  //     borderWidth: 1,
  //   }]
  // })
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

      {/* <Chart chartData={customerIncome} /> */}
    </div>
  )
}

export default BankState