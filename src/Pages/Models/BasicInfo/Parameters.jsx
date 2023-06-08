import React, { useState } from "react";
import { Select, Flex, Center, SimpleGrid, Box, FormControl, FormLabel, Container } from "@chakra-ui/react";
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
  const [selected, setSelected] = useState("");

  const [onNext, setOnNext] = useState(false)

  return (
    <div>
      <Container maxW={490}> 
  <div>

      
<SimpleGrid columns={2} 
  gap={5} mt={10} > 

<FormControl>
  <FormLabel fontSize={14} p={0} m={0} mb={2} > Parameters</FormLabel>
  <Select
        borderRadius={6}
          placeholder="select"
          size="sm"
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);
          }}
        >
          {parameters.map((item, index) => (
            <option value={item.value} key={index}>
              {item.label}
            </option>
          ))}
        </Select>
        <Select mt={2}
        borderRadius={6}
          placeholder="select"
          size="sm"
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);
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
  <FormLabel fontSize={14} p={0} m={0} mb={2}>Selection</FormLabel>
  <Select 
        borderRadius={6}

        placeholder="select" size="sm" color="D4D4D4"
        //  value={""}
        _placeholder={{
          color:"#D4D4D4",
        }}
         >
          {subParams[selected]?.map((item, index) => (
            <option value={item.value} key={index}>
              {item.label}
              
            </option>
          ))}
        </Select>

        <Select mt={2}
        borderRadius={6}

        placeholder="select" size="sm">
          {subParams[selected]?.map((item, index) => (
            <option value={item.value} key={index}>
              {item.label}
              
            </option>
          ))}
        </Select>

</FormControl>




</SimpleGrid>
      
      <Center mt={10}>
      <div>
   <button className="btn" onClick={() => props.stepHandler(1)}>
        Continue
        </button>
    </div>
        </Center>
        </div>
    </Container>
    </div>
  );
};

export default Parameters;
