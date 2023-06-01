import { useState } from "react";
import "./Tabs.css";
import styles from "./Application.module.scss";
import { TbSearch } from "react-icons/tb";
import ApplicationTable from "./ApplicationTables/ApplicationTable";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);
  const [filteredValue, setfilteredValue] = useState("");

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
   <div>
   
        <div className={styles.appcontainer}>
          <nav>
            <h1>Applications</h1>
            <div className={styles.appinput}>
              <TbSearch className={styles.appicon} />
              <input
                type="text"
                onChange={(e) => setfilteredValue(e.target.value)}
                placeholder="Search"
                className={styles.input1}
              />
            </div>
          </nav>
          </div>
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ?"tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          All (200)
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Assigned (82)
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
           Unassigned(118)
        </button>
        <button
          className={toggleState === 4? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Closed (72)
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <p>
          <ApplicationTable value={filteredValue} />
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
        
          <p>
          <ApplicationTable value={filteredValue} />
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
        
          <p>
          <ApplicationTable value={filteredValue} />
          </p>
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
    
          <p>
          <ApplicationTable value={filteredValue} />
          </p>
        </div>
      </div>
    </div>

    <div className={styles.appfooter}>
            <div className={styles.appfooterback}>
              <MdArrowBackIosNew className="appfootericon" />
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
              <MdOutlineArrowForwardIos className="appfootericon" />
            </div>
          </div>
   </div>
  );
}

export default Tabs;