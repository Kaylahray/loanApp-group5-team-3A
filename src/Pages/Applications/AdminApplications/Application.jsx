//import Top from "../../Component/LayoutComponent/TopSectionComponent/Top";
//import { useState } from "react";
//import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
//import "react-tabs/style/react-tabs.css";
import Tabs from "./Tabs";
import styles from "./Application.module.scss";
//import { TbSearch } from "react-icons/tb";
//import ApplicationTable from "./ApplicationTables/ApplicationTable";
//import { MdArrowBackIosNew } from "react-icons/md";
//import { MdOutlineArrowForwardIos } from "react-icons/md";

//import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
//import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Application = () => {


  return (
    <div>
      <div className={styles.application}>
        <div className={styles.appcontainer}>

          <div className={styles.apptop}>
            < Tabs />
           {/*} <a href="/" className={styles.apptopall}>
              All (200)
            </a>
            <a href="/">Mine (82)</a>
            <a href="/" className={styles.pendingreview}>
              Pending review (10)
            </a>
            <a href="/">Closed (72)</a>*/}
  </div>

         {/*} <ApplicationTable value={filteredValue} /> */}

          
        </div>
      </div>
    </div>
  );
};

export default Application;
