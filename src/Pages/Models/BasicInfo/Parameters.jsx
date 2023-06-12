import React, { useState } from "react";
import {
  Select,
  Flex,
  Center,
  SimpleGrid,
  Box,
  FormControl,
  FormLabel,
  Container,
  Button,
  background,
} from "@chakra-ui/react";
import Createanalysis from "../Createanalysis/createanalysis";

const parameters = [
  {
    label: "Age group",
    value: "ageGroup",
  },
  {
    label: "Employment",
    value: "employment",
  },
  {
    label: "Location",
    value: "location",
  },
  {
    label: "Loan amount range",
    value: "loanAmount",
  },
  {
    label: "Salary range",
    value: "salary",
  },
  {
    label: "Gender",
    value: "gender",
  },
  {
    label: "Loan type",
    value: "loanType",
  },
];

const subParams = {
  ageGroup: [
    {
      label: "25-35",
      value: "25-35",
    },
    {
      label: "36-45",
      value: "36-45",
    },
    {
      label: "46-55",
      value: "46-55",
    },
    {
      label: "56-65",
      value: "66-75",
    },
  ],

  employment: [
    {
      label: "Unemployed",
      value: "unemployed",
    },
    {
      label: "Employed",
      value: "employed",
    },
    {
      label: "Self employed",
      value: "selfEmployed",
    },
  ],
};

const Parameters = (props) => {
  // const [selected, setSelected] = useState("");
const [parameter1, setParameter1] = useState("")
const [parameter2, setParameter2] = useState("")
  const [onNext, setOnNext] = useState(false);

  return (
    <div>
      <Container maxW={490}>
        <div>
          <SimpleGrid columns={2} gap={5} mt={10}>
            <FormControl>
              <FormLabel fontSize={14} p={0} m={0} mb={2}>
                {" "}
                Parameters
              </FormLabel>
              <Select
                borderRadius={6}
                placeholder="select"
                size="sm"
                value={parameter1}
                onChange={(e) => {
                  setParameter1(e.target.value);
                }}
              >
                {parameters.map((item, index) => (
                  <option value={item.value} key={index}>
                    {item.label}
                  </option>
                ))}
              </Select>
              <Select
                mt={2}
                borderRadius={6}
                placeholder="select"
                size="sm"
                value={parameter2}
                onChange={(e) => {
                  setParameter2(e.target.value);
                }}
              >
                {parameters.map((item, index) => (
                  <option value={item.value} key={index}>
                    {item.label}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel fontSize={14} p={0} m={0} mb={2}>
                Selection
              </FormLabel>
              <Select
                borderRadius={6}
                placeholder="select"
                size="sm"
                color="D4D4D4"
                //  value={""}
                _placeholder={{
                  color: "#D4D4D4",
                }}
              >
                {subParams[parameter1]?.map((item, index) => (
                  <option value={item.value} key={index}>
                    {item.label}
                  </option>
                ))}
              </Select>

              <Select mt={2} borderRadius={6} placeholder="select" size="sm">
                {subParams[parameter2]?.map((item, index) => (
                  <option value={item.value} key={index}>
                    {item.label}
                  </option>
                ))}
              </Select>
            </FormControl>
          </SimpleGrid>

          <Center mt={10}>
            <div>
              <Button
                bg="#4c4dd4"
                fontSize="12px"
                p="10px 50px"
                border="none"
                textAlign="center"
                fontWeight={300}
                color="white"
      _hover="none"
                onClick={() => props.stepHandler(1)}
              >
                Continue
              </Button>
            </div>
          </Center>
        </div>
      </Container>
    </div>
  );
};

export default Parameters;
