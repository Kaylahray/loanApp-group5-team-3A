/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import {useState, useRef} from 'react';
import './Tab.css';
import TeamsTable from '../TeamsTable/TeamsTable';
import AnalystTable from '../Analyst/AnalystTable';
import AdminTable from '../Admin/AdminTable';
import {TbSearch} from 'react-icons/tb';
import styles from "../Teams.module.scss";

import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Button,
FormControl,Input,FormLabel,Select,
useDisclosure
  
} from '@chakra-ui/react'


const Tab = () => {

  const [toggleState, setToggleState] = useState(1);
  const [filteredValue, setFilteredValue] = useState('');
  const [email, setEmail] = useState('');
  const [permission, setPermission] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateForm();
  };

  const handlePermissionChange = (e) => {
    setPermission(e.target.value);
    validateForm();
  };

  const validateForm = () => {
    setIsFormValid(email !== '' && permission !== '');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }
    
    setIsFormSubmitted(true);
  };
  
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className={styles.mainteamscontainer}>
      <nav className={styles.tops}>
        <div className={styles.topleft}>
          <h1>Teams</h1>
          <div className={styles.teaminput}>
            <TbSearch className={styles.searchicon} />
            <input
              type="text"
              onInput={e => setFilteredValue (e.target.value)}
              placeholder="Search"
              className={styles.teamssearchbar}
            />
          </div>
        </div>
        
        <div className={styles.right}>
        <Button onClick={onOpen} className={styles.topright} colorScheme="blue" variant='background: #4C4DDC;'>
  Add Team Member
</Button>
<Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
  >
<ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a team member</ModalHeader>
          <ModalCloseButton />
            
            <ModalBody pb={9}>
              <form id="new-note" onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel>Email address (required)</FormLabel>
                  <Input
                    ref={initialRef}
                    placeholder="e.g. idowu.oluwatofunmi@gmail.com"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </FormControl>
          
                <FormControl mt={4}>
                  <FormLabel>Permission (required)</FormLabel>
                  <Select
                    value={permission}
                    onChange={handlePermissionChange}>
                
                  <option disabled value="">
                    Select
                  </option>
                  <option value="option1">Analyst</option>
                  <option value="option2">Admin</option>
                </Select>
                </FormControl>
              
            
            <ModalFooter>
            <Button
                className='btn_btn-primary'
                type="submit"
                form="new-note"
                colorScheme="blue"
                
              >
                Add team member
              </Button>
            </ModalFooter>
            </form>
            </ModalBody>
          </ModalContent>
          </Modal>
        
        {isFormSubmitted && (
        <Modal isOpen={isFormSubmitted} onClose={() => setIsFormSubmitted(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Success</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>Team member added successfully!</p>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={() => setIsFormSubmitted(false)}
                className='btn_btn-primary'
                variant='background: #4C4DDC;'
                color='white'
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
        </div>
      </nav>

      <div className="team-container">
        <div className="team-bloc-tabs">
          <button
            className={
              toggleState === 1 ? 'teams-tabs teams-active-tabs' : 'teams-tabs'
            }
            onClick={() => toggleTab (1)}
          >
            <p className={styles.teamsall}>All (200)</p>
          </button>
          <button
            className={
              toggleState === 2 ? 'teams-tabs teams-active-tabs' : 'teams-tabs'
            }
            onClick={() => toggleTab (2)}
          >
            <p className={styles.teamsadmin}>Admin (20)</p>
          </button>
          <button
            className={
              toggleState === 3 ? 'teams-tabs teams-active-tabs' : 'teams-tabs'
            }
            onClick={() => toggleTab (3)}
          >
            <p className={styles.teamsanalyst}>Analyst (180)</p>
          </button>
        </div>

        <div className="teams-content-tabs">
          <div
            className={
              toggleState === 1
                ? 'teams-content teams-active-content'
                : 'teams-content'
            }
          >
            <TeamsTable value={filteredValue} />
          </div>

          <div
            className={
              toggleState === 2
                ? 'teams-content teams-active-content'
                : 'teams-content'
            }
          >
            <AdminTable value={filteredValue} />
          </div>

          <div
            className={
              toggleState === 3
                ? 'teams-content teams-active-content'
                : 'teams-content'
            }
          >
            <AnalystTable value={filteredValue} />
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Tab;
