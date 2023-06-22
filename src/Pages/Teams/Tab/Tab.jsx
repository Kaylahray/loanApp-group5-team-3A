/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import { useState, useRef } from 'react';
import './Tab.css';
import TeamsTable from '../TeamsTable/TeamsTable';
import AnalystTable from '../Analyst/AnalystTable';
import AdminTable from '../Admin/AdminTable';
import { TbSearch } from 'react-icons/tb';
import styles from "../Teams.module.scss";

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Button,

  FormControl,
  Input,
  FormLabel,
  Select,
  useDisclosure,
} from '@chakra-ui/react';

const Tab = () => {
  const [toggleState, setToggleState] = useState(1);
  const [filteredValue, setFilteredValue] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // const { isOpen: isAddMemberModalOpen, onOpen: openAddMemberModal, onClose: closeAddMemberModal } = useDisclosure();
  // const { isOpen: isSuccessModalOpen, onOpen: openSuccessModal, onClose: closeSuccessModal } = useDisclosure();
  const [submittedEmail, setSubmittedEmail] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toggleTab = (index) => {
    setToggleState(index);
  };

  
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
     
      setSubmitting(false);
      setSubmittedEmail(values.email);
      setIsFormSubmitted(true);
      openSuccessModal();
    }, 500);
    const handleSecondModalClose = () => {
      setIsFormSubmitted(false);
      setIsEmailSent(false);
    };
  
  };
  return (
    <div className={styles.mainteamscontainer}>
      <nav className={styles.tops}>
        <div className={styles.topleft}>
          <h1>Teams</h1>
          <div className={styles.teaminput}>
            <TbSearch className={styles.searchicon} />
            <input
              type="text"
              onInput={(e) => setFilteredValue(e.target.value)}
              placeholder="Search"
              className={styles.teamssearchbar}
            />
          </div>
        </div>

        <div className={styles.right}>
          <Button
            onClick={onOpen}
            className={styles.topright}
            colorScheme="blue"
            variant="background: #4C4DDC;"
          >
            Add Team Member
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef} finalFocusRef={finalRef}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add a team member</ModalHeader>
              <ModalCloseButton />
              
              <Formik
            initialValues={{ email: '', permission: '' }}
            validate={(values) => {
              const errors = {};

              if (!values.email) {
                errors.email = 'Email address is required';
              }

              if (!values.permission) {
                errors.permission = 'Permission is required';
              }
              setIsFormValid(Object.keys(errors).length === 0);

              return errors;
            }}
            onSubmit={handleSubmit}
          >
            {({ isFormSubmitted, isFormValid }) => (
              <Form id="new-note">
              <ModalBody pb={9}>
                  <FormControl>
                    <FormLabel>Email address (required)</FormLabel>
                    <Field type="email" name="email" as={Input} placeholder="e.g. idowu.oluwatofunmi@gmail.com" />
                    <ErrorMessage name="email" component="div" />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Permission (required)</FormLabel>
                    <Field name="permission" as={Select} placeholder="Select">
                      {/* <option disabled value="">
                        Select
                      </option> */}
                      <option value="option1">Analyst</option>
                      <option value="option2">Admin</option>
                      </Field>
                      <ErrorMessage name="permission" component="div" />
                    
                  </FormControl>
                  
                </ModalBody>

                   <ModalFooter justifyContent="flex-start">
    <Button
                    type="submit"
                    form="new-note"
                    bg={isFormSubmitted && isFormValid ? '#4C4DDC' : '#E0E0E0'}
                    color={isFormSubmitted && isFormValid ? '#9E9E9E' : 'white'}
                    disabled={!isFormValid}
>      {isFormSubmitted ? 'Team member added' : 'Add team member'}
    </Button>
    
  
</ModalFooter>

              </Form>
            )}
          </Formik>
        </ModalContent>
      </Modal>
  
          {isFormSubmitted && (
            <Modal isOpen={isFormSubmitted} onClose={() => setIsFormSubmitted(false)}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Successful!
                </ModalHeader>
                
                <ModalBody>
                  <p>An email invite has been sent to {submittedEmail}</p>
                </ModalBody>
                <ModalFooter>
                  <Button
  type="submit"
  form="new-note"
  bg={isFormValid ? '#4C4DDC' : '#E0E0E0'}
  color={isFormValid ? 'white' : '#9E9E9E'}
>
  {isFormSubmitted ? 'Team member added' : 'Add team member'}
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
            className={toggleState === 1 ? 'teams-tabs teams-active-tabs' : 'teams-tabs'}
            onClick={() => toggleTab(1)}
          >
            <p className={styles.teamsall}>All (200)</p>
          </button>
          <button
            className={toggleState === 2 ? 'teams-tabs teams-active-tabs' : 'teams-tabs'}
            onClick={() => toggleTab(2)}
          >
            <p className={styles.teamsadmin}>Admin (20)</p>
          </button>
          <button
            className={toggleState === 3 ? 'teams-tabs teams-active-tabs' : 'teams-tabs'}
            onClick={() => toggleTab(3)}
          >
            <p className={styles.teamsanalyst}>Analyst (180)</p>
          </button>
        </div>

        <div className="teams-content-tabs">
          <div
            className={toggleState === 1 ? 'teams-content teams-active-content' : 'teams-content'}
          >
            <TeamsTable value={filteredValue} />
          </div>

          <div
            className={toggleState === 2 ? 'teams-content teams-active-content' : 'teams-content'}
          >
            <AdminTable value={filteredValue} />
          </div>

          <div
            className={toggleState === 3 ? 'teams-content teams-active-content' : 'teams-content'}
          >
            <AnalystTable value={filteredValue} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
