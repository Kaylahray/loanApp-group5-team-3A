import { NavLink } from 'react-router-dom';
import styles from './CustomerDoc.module.scss'
import Add from '../CProfileIcons/plusicon.svg'
import Image from '../CProfileIcons/imageicon.svg'
import Bank from '../CProfileIcons/bankstateicon.svg'
import {HiOutlinePaperClip} from 'react-icons/hi'

const CustomerDoc = () => {
    return (
        <div className={styles.customer_details_wrraper}>

            <div className={styles.customer_details}>
                <div className={styles.customer_details_title}>
                    <HiOutlinePaperClip />
                    <p >Attachments</p>
                </div>
                <NavLink className={styles.nav} to={"/apllication"}>View all</NavLink>
            </div>

            <div className={styles.customer_document_wrapper}>
                <button className={styles.customer_document_icon}>
                    <img className={styles.image} src={Add} alt='plus' />
                </button>
                <div className={styles.customer_document_wrap}>
                    <p className={styles.customer_document}>Add a new file</p>
                    <p className={styles.customer_document_value}>10 mb max</p>
                </div>
            </div>

            <div className={styles.customer_document_wrapper}>
                <button className={styles.customer_document_icon}>
                    <img className={styles.image} src={Image} alt='pass' />
                </button>
                <div className={styles.customer_document_wrap}>
                    <p className={styles.customer_document}>Identity card.jpg </p>
                    <p className={styles.customer_document_value}>Shared by applicant in Dec 2021</p>
                </div>
            </div>

            <div className={styles.customer_document_wrapper}>
                <button className={styles.customer_document_icon}>
                    <img className={styles.image} src={Bank} alt='bank-statement' />
                </button>
                <div className={styles.customer_document_wrap}>
                    <p className={styles.customer_document}>Bank statement.pdf</p>
                    <p className={styles.customer_document_value}>Shared by applicant in Dec 2021</p>
                </div>
            </div>
            
            <div className={styles.customer_document_wrapper}>
                <button className={styles.customer_document_icon}>
                    <img className={styles.image} src={Bank} alt='residence-proof' />
                </button>
                <div className={styles.customer_document_wrap}>
                    <p className={styles.customer_document}>Proof of residence.pdf</p>
                    <p className={styles.customer_document_value}>Shared by applicant in Dec 2021</p>
                </div>
            </div>

        </div>
    )
}

export default CustomerDoc;