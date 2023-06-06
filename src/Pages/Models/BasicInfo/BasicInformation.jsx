import React, { useState } from "react";
import { Center, Select, Box } from "@chakra-ui/react";
import Parameters from "./Parameters";
// import styles from "./ModelIcons/Models.module.scss";

const BasicInformation = () => {
  const [onContinue, setOnContinue] = useState(false);
  return (
    <div className="model">
      <Box m='0 auto'> 
      <Center>
      <form className="basicInfoForm">
        <Center mt={10} mb={3}>
        Create Prediction Model</Center> 
        <div>
          <label htmlfor="modelname">Model name </label>
          <input className="modelName" type="text"></input>
          <span>The name you want to call this model</span>
        </div>

        <br />

        <div>
          <label htmlfor="modelapp">Condition for model application</label>
          <Select placeholder="select" size="sm">
            <option value="new applicants">
              Apply model to all new applicants
            </option>
            <option value="selected applicants">
              Apply model to selected applicants
            </option>
          </Select>
        </div>
        
      </form>
      </Center>
      {!onContinue && (
        <Center>
          <button className="btn" onClick={() => setOnContinue(true)}>
            Continue
          </button>
        </Center>
      )}

      {onContinue && <Parameters />}
      </Box>
    </div>
  );
};

export default BasicInformation;
