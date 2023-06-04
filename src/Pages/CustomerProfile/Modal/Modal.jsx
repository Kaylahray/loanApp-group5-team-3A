// import React from 'react'
import styles from './Modal.module.scss'

const Modal = () => {
    // .then((result) => {
    // if (result.isConfirmed)
  return (
    <div className={styles.modal}>
        <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>Candidate approved!</h3>
            </div>
            <div className={styles.modalBody}>
                <p>An acceptance email will be sent to the candidate in <span className={styles.time}>15 minutes</span>. This gives you the opportunity to     modify your decision in case of mistake.</p>
            </div>
            <div className={styles.modalFooter}>
                <button className={styles.modalBtn}>Confirm</button>
            </div>
        </div>
    </div>
  )
}

export default Modal