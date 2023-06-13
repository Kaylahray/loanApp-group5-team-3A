import styles from './PredictionAnalysis.module.scss'
import { HiOutlineCheck } from 'react-icons/hi'
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
import { Select } from '@chakra-ui/react'


const PredictionAnalysis = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className={styles.wrraper}>

      <div className={styles.container}>
        <h3 className={styles.loan}>Loan Selection</h3>

        <Select size='sm'
          className={styles.btn1}
          variants='border: 1px solid #C2C2C2;
          box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12);
          font-size: 14px;'
        >  
            <option disabled selected>  20/03/2021 Application for 130,000 NGN</option>
            <option value='option1'>Alpha model </option>
            <option value='option2'>Omega model</option>
          </Select>
        <button className={styles.btn2}>
          <p className={styles.nav}>Change applied prediction model</p>
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

          <Select className={styles.btn3}
            variant=' border: 1px solid #4C4DDC;
            font-size: 14px;
            color: #757575;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12);'
          >  
            <option disabled selected> Make decision</option>
            <option value='option1' className={styles.approved} 
            >
              Approve candidate  <HiOutlineCheck /> </option>
            <option value='option2' className={styles.reject}>Reject candidate</option>
          </Select>

          <button className={styles.btn4} onClick={ onOpen }>Confirm selection</button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay 
             bg='blackAlpha.600'
            />
            
            <ModalContent
              top={{ base: '0', md: '20%' }}
            > 
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