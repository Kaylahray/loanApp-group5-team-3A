import React from "react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import {
  Flex,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Button
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ModelIndex = (props) => {

  return (
    <div>
      <Container maxW={"container.xl"} mt={5}  borderStyle="none">
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Flex justifyContent={"left"} gap={20} alignItems={"center"}>
            <Text as={"b"}>Models</Text>
            <InputGroup>
              <InputLeftElement>
                <BiSearch />
              </InputLeftElement>
              <Input placeholder="Search" borderRadius={50} />
            </InputGroup>
          </Flex>
          <div>
            <Button
              className="btn"
              bg="#4c4dd4"
              fontSize="12px"
              p="10px 50px"
              border="none"
              textAlign="center"
              fontWeight={300}
              color="white"
              _hover="none"
            >
              {" "}
              <Link to={"/model"}> Create Model </Link>
            </Button>
          </div>
        </Flex>
      </Container>

  
    </div>
  );
};

export default ModelIndex;
