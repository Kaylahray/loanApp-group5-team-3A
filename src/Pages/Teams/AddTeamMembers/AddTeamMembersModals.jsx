/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import React, { useState } from 'react';
import styles from './AddTeamMembersModal.module.scss';
// import Icon from './Icon.svg';

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
          <div className={styles.addteamheading}>
          <h1 className={styles.addteamheadingp}>Add a team member</h1>
          {/* <img src={Icon} alt="img" className={styles.cancel} /> */}
          </div>
          <form>
            <div>
            <label>Email address (required)</label>
            <input type="email" value={email} placeholder="e.g. idowu.oluwatofunmi@gmail.com" onChange={handleEmailChange} />
            </div>
          
          <div>
            <label>Permission (required)</label>
            <input
              type="text"
              value={permission}
              onChange={handlePermissionChange}
            />
          </div>
          </form>
          <button className={styles.AddTeamMemberbtn} onClick={handleAddTeamMember}>Add team member</button>
        </div>
      </div>
    </>
  );
};

export default AddTeamMemberModal;
