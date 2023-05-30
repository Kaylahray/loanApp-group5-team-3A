import styles from './CustomerBio.module.scss'
import{  
    HiOutlineCalendar,
    HiOutlineIdentification,
    HiOutlineTicket,
    HiOutlinePhone,
    HiOutlineDuplicate,
    HiOutlineMail,
    HiOutlineLocationMarker} from 'react-icons/hi'

const CustomerBio = () => {
  return (
    <div className={styles.customer_details_wrraper}>

    <h1 className={styles.customer_name}>Naomi Igimoh</h1>
        <div className={styles.customer_details}>
      <div className={styles.customer_details_title}>
          <HiOutlineCalendar/>
          <p >Date of birth</p>
      </div>
      <p className="customer_details_value">December 19, 2000</p>       
  </div>
  <div className={styles.customer_details}>
      <div className={styles.customer_details_title}>
          <HiOutlineIdentification/> 
          <p>National ID No</p> 
      </div>
      <p className="customer_details_value">1234569878</p>
     
  </div>
  <div className={styles.customer_details}>
      <div className={styles.customer_details_title}>
           <HiOutlineTicket/> 
          <p>BVN</p>
      </div>
      <p className="customer_details_value">1234569878</p>
      
  </div>
  <div className={styles.customer_details}>
      <div className={styles.customer_details_title}>
          <HiOutlinePhone/> 
          <p>Contact No</p> 
      </div> 
      <div className={styles.customer_details__title}>
          <p className="customer_details_value">+234 906 7878 607</p>
          <HiOutlineDuplicate/>
      </div>
      
  </div>
  <div className={styles.customer_details}>
      <div className={styles.customer_details_title}>
          <HiOutlineMail/>
          <p>Email address</p>
      </div>
      <p className="customer_details_value">naomiigimoh@gmail.com</p>
  </div>
  <div className={styles.customer_details}>
      <div className={styles.customer_details_title}>
          <HiOutlineLocationMarker/> 
          <p>Home address</p>
      </div>
      <p className="customer_details_value">Omole estate, Bariga way, Oshodi, Lagos</p>
  </div>
        
    </div>
  )
}

export default CustomerBio