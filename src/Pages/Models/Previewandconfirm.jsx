import { Button, Container, Box, Flex, background } from "@chakra-ui/react";
import React from "react";
import styles from "./Models.module.scss";

import { useNavigate } from "react-router-dom";

import { Text } from "@chakra-ui/react";

const Previewandconfirm = (props) => {
  return (
    <div className="checkout">
      <Container m="0% auto" p={3}>
        <div>
          <div className={styles.textcont}>
            <Text fontSize="18px" as="b">
              Successful!
            </Text>
            <Text fontSize="14px" mt={2}>
              You can always deactivate or modify.
            </Text>
          </div>

          <Flex justifyContent="end">
            <div>
              <Box>
                <Button
                  bg="#4c4dd4"
                  fontSize="12px"
                  p="5px 25px"
                  border="none"
                  textAlign="center"
                  fontWeight={300}
                  color="white"
                  _hover="none"

                   onClick={() => props.onClose()}
                >
                  Go back to models

                </Button>
              </Box>
            </div>
          </Flex>
        </div>
      </Container>
    </div>
  );
};

export default Previewandconfirm;
