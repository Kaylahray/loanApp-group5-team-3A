/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import styles from './CustomerPro.module.scss'  
import { HiOutlineChevronDown, HiOutlineChevronRight, } from 'react-icons/hi'
import CustomerBio from './CutomerDetails/CustomerBio'
import CustomerDoc from './CutomerDetails/CustomerDoc'
import NavTab from './NavigationTab/NavTab'
import BankState from './CustomerAnalysis/BankState'
import Top from '../../Component/LayoutComponent/TopSectionComponent/Top'

const CustomerPro = () => {

  return (
    <div className={styles.customerpro}>
        
      <Top>
        <div className={styles.top}>

            <div className={styles.breadcrumb}>
            <p>Applications</p>
            <HiOutlineChevronRight />
            <p>Naomi Igimoh</p>
            </div>

            <div className={styles.btn_decision}>
              <button>Make decision <HiOutlineChevronDown/></button>             
            </div>          
        </div>
      </Top>
      <CustomerBio/>
      <CustomerDoc/>
      <NavTab/>
      <BankState/>
    </div>
  )
}

export default CustomerPro