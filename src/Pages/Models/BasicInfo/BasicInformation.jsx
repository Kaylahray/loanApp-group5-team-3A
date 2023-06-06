import React, { useState } from "react";
import {Center, Select } from "@chakra-ui/react";
import Parameters from "./Parameters";
// import styles from "./ModelIcons/Models.module.scss";


const BasicInformation = () => {
  const [onContinue, setOnContinue] = useState(false);
  return (
    <div className="model">
          <form>
          <h3 className="title"> Create Prediction Model</h3>

            <div>
              <label htmlfor="modelname">Model name </label>
              <input type="text" width="100%"></input>
              <span >The name you want to call this model</span>
            </div>

            <br />

            <div>
              <label htmlfor="modelapp">Condition for model application</label>
              <Select placeholder="select"   size="sm">
                
                <option value="new applicants">
                  Apply model to all new applicants
                </option>
                <option value="selected applicants">
                  Apply model to selected applicants
                </option>
              </Select>
            </div>
          </form>
          {!onContinue && (
            <Center>
        <button className="btn" onClick={() => setOnContinue(true)}>Continue</button>

            </Center>
      )}
     

      {onContinue && <Parameters />}
    </div>
  );
};

export default BasicInformation;
