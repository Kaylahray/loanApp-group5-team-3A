import React from "react";
import { useState } from "react";
import { IconBase } from "react-icons";
import ModelTabs from "../Tabs/ModelTabs";
import {
  Card,
  Container,
  Flex,
  Menu,
  MenuButton,
  Text,
  Button,
} from "@chakra-ui/react";
import ModelIndex from "../Index";

const CreateModel = () => {
  const { active, setActive } = useState("");
  const { inactive, setInactive } = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [Models, setModels] = useState([
    {
      id: 1,
      title: "Alpha Model",
      author: "Created by Tofunmi on 2/04/2023",
    },
    {
      id: 2,
      title: "Omega Model",
      author: "Created by Shakirat on 2/04/2023",
    },
  ]);

  return (
    <div>
      <ModelIndex />
      <ModelTabs/>

      {Models.map((model) => (
        <Container
          // bg="blue"
          m={0}
          mt={10}
          display="flex"
          maxW={272}
        >
          {/* <Flex alignItems="center" justifyContent="space-between"  */}

          <Card
            p="10px"
            key={model.id}
            //   maxW={272}
            background="#F5F5FF"
          >
            <div>
              <Text fontSize={14} as="b">
                {model.title}
              </Text>

              <Button
                display="inline-block"
                justifyItems="center"
                alignItems="center"
                _hover="none"
                backgroundColor="#F7F7F7"
                border="1px solid #BBDBCA"
                ml={3}
                borderRadius="8px"
                width="70px"
                height="24px"
                fontSize={12}
                color="#20573D"
                onClick={!active}
              >
                Active
              </Button>
            </div>

            <Text mt={3} m={0} p={0} fontSize={12}>
              {model.author}
            </Text>

            <div>
              <Menu>
                <MenuButton color="black.300" />
              </Menu>
            </div>
          </Card>
          {/* </Flex> */}
        </Container>
      ))}
    </div>
  );
};

export default CreateModel;
