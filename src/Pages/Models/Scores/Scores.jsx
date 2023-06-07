import React from 'react'
import style from './Scores.module.scss'
import { useState } from 'react'
import Review from '../Review/Review'


function Scores() {

const [onNext, setOnNext] = useState(false)


  return (
    <div>
        <div className={style.body}> 
        <h1>Create Prediction Model</h1>
        <p>Here are the scores previously stated, please review and edit if needed</p>
        </div>
        <div>
          <table> 
            <tr className={style.first}>
                <td>Variable</td>
                <td>Assigned Score</td>
            </tr>
            <tr>
              <td>Average Credit</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Total outstanding loan</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Total watchlisted loan</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Highest loan amount</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Average income</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Average expenses</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Re-occuring expenses</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Low inflow rate</td>
              <td>10</td>
            </tr>
            <tr className={style.first}>
              <td>Total</td>
              <td>90</td>
            </tr>
            </table>
        </div>
        <div className={style.scores}>
          <label htmlFor="">Pass mark (required)</label>
          <br/>
          <input type="text" placeholder='select' className={style.scoresplace}/>
        </div>
        <div>
        <label htmlFor="">Least considerable score</label>
          <br/>
          <input type="text" placeholder='select' className={style.scoresplace}/>
        </div>
        <div className={style.button}>
    {!onNext && <button className={style.scoresbtn} onClick={() => setOnNext(true)}>
        Continue
        </button> }

        {onNext && <Review/>}
    </div>
    </div>
  )
}

export default Scores