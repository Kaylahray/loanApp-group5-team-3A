import style from "./Scores.module.scss";
import { useState } from "react";
import { Input} from "@chakra-ui/react";
import Review from "../Review/Review";

function Scores(props) {
  const [onNext, setOnNext] = useState(false);

  return (
    <div>
      <div className={style.peacetextcontainer}>
        <h1 className={style.peacehtext}>Create Prediction model</h1>
        <p className={style.peaceptext}>
          Here are the scores previously stated, please review and edit if
          needed
        </p>
      </div>
      <div className={style.peacescorescontainer}>

        <div className={style.peacemodeldetails}>

          <div className={style.peacemodelhead}>
            <p >Variable</p>
            <p >Assigned Score</p>
          </div>
          <div className={style.peacemodellist1}>
            <li >Average debit</li>
            <li className={style.list2}>10</li>
          </div>
          <div className={style.peacemodellist1}>
            <li >Average credit</li>
            <li className={style.peacelist2}>10</li>
          </div>
          <div className={style.peacemodellist1}>
            <li >Total outstanding loan</li>
            <li className={style.peacelist2}>10</li>
          </div>
          <div className={style.peacemodellist1}>
            <li >Total watchlisted loan</li>
            <li className={style.peacelist2}>10</li>
          </div>
          <div className={style.peacemodellist1}>
            <li >Highest loan amount</li>
            <li className={style.peacelist3}>10</li>
          </div>
          <div className={style.peacemodellist1}>
            <li >Average income</li>
            <li className={style.peacelist2}>10</li>
          </div>
          <div className={style.peacemodellist1}>
            <li >Average expenses</li>
            <li className={style.peacelist3}>10</li>
          </div>
          <div className={style.peacemodellist1}>
            <li >Re-occuring expense</li>
            <li className={style.peacelist2}>10</li>
          </div>
          <div className={style.peacemodellist1}>
            <li >loan inflow rate</li> 
            <li className={style.peacelist3}>10</li>
          </div>

          <div className={style.peacemodelresult}>
            <p >Total</p>
            <p className={style.peaceresult}>90</p>
          </div>

        </div>

      </div>
      
       <div className={style.peacescores}> 
      <div>
        <label htmlFor="" className={style.peacescoreslabel}>Pass mark (required)</label>
        <Input type="text" placeholder="select" className={style.peacescoresplace} />
      </div>

      <div>
        <label htmlFor="" className={style.peacescoreslabel1}>Least considerable score</label>
        <Input type="text" placeholder="select" className={style.peacescoresplace}/>
      </div>
      <div className={style.peacebutton}>
        <button
          className={style.peacescoresbtn}
          onClick={() => props.stepHandler(3)}
        >
          Continue
        </button>
      </div>
      </div> 
    </div>
  );
}

export default Scores;
