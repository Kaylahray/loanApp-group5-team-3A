import React from 'react'
import style from "./Review.module.scss"

function Review(props) {
  return (
    <div>
        <div className={style.body}> 
        <h1>Review details</h1>
        <h5>Basic information</h5>
        </div>
        <div>
        <label htmlFor="">Model name</label>
        <br/>
        <input type="text" placeholder='Alpha model' className={style.Alpha}/>
         <div className={style.condition}>
        <label htmlFor="" >Condition for model application</label>
        <br/>
        <select className={style.apply}>
        <option value="">Apply Model to selected participants</option>
        <option value="">Apply Model to selected participants</option>
    </select>
        </div>
        <div className={style.review}> 
        <div> 
    <label htmlFor="">Parameters</label>
    <br/>
    <select name="" id="" className={style.apply} >
        <option value="" >Age</option>
        <option value="">Date of birth</option>
    </select>
     <br/>
    <select name="" id="" className={style.apply}>
        <option value="">Location</option>
        <option value="">Date of birth</option>
    </select>
    <br/>
    <select name="" id="" className={style.apply}>
        <option value="">Loan amount range</option>
    </select>
        </div>
        <div>
        <label htmlFor="">Selection</label>
    <br/>
    <select name="" id="" className={style.apply}>
        <option value="">25-35</option>
        <option value=""></option>
    </select>
     <br/>
    <select name="" id="" className={style.apply}>
        <option value="">Lagos</option>
        <option value=""></option>
    </select>
    <br/>
    <select name="" id="" className={style.apply}>
        <option value="">100,000-250,000</option>
    </select>
        </div>
        </div>
        <hr/>
        <div>
            <p>Bank statement analysis</p>
        </div>
        <div className={style.review}>
            <div>
        <label htmlFor="">Variable</label>
        <br/>
        <select className={style.apply}>
            <option>Average Debit</option>
        </select>
        <br/>
        <select className={style.apply}>
            <option>Average Debit</option>
        </select>
        <br/>
        <select className={style.apply}>
            <option>Average Debit</option>
        </select>
        <br/>
        <select className={style.apply}>
            <option>Average Debit</option>
        </select>
        <br/>
            </div>

            <div>
        <label htmlFor="">Operator</label>
        <br/>
          <select className={style.apply}>
            <option>Less than</option>
          </select>
          <br/>
          <select name="" id="" className={style.apply}>
            <option value="">Less than</option>
          </select>
          <br/>
          <select name="" id="" className={style.apply}>
            <option value="">Less than</option>
          </select>
          <br/>
          <select name="" id="" className={style.apply}>
            <option value="">Less than</option>
          </select>
          <br/>
            </div>

            <div>
        <label htmlFor="">Value</label>
        <br/>
        <label htmlFor="">₦</label>
          <select className={style.apply}>
            <option>5000</option>
          </select>
          <br/>
          <label htmlFor="">₦</label>
          <select name="" id="" className={style.apply}>
            <option value="">6000</option>
          </select>
          <br/>
          <label htmlFor="">₦</label>
          <select name="" id="" className={style.apply}>
            <option value="">7000</option>
          </select>
          <br/>
          <label htmlFor="">₦</label>
          <select name="" id="" className={style.apply}>
            <option value="" >8000</option>
          </select>
          <br/>
            </div>

            <div>
        <label htmlFor="">Assigned score</label>
        <br/>
          <select className={style.apply}>
            <option>10</option>
          </select>
          <br/>
           <select name="" id="" className={style.apply}>
           <option>10</option>
           </select>
           <br/>
           <select name="" id="" className={style.apply}>
            <option>15</option>
           </select>
           <br/>
           <select name="" id="" className={style.apply}>
            <option>30</option>
           </select>
            </div>
        </div>

        <hr/>
        <div>
            <p>Credit report analysis</p>
        </div>
        <div className={style.review}>
            <div>
        <label htmlFor="">Variable</label>
        <br/>
        <select className={style.apply}>
            <option>Highest loan amount</option>
        </select>
        <br/>
        <select className={style.apply}>
            <option>Total watchlisted loan</option>
        </select>
        <br/>
        <select className={style.apply}>
            <option>Total credit account</option>
        </select>
        <br/>
        <select className={style.apply}>
            <option>Total outstanding laon</option>
        </select>
        <br/>
        <select className={style.apply}>
            <option>Total overdue laon</option>
        </select>
        <br/>
            </div>

            <div>
        <label htmlFor="">Operator</label>
        <br/>
          <select className={style.apply}>
            <option>Less than</option>
          </select>
          <br/>
          <select name="" id="" className={style.apply}>
            <option value="">Less than</option>
          </select>
          <br/>
          <select name="" id="" className={style.apply}>
            <option value="">Greater than</option>
          </select>
          <br/>
          <select name="" id="" className={style.apply}>
            <option value="">Less than</option>
          </select>
          <br/>
          <select name="" id="" className={style.apply}>
            <option value="">Less than</option>
          </select>
            </div>

            <div>
        <label htmlFor="">Value</label>
        <br/>
        <label htmlFor="">₦</label>
          <select className={style.apply}>
            <option>5000</option>
          </select>
          <br/>
          <label htmlFor="">₦</label>
          <select name="" id="" className={style.apply}>
            <option value="">3</option>
            <option value="">15000</option>
          </select>
          <br/>
          <label htmlFor="">₦</label>
          <select name="" id="" className={style.apply}>
            <option value="">15000</option>
          </select>
          <br/>
          <label htmlFor="">₦</label>
          <select name="" id="" className={style.apply}>
            <option value="">120000</option>
          </select>
          <br/>
          <label htmlFor="">₦</label>
          <select name="" id="" className={style.apply}>
            <option value="">120000</option>
          </select>
            </div>

            <div>
        <label htmlFor="">Assigned score</label>
        <br/>
          <select className={style.apply}>
            <option>10</option>
          </select>
          <br/>
           <select name="" id="" className={style.apply}>
           <option>10</option>
           </select>
           <br/>
           <select name="" id="" className={style.apply}>
            <option>15</option>
           </select>
           <br/>
           <select name="" id="" className={style.apply}>
            <option>30</option>
           </select>
           <br/>
           <select name="" id="" className={style.apply}>
            <option>10</option>
           </select>
            </div>
        </div>
        <hr/>
        <div>
            <p>Wrap up</p>
        </div>
      <div>
        <label htmlFor="">Total Score</label>
        <br/>
        <input type="text" className={style.scoresplace}/>
      </div>
      <div>
        <label htmlFor="">Pass mark (required)</label>
        <br/>
        <input type="text" className={style.scoresplace}/>
      </div>
      <div>
        <label htmlFor="">Least considerable score</label>
        <br/>
        <input type="text" className={style.scoresplace}/>
      </div>
        
        <button  onClick={() => props.stepHandler(4)}>
        Confirm model
        </button> 
    </div>
    </div>
  )
}

export default Review