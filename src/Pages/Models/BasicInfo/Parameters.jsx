import React, { useState } from "react";
import { Select, Flex, Center, SimpleGrid, Box } from "@chakra-ui/react";
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

const Parameters = () => {
  const [selected, setSelected] = useState("");

  const [onNext, setOnNext] = useState(false)

  return (
    <div className="container">
<SimpleGrid columns={2} w='40%' mx='auto' gap={10} mt={10} > 
  <Box><h3>Parameters</h3>
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
        </Box>


  <Box><h3>Selection</h3>
        <Select 
        borderRadius={6}

        placeholder="select" size="sm" value={""}>
          {subParams[selected]?.map((item, index) => (
            <option value={item.value} key={index}>
              {item.label}
              
            </option>
          ))}
        </Select></Box>


</SimpleGrid>
      
      <Center>
      <div>
    {!onNext && <button  onClick={() => setOnNext(true)}>
        Continue
        </button> }

        {onNext && <Createanalysis/>}
    </div>
        </Center>
    
    </div>
  );
};

export default Parameters;
