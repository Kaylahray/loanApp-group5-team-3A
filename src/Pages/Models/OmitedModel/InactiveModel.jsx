import React from "react";
import styles from "./OmitModel.module.scss";
import Menus from "../ModelIcons/v-menu.svg";
import Modify from "../ModelIcons/modify.svg";
import Deactive from "../ModelIcons/deactivate.svg";
import Delete from "../ModelIcons/delete.svg";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  // ModalCloseButton,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

const InactiveModel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenDel,
    onOpen: onOpenDel,
    onClose: onCloseDel,
  } = useDisclosure();

  return (
    <div className={styles.ModelWrapper}>
    
      <div className={styles.ModelOmega}>
        <div className={styles.inactiveModel}>
          <h2 className={styles.title_type}> Omega Model</h2>
          <button className={styles.btn_inactive}>Inactive</button>

          <Menu
            className={styles.dropDialog}
            variant="background: #fff; 
              width: 144px; 
              height: 136px; 
              color: #404040;
              box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
              border-radius: 6px;
              border: 1px solid #E0E0E0;"
          >
            <MenuButton
              // className={styles.iconMenu}
              as={IconButton}
              aria-label="Options"
              icon={<img src={Menus} alt="menu" />}
              variant=""
            />
            <MenuList>
              <MenuItem icon={<img src={Modify} alt="modify" />}>
                Modify
              </MenuItem>
              <MenuItem
                icon={<img src={Deactive} alt="deactivate" />}
                onClick={onOpen}
              >
                Deactivate
              </MenuItem>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bg="blackAlpha.600" />
                <ModalContent>
                  <ModalHeader>Deactivate Omega Model</ModalHeader>
                  <ModalBody>
                    <p className={styles.decision}>
                      Are you sure you want to deactivate “Omega Model”? By
                      deactivating “Alpha Model”, you won’t be able to use the
                      prediction model.
                    </p>
                  </ModalBody>
                  <ModalFooter className={styles.modal_Footer}>
                    <div>
                      <Button
                        className={styles.btnCancel}
                        onClick={onClose}
                        variant="background: #fff; 
                          width: 80px; 
                          height: 32px; 
                          color: #0a0a0a;"
                      >
                        Cancel
                      </Button>
                      <Button
                        className={styles.btnDeactiv}
                        onClick={onClose}
                        variant="background: #CD7B2E; 
                          width: 96px; 
                          height: 32px;"
                      >
                        Deactivate
                      </Button>
                    </div>
                  </ModalFooter>
                </ModalContent>
              </Modal>

              <MenuItem
                icon={<img src={Delete} alt="delete" />}
                onClick={onOpenDel}
              >
                Delete
              </MenuItem>
              <div>
                <Modal isOpen={isOpenDel} onClose={onCloseDel}>
                  <ModalOverlay bg="blackAlpha.600" />
                  <ModalContent>
                    <ModalHeader>Delete Omega Model</ModalHeader>
                    <ModalBody>
                      <p className={styles.decision}>
                        Are you sure you want to delete “Omega Model”? By
                        deleting “Alpha Model”, you won’t be able to access and
                        use the prediction model.
                      </p>
                    </ModalBody>
                    <ModalFooter className={styles.modal_Footer}>
                      <div>
                        <Button
                          className={styles.btnCancel}
                          onClick={onCloseDel}
                          variant="background: #fff; 
                          width: 80px; 
                          height: 32px; 
                          color: #0a0a0a;"
                        >
                          Cancel
                        </Button>
                        <Button
                          className={styles.btnDelete}
                          onClick={onClose}
                          variant="background: #CB3A31; 
                          width: 80px; 
                          height: 32px;"
                        >
                          Delete
                        </Button>
                      </div>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </div>
            </MenuList>
          </Menu>
        </div>
        <p className={styles.createdBy}>Created by Shakirat on 2/04/2023</p>
      </div>
    </div>
  );
};

export default InactiveModel;
