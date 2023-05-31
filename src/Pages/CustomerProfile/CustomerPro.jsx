import styles from './CustomerPro.module.scss'  
import { HiOutlineChevronDown, HiOutlineChevronRight, } from 'react-icons/hi'
import CustomerBio from './CutomerDetails/CustomerBio'
import CustomerDoc from './CutomerDetails/CustomerDoc'
import NavTab from './NavigationTab/NavTab'
import BankState from './CustomerAnalysis/BankState'
import Top from '../../Component/LayoutComponent/TopSectionComponent/Top'
import Chart from './CustomerAnalysis/Chart'
// import { Route, Routes } from 'react-router-dom'



const CustomerPro = () => {

  return (
    <div className={styles.customerpro}>
        
      <Top>
        {/* <div className={styles.top}> */}

            <div className={styles.breadcrumb}>
            <p>Applications</p>
            <HiOutlineChevronRight />
            <p>Naomi Igimoh</p>
            </div>

            <div className={styles.btn_decision}>
              <button className={styles.btn}>Make decision <HiOutlineChevronDown/></button>             
            </div>          
        {/* </div> */}
      </Top>
      <CustomerBio/>
      <CustomerDoc/>
      <NavTab/>
      <BankState/>
      <h4 className={styles.header}>Income and expenses in the last 12 months</h4>
      <div className={styles.chart}>
        <Chart/>
      </div>     
    </div>
  )
}

export default CustomerPro