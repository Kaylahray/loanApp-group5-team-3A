import styles from './CustomerPro.module.scss'  
import {  HiOutlineChevronRight, } from 'react-icons/hi'
import CustomerBio from './CutomerDetails/CustomerBio'
import CustomerDoc from './CutomerDetails/CustomerDoc'
import Tab from './NavigationTab/Tab'
import { Select } from '@chakra-ui/react'


const CustomerPro = () => {

  return (
    <div className={styles.customerpro}>

        <div className={styles.top}>

          <div className={styles.breadcrumb}>
            <p>Applications</p>
            <HiOutlineChevronRight />
            <p>Naomi Igimoh</p>
          </div>

          <Select 
            bg= '#4c4ddc'
            width= '200px'
            height= '48px'
            font-size= '16px'
            color= '#DFE0F3'
            borderColor= '#fff'
            borderRadius= '6px'
          >  
            <option disabled selected> Make decision</option>
            <option value='option1' >
              Approve candidate</option>
            <option value='option2' >Reject candidate</option>
          </Select>
        </div>      

      <CustomerBio />
      <CustomerDoc />
      <Tab />
    </div>
  )
}

export default CustomerPro