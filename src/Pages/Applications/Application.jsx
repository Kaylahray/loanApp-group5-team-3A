import Top from "../../Component/LayoutComponent/TopSectionComponent/Top";
import styles from "./Application.module.scss";
import { TbSearch } from "react-icons/tb";
import ApplicationTable from './ApplicationTables/ApplicationTable';
//import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
//import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Application = () => {
  return (
    <div>
     <div className={styles.application}>
        <Top />
        <div className={styles.appcontainer}>
            <nav>
                <h1>Applications</h1>
                <div className={styles.appinput}>
                    <TbSearch className={styles.appicon}/>
                    <input type="text" placeholder='Search'/>
                </div>
                
            </nav>

            <div className={styles.apptop}>
                <a href="/" className={styles.apptopall}>All (200)</a>
                <a href="/">Mine (82)</a>
                <a href="/" className={styles.pendingreview}>Pending review (10)</a>
                <a href="/" >Closed (72)</a>
            </div>

            <ApplicationTable />
            
            <div className={styles.appfooter}>
                <div className={styles.appfooterback}>
                    {/*<ArrowBackIosNewOutlinedIcon className='appfooter-icon'/>*/}
                    <a href="">Previous</a>
                </div>
                <div className={styles.appfooternos}>
                    <p className={styles.appfooter1}>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>...</p>
                    <p>20</p>
                </div>
                <div className={styles.appfooternext}>
                    <a href="">Next</a>
                    {/*<ArrowForwardIosOutlinedIcon className='appfooter-icon'>*/}
                </div>
            </div>
        </div>
    </div>
     
    </div>
  )
}

export default Application;