import { Button, Card, Flex, background } from "@chakra-ui/react";
import React from "react";
// import styles from "./ModelIcons/Models.module.scss";
import styles from "./Models.module.scss";

import { Text } from "@chakra-ui/react";
// import { Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton, } from "@chakra-ui/react";

const Previewandconfirm = () => {
  return (
    <div className={styles.modal}>
        <Card w={380}  m='0 auto'>
        <div className={styles.textcont}>
          <Text fontSize="18px" as="b">
            Successful!
          </Text>
          <Text fontSize="14px"> You can always deactivate or modify.</Text>
        </div>

        <div className={styles.btncont}>
          <button className={styles.btns}>Go back to models</button>
        </div>
      </Card>
    </div>
  );
};

export default Previewandconfirm;
