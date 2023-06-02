import { BiSearch } from "react-icons/bi";
import styles from "./Models.module.scss";
import Logo from "./ModelIcons/SLogo.svg";
import { Flex, Box, Container, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const ModelTop = () => {
  return (
    <div>
      <Container maxW={"container.xl"}>
      <Flex justifyContent={"space-between"} alignItems={"center"} >
        <div className="logo"><img src={Logo}/></div>
        <Flex alignItems={"center"} gap={10}>
          <div>
            <InputGroup>
            <InputLeftElement>
            <BiSearch />
            </InputLeftElement>
            <Input placeholder="Search"  />
            </InputGroup>
          </div>
          <div className={styles.profiles}> </div>
        </Flex>
      </Flex>

      </Container>
      
      <hr></hr>
    </div>
  );
};

export default ModelTop;
