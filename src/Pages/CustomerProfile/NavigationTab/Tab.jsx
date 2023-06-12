import { useState } from "react";
import './Tab.css'
import BankState from '../CustomerAnalysis/BankState'
import CreditAnalysis from "../CustomerAnalysis/CreditAnalysis";
import PredictionAnalysis from "../CustomerAnalysis/PredictionAnalysis";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
  Text,
} from '@chakra-ui/react'


const Tab = () => {
    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Loan History
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Bank statement analysis
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Credict report analysis
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Prediction model analysis
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"} onClick={onOpen}>
           <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Naomi Igimoh</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <Text fontWeight='bold' mb='1rem'>
              No history of loan trace
            </Text>
            <p>She is hereby qualify for loan approval </p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}>
          <BankState/>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}>
          <CreditAnalysis/>
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}>
         <PredictionAnalysis/>
        </div>
      </div>
    </div>
  );
}

export default Tab