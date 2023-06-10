import { useNavigate } from 'react-router-dom';
import styles from './CustomerDoc.module.scss'
import Add from '../CProfileIcons/plusicon.svg'
import Image from '../CProfileIcons/imageicon.svg'
import Bank from '../CProfileIcons/bankstateicon.svg'
import {HiOutlinePaperClip} from 'react-icons/hi'
import ReactFileReader from 'react-file-reader';

const CustomerDoc = () => {
    const navigate = useNavigate();
    const handleFiles = (files) => {
        console.log(files.base64)
      }

    return (
        <div className={styles.customer_details_wrraper}>

            <div className={styles.customer_details}>
                <div className={styles.customer_details_title}>
                    <HiOutlinePaperClip />
                    <p >Attachments</p>
                </div>
                <p className={styles.nav} onClick={() => navigate("/layout/application")}>View all</p>
            </div>

            <div className={styles.customer_document_wrapper}>
            <ReactFileReader fileTypes={[".jpeg",".pdf"]} 
            base64={true} multipleFiles={false} handleFiles={handleFiles}>
                <button className={styles.customer_document_icon}>
                    <img className={styles.image} src={Add} alt='plus' />
                </button>
            </ReactFileReader>       
                <div className={styles.customer_document_wrap}>
                    <p className={styles.customer_document}>Add a new file</p>
                    <p className={styles.customer_document_value}>10 mb max</p>
                </div>
            </div>

            <div className={styles.customer_document_wrapper}>
            <ReactFileReader fileTypes={[".jpeg",".pdf"]} 
            base64={true} multipleFiles={false} handleFiles={handleFiles}>
                <button className={styles.customer_document_icon}>
                    <img className={styles.image} src={Image} alt='pass' />
                </button>
            </ReactFileReader>
                <div className={styles.customer_document_wrap}>
                    <p className={styles.customer_document}>Identity card.jpg </p>
                    <p className={styles.customer_document_value}>Shared by applicant in Dec 2021</p>
                </div>
            </div>

            <div className={styles.customer_document_wrapper}>
            <ReactFileReader fileTypes={[".jpeg",".pdf"]} 
            base64={true} multipleFiles={false} handleFiles={handleFiles}>
                <button className={styles.customer_document_icon}>
                    <img className={styles.image} src={Bank} alt='bank-statement' />
                </button>
            </ReactFileReader>
                <div className={styles.customer_document_wrap}>
                    <p className={styles.customer_document}>Bank statement.pdf</p>
                    <p className={styles.customer_document_value}>Shared by applicant in Dec 2021</p>
                </div>
            </div>
            
            <div className={styles.customer_document_wrapper}>
            <ReactFileReader fileTypes={[".jpeg",".pdf"]} 
            base64={true} multipleFiles={false} handleFiles={handleFiles}>
                <button className={styles.customer_document_icon}>
                    <img className={styles.image} src={Bank} alt='residence-proof' />
                </button>
            </ReactFileReader>
                <div className={styles.customer_document_wrap}>
                    <p className={styles.customer_document}>Proof of residence.pdf</p>
                    <p className={styles.customer_document_value}>Shared by applicant in Dec 2021</p>
                </div>
            </div>

        </div>
    )
}

export default CustomerDoc;