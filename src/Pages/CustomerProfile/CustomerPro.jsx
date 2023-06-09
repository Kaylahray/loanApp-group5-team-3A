import styles from './CustomerPro.module.scss'  
import { HiOutlineChevronDown, HiOutlineChevronRight, } from 'react-icons/hi'
import CustomerBio from './CutomerDetails/CustomerBio'
import CustomerDoc from './CutomerDetails/CustomerDoc'
import Tab from './NavigationTab/Tab'


const CustomerPro = () => {

  return (
    <div className={styles.customerpro}>

        <div className={styles.top}>

          <div className={styles.breadcrumb}>
            <p>Applications</p>
            <HiOutlineChevronRight />
            <p>Naomi Igimoh</p>
          </div>

          <div className={styles.btn_decision}>
            <button className={styles.btn}>
              Make decision
              <HiOutlineChevronDown />
            </button>
          </div>
        </div>      

      <CustomerBio />
      <CustomerDoc />
      <Tab />
    </div>
  )
}

export default CustomerPro