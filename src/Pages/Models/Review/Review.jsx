import React from 'react'
import style from "./Review.module.scss"
import { Select, Input, FormControl, FormLabel} from "@chakra-ui/react";

function Review(props) {
  return (
    <div>
        <div className={style.reviewcontainer}> 
        <h1 className={style.peacereview}>Review details</h1>
        </div>
        <div className={style.reviewcontainer}> 
        <h2 className={style.peacebasicinfo}>Basic information</h2>
        </div>
        <div className={style.modelreview}>
        <label htmlFor="" className={style.peacemodelname}>Model name</label>
        <Input type="text" placeholder='Alpha model' className={style.Alpha} w={330}/>
         <div className={style.condition}>
        <label htmlFor="" className={style.peacemodelname} >Condition for model application</label>
        <Select className={style.apply}>
        <option value="">Apply Model to selected participants</option>
        <option value="">Apply Model to selected participants</option>
    </Select>
        </div>
        <div className={style.review}> 
        <div> 
          <FormControl>
    <label>Parameters</label>
    <Select name="" id="" className={style.peaceapply} >
        <option value="" >Age</option>
        <option value="">Date of birth</option>
    </Select>
    </FormControl>
     <br/>
    <Select name="" id="" className={style.peaceapply}>
        <option value="">Location</option>
        <option value="">Date of birth</option>
    </Select>
    <br/>
    <Select name="" id="" className={style.peaceapply}>
        <option value="">Loan amount range</option>
    </Select>
        </div>

        <div>
          <FormControl> 
        <label className={style.peaceselection}>Selection</label>
    <Select name="" id="" className={style.apply1}>
        <option value="">25-35</option>
        <option value=""></option>
    </Select>
     <br/>
    <Select name="" id="" className={style.apply1}>
        <option value="">Lagos</option>
        <option value=""></option>
    </Select>
    <br/>
    <Select name="" id="" className={style.apply1}>
        <option value="">100,000-250,000</option>
    </Select>
    </FormControl>
        </div>
    </div>


    
        <hr/>
        <div className={style.peacebank}>
            <p>Bank statement analysis</p>
        </div>
        <div className={style.review}>
            <div>
        <label htmlFor="" className={style.peaceheading1}>Variable</label>
        <Select className={style.peaceapply2}>
            <option>Average Debit</option>
        </Select>
        <br/>
        <Select className={style.peaceapply2}>
            <option>Average Debit</option>
        </Select>
        <br/>
        <Select className={style.peaceapply2}>
            <option>Average Debit</option>
        </Select>
        <br/>
        <Select className={style.peaceapply2}>
            <option>Average Debit</option>
        </Select>
        <br/>
            </div>

            <div>
        <label htmlFor="" className={style.peaceheading1}>Operator</label>
          <Select className={style.apply2}>
            <option>Less than</option>
          </Select>
          <br/>
          <Select name="" id="" className={style.apply2}>
            <option value="">Greater than</option>
          </Select>
          <br/>
          <Select name="" id="" className={style.apply2}>
            <option value="">Greater than or equal to</option>
          </Select>
          <br/>
          <Select name="" id="" className={style.apply2}>
            <option value="">Less than or equal to</option>
          </Select>
          <br/>
            </div>

            <div>
        <label htmlFor="" className={style.peaceheading1}>Value</label>
          <Select className={style.apply9}>
            <option>5000</option>
          </Select>
          <br/>
          <Select name="" id="" className={style.apply9}>
            <option value="">80000</option>
          </Select>
          <br/>
          <Select name="" id="" className={style.apply9}>
            <option value="">10000</option>
          </Select>
          <br/>
          <Select name="" id="" className={style.apply9}>
            <option value="">70000</option>
          </Select>
          <br/>
            </div>

            <div>
            <label htmlFor="" className={style.peaceheading}>Assigned score</label>
        <div className={style.peaceapply7}> 
        <Input type="text"  placeholder='60' w={150}  className={style.peaceapply5} />
          </div>
          <div className={style.peaceapply7}> 
        <Input type="text"  placeholder='60' w={150}  className={style.peaceapply5} />
          </div>
          <div className={style.peaceapply7}> 
        <Input type="text"  placeholder='60' w={150}  className={style.peaceapply5} />
          </div>
          <div className={style.peaceapply7}> 
        <Input type="text"  placeholder='60' w={150}  className={style.peaceapply5} />
          </div>
            </div>
        </div>

        <hr/>
        
        <div className={style.peacereviewtop}>
            <p>Credit report analysis</p>
        </div>
        <div className={style.review}>
            <div>
        <label htmlFor="">Variable</label>
        <Select className={style.apply}>
            <option>Highest loan amount</option>
        </Select>
        <br/>
        <Select className={style.apply}>
            <option>Total watchlisted loan</option>
        </Select>
        <br/>
        <Select className={style.apply}>
            <option>Total credit account</option>
        </Select>
        <br/>
        <Select className={style.apply}>
            <option>Total outstanding laon</option>
        </Select>
        <br/>
        <Select className={style.apply}>
            <option>Total overdue laon</option>
        </Select>
        <br/>
            </div>

            <div>
        <label htmlFor="">Operator</label>
          <Select className={style.peaceapply6}>
            <option>Less than</option>
          </Select>
          <br/>
          <Select name="" id="" className={style.peaceapply6}>
            <option value="">Less than</option>
          </Select>
          <br/>
          <Select name="" id="" className={style.peaceapply6}>
            <option value="">Greater than</option>
          </Select>
          <br/>
          <Select name="" id="" className={style.peaceapply6}>
            <option value="">Less than</option>
          </Select>
          <br/>
          <Select name="" id="" className={style.peaceapply6}>
            <option value="">Less than</option>
          </Select>
            </div>

            <div>
        <label htmlFor="" className={style.peaceheading}>Value</label>
          <Select className={style.peaceapply4}>
            <option>5000</option>
          </Select>
          <br/>
          <Select name="" id="" className={style.peaceapply4}>
            <option value="">3</option>
            <option value="">15000</option>
          </Select>
          <br/>
          <Select name="" id="" className={style.peaceapply4}>
            <option value="">15000</option>
          </Select>
          <br/>
          <Select name="" id="" className={style.peaceapply4}>
            <option value="">120000</option>
          </Select>
          <br/>
          <Select name="" id="" className={style.peaceapply4}>
            <option value="">120000</option>
          </Select>
            </div>

            <div>
            <label htmlFor="" className={style.peaceheading}>Assigned score</label>
        <div className={style.peaceapply7}> 
        <Input type="text"  placeholder='10' w={150}  className={style.peaceapply5} />
          </div>
          <div className={style.peaceapply7}> 
        <Input type="text"  placeholder='15' w={150}  className={style.peaceapply5} />
          </div>
          <div className={style.peaceapply7}> 
        <Input type="text"  placeholder='5' w={150}  className={style.peaceapply5} />
          </div>
          <div className={style.peaceapply7}> 
        <Input type="text"  placeholder='10' w={150}  className={style.peaceapply5} />
          </div>
          <div className={style.peaceapply7}> 
        <Input type="text"  placeholder='10' w={150}  className={style.peaceapply5} />
          </div>
            </div>
        </div>

        <hr/>
        <div className={style.peacewrapup}>
            <p>Wrap up</p>
        </div>
      <div>
        <label htmlFor="" className={style.peacewrapheading}>Total Score</label>
        <Input type="text" className={style.scoresplace}/>
      </div>
      <div>
        <label htmlFor="" className={style.peacewrapheading}>Pass mark (required)</label>
        <Input type="text" className={style.scoresplace}/>
      </div>
      <div>
        <label htmlFor="" className={style.peacewrapheading}>Least considerable score</label>
        <Input type="text" className={style.scoresplace}/>
      </div>
        
        <button  onClick={() => props.stepHandler(4)} className={style.createbtn}>
        Confirm model
        </button> 
    </div>
    </div>
  )
}

export default Review