import style from "./Scores.module.scss";
import { useState } from "react";
import Review from "../Review/Review";

function Scores(props) {
  const [onNext, setOnNext] = useState(false);

  return (
    <div>
      <div className={style.container}>
        <h1>Create Prediction Model</h1>
        <p>
          Here are the scores previously stated, please review and edit if
          needed
        </p>
      </div>
      <div>
        <table className={style.tablee}>
          <tr className={style.first}>
            <td className={style.tableData}>Variable</td>
            <td className={style.tableData}>Assigned Score</td>
          </tr>
          <tr>
            <td className={style.tableData}>Average Credit</td>
            <td className={style.tableData}>10</td>
          </tr>
          <tr>
            <td className={style.tableData}>Total outstanding loan</td>
            <td className={style.tableData}>10</td>
          </tr>
          <tr>
            <td className={style.tableData}>Total watchlisted loan</td>
            <td className={style.tableData}>10</td>
          </tr>
          <tr>
            <td className={style.tableData}>Highest loan amount</td>
            <td className={style.tableData}>10</td>
          </tr>
          <tr>
            <td className={style.tableData}>Average income</td>
            <td className={style.tableData}>10</td>
          </tr>
          <tr>
            <td className={style.tableData}>Average expenses</td>
            <td className={style.tableData}>10</td>
          </tr>
          <tr>
            <td className={style.tableData}>Re-occuring expenses</td>
            <td className={style.tableData}>10</td>
          </tr>
          <tr>
            <td className={style.tableData}>Low inflow rate</td>
            <td className={style.tableData}>10</td>
          </tr>
          <tr className={style.first}>
            <td className={style.tableData}>Total</td>
            <td className={style.tableData}>90</td>
          </tr>
        </table>
      </div>
      <div className={style.scores}>
        <label htmlFor="">Pass mark (required)</label>
        <br />
        <input type="text" placeholder="select" className={style.scoresplace} />
      </div>
      <div>
        <label htmlFor="">Least considerable score</label>
        <br />
        <input type="text" placeholder="select" className={style.scoresplace} />
      </div>
      <div className={style.button}>
        <button
          className={style.scoresbtn}
          onClick={() => props.stepHandler(3)}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Scores;
