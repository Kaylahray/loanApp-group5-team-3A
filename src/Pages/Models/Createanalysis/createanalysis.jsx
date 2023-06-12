import React, { useState } from 'react'
import style from './Analysis.module.scss'
import { Select, Input} from "@chakra-ui/react";
import Scores from '../Scores/Scores'


function Createanalysis(props) {

const [onContinue, setOnContinue] = useState(false)


  return (
    <div>
        <div className={style.title}> 
    <h3>Create Prediction model</h3>
    </div>
    <div className={style.createanalysis}> 
      <div>  
    <label htmlFor="">Variable</label>
    <br/>
    <Select name="" id="" className={style.optionselect} w={150}>
        <option value="">Select</option>
        <option value="">Monthly average income</option>
        <option value="">Monthly average expense</option>
        <option value="">Total occuring expense</option>
        <option value="">Average debit</option>
        <option value="">Average Credit</option>
        <option value="">Average balance</option>
        <option value="">Most frequent balance</option>
    </Select>
         <br/>
    <Select name="" id="" className={style.optionselect} w={150}>
        <option value="">Select</option>
        <option value="">Monthly average income</option>
        <option value="">Monthly average expense</option>
        <option value="">Total occuring expense</option>
        <option value="">Average debit</option>
        <option value="">Average Credit</option>
        <option value="">Average balance</option>
        <option value="">Most frequent balance</option>
    </Select>
    </div> 

     <div>   
    <label htmlFor="">Operator</label>
    <br/>
    <Select className={style.optionselect1} w={150}>
        <option value="">Select</option>
        <option value="">Less than or equal to</option>
        <option value="">Greater than</option>
        <option value="">Greater than or equal to</option>
        <option value="">Equal to</option>
    </Select>
        <br/>
    <Select className={style.optionselect1} placeholder="select" w={150}>
        <option value="">Select</option>
        <option value="">Less than or equal to</option>
        <option value="">Greater than</option>
        <option value="">Greater than or equal to</option>
        <option value="">Equal to</option>
    </Select>
    </div>

    <div>
        <label htmlFor="">Value</label>
        <br/>
        <Input type="nothing" className={style.create} w={150}/>
        <br/>
        <Input type="nothing" className={style.create} w={150}/>
    </div>


    <div>
        <label htmlFor="">Assigned Score</label>
        <br/>
        <Input type="nothing" className={style.assignedcreate} w={150}/>
        <br/>
        <Input type="nothing" className={style.assignedcreate} w={150}/>
    </div>
    </div>
    <div className={style.createbtn1}>
    {!onContinue && <button className={style.createbtn} onClick={() => props.stepHandler(2)}>
        Continue
        </button> }

    </div>
    </div>
  )
}

export default Createanalysis