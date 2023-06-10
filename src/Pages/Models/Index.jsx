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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import BasicInformation from "./BasicInfo/BasicInformation";

const ModelIndex = (props) => {
  //   const [onContinue, setOnContinue] = useState(false);

  return (
    <div>
      <Container maxW={"container.xl"}>
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
            <button className="btn" >
              {" "}
              <Link to={"/model"}> Create Model </Link>
            </button>
          </div>
        </Flex>
      </Container>

      <hr></hr>
    </div>
  );
};

export default ModelIndex;
