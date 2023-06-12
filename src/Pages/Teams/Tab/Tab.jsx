/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import {useState} from 'react';
import './Tab.css';
import TeamsTable from '../TeamsTable/TeamsTable';
import AnalystTable from '../Analyst/AnalystTable';
import AdminTable from '../Admin/AdminTable';
import {TbSearch} from 'react-icons/tb';
import Pagination from '../Pagination/Pagination';
import styles from '../Teams.module.scss';
// import AddTeamMemberModal from '../AddTeamMembers/AddTeamMembersModals';
import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,FormControl,Input,FormLabel,Select,
} from '@chakra-ui/react'


const Tab = () => {
  const [currentPage, setCurrentPage] = useState (1);
  const totalPages = 20; // Total number of pages

  const handlePageChange = page => {
    setCurrentPage (page);
  };

  const [toggleState, setToggleState] = useState (1);
  const [filteredValue, setFilteredValue] = useState ('');

  const toggleTab = index => {
    setToggleState (index);
  };

     const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    // const [isModalOpen, setModalOpen] = useState(false);
  
    // const handleOpenModal = () => {
    //   setModalOpen(true);
    // };
  
    // const handleCloseModal = () => {
    //   setModalOpen(false);
    // };
  
    // const handleAddTeamMember = (email, permission) => {
    //   console.log('Adding team member:', email, permission);
    // };
    
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
          <button onClick={onOpen} className={styles.topright}>Add Team Member</button>
          <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a team member</ModalHeader>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email address (required)</FormLabel>
              <Input ref={initialRef} placeholder='e.g. idowu.oluwatofunmi@gmail.com' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Permission (required)</FormLabel>
              <Select>
                <option disabled selected>Select</option>
                <option value='option1'>Analyst</option>
                <option value='option2'>Admin</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Add team member
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
          {/* <AddTeamMemberModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddTeamMember={handleAddTeamMember}
      /> */}
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
        
        <div className={styles.teampaginationContainer}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            currentPageStyle={styles.currentPage}
          />
        </div> 
      </div>
    </div>
  );
};

export default Tab;
