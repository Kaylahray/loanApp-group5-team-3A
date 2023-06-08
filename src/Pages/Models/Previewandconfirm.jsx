import { Button, Card, Flex, background } from "@chakra-ui/react";
import React from "react";
// import styles from "./ModelIcons/Models.module.scss";
import styles from "./Models.module.scss";
import { useNavigate } from "react-router-dom";


import { Text } from "@chakra-ui/react";


const Previewandconfirm = (props) => {

  return (
    <div className={styles.modal}>
      
        <div className={styles.textcont}>
          <Text fontSize="18px" as="b">
            Successful!
          </Text>
          <Text fontSize="14px"> You can always deactivate or modify.</Text>
        </div>

        <div className={styles.btncont}>
          <button className={styles.btns} onClick={()=> props.onClose()}>
          Go back to models</button> 
        </div>
      
    </div>
  );
};

export default Previewandconfirm;
