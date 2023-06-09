import styles from './CustomerBio.module.scss'
import copyData from 'copy-to-clipboard'
import { useState} from 'react'
import {
    HiOutlineCalendar,
    HiOutlineIdentification,
    HiOutlineTicket,
    HiOutlinePhone,
    HiOutlineDuplicate,
    HiOutlineMail,
    HiOutlineLocationMarker
} from 'react-icons/hi'

const CustomerBio = () => {

    const [copyText, setCopyText] = useState('');
        let customernum = "+2349067878607"
    const copyToClipboard = () => {
        setCopyText(customernum);
        copyData(copyText);
        // alert(`You have copied "${copyText}"`);
    }

   const [showBackground, setShowBackground] = useState(false)

    return (
        <div className={styles.customer_details_wrraper}>

            <h1 className={styles.customer_name}>Naomi Igimoh</h1>

            <div className={styles.customer_details}>
                <div className={styles.customer_details_title}>
                    <HiOutlineCalendar />
                    <p >Date of birth</p>
                </div>
                <p className="customer_details_value">December 19, 2000</p>
            </div>
            <div className={styles.customer_details}>
                <div className={styles.customer_details_title}>
                    <HiOutlineIdentification />
                    <p>National ID No</p>
                </div>
                <p className="customer_details_value">1234569878</p>

            </div>
            <div className={styles.customer_details}>
                <div className={styles.customer_details_title}>
                    <HiOutlineTicket />
                    <p>BVN</p>
                </div>
                <p className="customer_details_value">1234569878</p>

            </div>
            <div className={styles.customer__details}
                   onMouseEnter = {() => {setShowBackground(true)}}
                   onMouseOut={() => {setShowBackground(false)}}
            >
                <div className={styles.customer_details_title}>
                    <HiOutlinePhone />
                    <p>Contact No</p>
                </div>

                <div className={styles.customer_details__title}>
                    <p className="customer_details_value" 
                    onClick={copyToClipboard} 
                    >
                    {customernum}
                    </p>
                    <HiOutlineDuplicate onClick={copyToClipboard}/>                 
                </div>
            
                { showBackground ? <div className={styles.customer__details} ></div>: null}
            </div>
            <div className={styles.customer_details}>
                <div className={styles.customer_details_title}>
                    <HiOutlineMail />
                    <p>Email address</p>
                </div>
                <p className="customer_details_value">naomiigimoh@gmail.com</p>
            </div>
            <div className={styles.customer_details}>
                <div className={styles.customer_details_title}>
                    <HiOutlineLocationMarker />
                    <p>Home address</p>
                </div>
                <p className="customer_details_value">Omole estate, Bariga way, Oshodi, Lagos</p>
            </div>

        </div>
    )
}

export default CustomerBio