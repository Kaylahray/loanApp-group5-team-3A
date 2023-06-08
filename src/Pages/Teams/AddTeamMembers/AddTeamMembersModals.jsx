/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import React, { useState } from 'react';
import styles from './AddTeamMembersModal.module.scss';

const AddTeamMemberModal = ({ isOpen, onClose, onAddTeamMember }) => {
  const [email, setEmail] = useState('');
  const [permission, setPermission] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePermissionChange = (e) => {
    setPermission(e.target.value);
  };

  const handleAddTeamMember = () => {
    // Validate the input fields and perform any necessary checks

    // Call the onAddTeamMember function with the entered values
    onAddTeamMember(email, permission);

    // Reset the input fields
    setEmail('');
    setPermission('');

    // Close the modal
    onClose();
  };

  return (
    <>
      {isOpen && <div className={styles.teamdimmed}></div>}
      <div className={`${styles.teammodal} ${isOpen ? styles.teamopen : ''}`}>
        <div className={styles.teammodalContent}>
          <h2>Add a team member</h2>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label>Permission:</label>
            <input
              type="text"
              value={permission}
              onChange={handlePermissionChange}
            />
          </div>
          <button onClick={handleAddTeamMember}>Add team member</button>
        </div>
      </div>
    </>
  );
};

export default AddTeamMemberModal;
