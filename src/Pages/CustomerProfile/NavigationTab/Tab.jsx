// import React from 'react'
import { useState } from "react";
import './Tab.css'
import BankState from '../CustomerAnalysis/BankState'
import CreditAnalysis from "../CustomerAnalysis/CreditAnalysis";
import PredictionAnalysis from "../CustomerAnalysis/PredictionAnalysis";


const Tab = () => {
    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Loan History
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Bank statement analysis
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Credict report analysis
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Prediction model analysis
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}>
          <BankState/>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}>
          <CreditAnalysis/>
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}>
         <PredictionAnalysis/>
        </div>
      </div>
    </div>
  );
}

export default Tab