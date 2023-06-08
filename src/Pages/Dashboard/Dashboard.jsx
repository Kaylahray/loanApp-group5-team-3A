import Top from "../../Component/LayoutComponent/TopSectionComponent/Top";
import styles from "./Dashboard.module.scss";
import Left from "./Left";
import Right from "./Right";
// import DashData from "./DashData";

// import DashChart from "./DashChart";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Table from "./Table";
// import Trail from "./Trail";
import TopSec from "./TopSec";

const Dashboard = () => {
  // const [items, setItems] = useState(DashData);
  // const [query, setQuery] = useState("");
  // const filteredItems = items.filter((item) => {
  // item.toLowercase().includes(query.toLowerCase());

  return (
    <div className={styles.body}>
      <Top>
        <TopSec />
      </Top>

      {/* ////////////////////////////////////////////////////////////////////////////////////// */}

      <div className={styles.down}>
        <Left />
        <Right />
      </div>
    </div>
  );
};

export default Dashboard;
