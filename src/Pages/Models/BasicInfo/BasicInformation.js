import React, {useState} from 'react'
import {Parameters} from "./Parameters"

const BasicInformation = () => {

const [onContinue, setOnContinue] = useState(false);
return (
  <div>
    <div>
    <form>
      <label htmlfor="modelname">Model name </label>
      <input type="text"></input>
  
      <br/>
        {/* <span>The name you want to call this model </span> */}

      <label htmlfor="modelapp">Condition for model application</label>
      <select
        className="form-select"
      >
        <option value="selectCondition">Select</option>
        <option value="new applicants">
          Apply model to all new applicants
        </option>
        <option value="selected applicants">
          Apply model to selected applicants
        </option>
      </select>
    </form>
    </div>
    {!onContinue &&    <button onClick={() => setOnContinue(true)}>
          Continue
    </button>}
 
    {onContinue && <Parameters/>}
  </div>
);
};


export default BasicInformation
