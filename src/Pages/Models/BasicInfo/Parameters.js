import React, { useState } from "react";

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
        value : "gender"
    },
    {
        label: "Loan type",
        value: "loanType"
    }
  ];

  const subParams = {
    ageGroup: [
        {
           label: "25-35",
           value: "25-35"
        },
        {
            label: "36-45",
            value: "36-45"
        },
        {
            label: "46-55",
            value: "46-55"
        },
        {
            label: "56-65",
            value: "66-75"
        }

    ]
 
    , employment: [
        {
        label: "Unemployed",
        value: "unemployed"
    },
    {
        label: "Employed",
        value : "employed"
    },
    {
        label: "Self employed",
        value : "selfEmployed"
    }
    ]
  }

const Para = () => {


const [selected, setSelected] = useState("")

  return (
    <div>
      <div className="container">
        <div className="left">
          <h3>Parameters</h3>
          <select className="option-select"
           value={selected} 
          onChange={(e)=>{
            setSelected(e.target.value)
          }}
          >
            <option>Select</option>
            {parameters.map((item, index)=><option value={item.value} key={index}>{item.label}</option>)}
          </select>
        </div>

        <div className="right">
          <h3>Selection</h3>
          <select className="option-select" value={''}>
            {subParams[selected]?.map( (item, index)=> <option value={item.value}key={index}>{item.label}</option>)}
          </select>
        </div>
      </div>
      <button>Continue</button>
    </div>
  );
};

export default Parameters;
