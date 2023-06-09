// import React from 'react'
import styles from './PredictionAnalysis.module.scss'
import { HiOutlineChevronDown, HiOutlineCheck } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
  ModalCloseButton
} from '@chakra-ui/react'


const PredictionAnalysis = () => {
  const navigate = useNavigate("");
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className={styles.wrraper}>

      <div className={styles.container}>
        <h3 className={styles.loan}>Loan Selection</h3>
        <button className={styles.btn1}>
          20/03/2021 Application for 130,000 NGN
          <HiOutlineChevronDown />
        </button>
        <button className={styles.btn2}>
          <p className={styles.nav} onClick={() => navigate("/layout/models")}>Change applied prediction model</p>
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

          <div className={styles.select}>
            <div className={styles.approved}>
              <p>Approve candidate</p>
              <HiOutlineCheck />
            </div>
            <p className={styles.reject}>Reject candidate</p>
          </div>
          <button className={styles.btn4} onClick={ onOpen }>Confirm selection</button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay 
             bg='blackAlpha.600'
            />
            
            <ModalContent>
              <ModalHeader>Candidate approved!</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p className={styles.decision}>
                  An acceptance email will be sent to the candidate in 
                  <span className={styles.time}> 15 minutes</span>.
                  This gives you the opportunity to modify your decision in case of mistake.
                </p>
              </ModalBody>

              <ModalFooter className={styles.modal_Footer}>
                <div >
                  <Button className={styles.btn5} onClick={onClose}
                  variant='background: #4C4DDC;'
                  >
                    Confirm
                  </Button>
                </div>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default PredictionAnalysis