import React, { useState } from "react";
import { Center, Select, Box, Container, Input } from "@chakra-ui/react";
import Parameters from "./Parameters";
import { FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";
// import styles from "./ModelIcons/Models.module.scss";

const BasicInformation = (props) => {
  const [onContinue, setOnContinue] = useState(false);
  return (
    <div>
      <Container color="black" centerContent>
        <Center mt={10}>
          <h3>
            <b>Create Prediction Model</b>
          </h3>
        </Center>
        <div>
          <FormControl >
            <FormLabel size="12px" p={0} m={0} fontSize={14} mt={5}>
              Model Name
            </FormLabel>
            <Input p="0px 14px" w={450} type="text" />
            <FormHelperText m={0} fontSize={12}>
              The name you want to call this model
            </FormHelperText>
          </FormControl>
        </div>

        <br />

        <div>
          <FormControl>
            <FormLabel p={0} m={0} fontSize={14}>
              Condition for model application
            </FormLabel>
            <Select placeholder="select"size="sm" w={450} textColor="D4D4D4">
              <option>Apply model to all new applicants</option>
              <option>Apply model to selected applicants</option>
            </Select>
          </FormControl>
        </div>
        
      </Container>
      {!onContinue && (
        <Center mt={8}>
          <button className="btn" onClick={() => setOnContinue(true)}>
          Continue
        </button>
        </Center>
      )}

      {onContinue && <Parameters stepHandler={props.stepHandler} />}
    </div>
  );
};

export default BasicInformation;
