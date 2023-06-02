// import React from 'react'
import styles from './PredictionAnalysis.module.scss'
import { HiOutlineChevronDown } from 'react-icons/hi'
const PredictionAnalysis = () => {
  return (
    <div className={styles.wrraper}>

      <div className={styles.container}>
        <h3 className={styles.loan}>Loan Selection</h3>
        <button className={styles.btn1}>
          20/03/2021 Application for 130,000 NGN
          <HiOutlineChevronDown />
        </button>
        <button className={styles.btn2}>
          Change applied prediction model
        </button>
      </div>

      <div className={styles.container}>
        <h3 className={styles.title}>Alpha model applied</h3>
        
        <div className={styles.modeldetails}>

          <div className={styles.modelhead}>
            <p >Variable</p>
            <p >Status</p>
          </div>
          <div className={styles.modellist1}>
            <li >Average</li>
            <li className={styles.list2}>Pass</li>
          </div>
          <div className={styles.modellist1}>
            <li >Average</li>
            <li className={styles.list2}>Pass</li>
          </div>
          <div className={styles.modellist1}>
            <li >Average</li>
            <li className={styles.list2}>Pass</li>
          </div>
          <div className={styles.modellist1}>
            <li >Average</li>
            <li className={styles.list2}>Pass</li>
          </div>
          <div className={styles.modellist1}>
            <li >Average</li>
            <li className={styles.list3}>Pass</li>
          </div>
          <div className={styles.modellist1}>
            <li >Average</li>
            <li className={styles.list2}>Pass</li>
          </div>
          <div className={styles.modellist1}>
            <li >Average</li>
            <li className={styles.list3}>Pass</li>
          </div>
          <div className={styles.modellist1}>
            <li >Average</li>
            <li className={styles.list2}>Pass</li>
          </div>
          <div className={styles.modellist1}>
            <li >Average</li>
            <li className={styles.list3}>Pass</li>
          </div>
       
          <div className={styles.modelresult}>
            <p >Result</p>
            <p className={styles.result}>Failed</p>
          </div>
         
        </div>

      </div>

      <div className={styles.container}>
        <h3 className={styles.title}>Recommendation</h3>
        
        <div className={styles.gridcotainer}>
          <div className={styles.griditem}>
            <p>Highest loanable amount</p>
            <h3>150, 890 NGN</h3>
          </div>
          <div className={styles.griditem}>
            <p>Repayment period</p>
            <h3>6 months</h3>
          </div>
          <div className={styles.griditem}>
            <p>Default probabiliy</p>
            <h3>20.5%</h3>
          </div>

          <button className={styles.btn3}>
          Make decision
          <HiOutlineChevronDown />
          </button>

        </div>
      </div>
    </div>
  )
}

export default PredictionAnalysis