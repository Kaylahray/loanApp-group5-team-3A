/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import {useState} from 'react';
import './Tab.css';
import TeamsTable from '../TeamsTable/TeamsTable';
import AnalystTable from '../Analyst/AnalystTable';
import AdminTable from '../Admin/AdminTable';
// import analystdata from "../Analyst/AnalystData";
import {TbSearch} from 'react-icons/tb';
import Pagination from '../Pagination/Pagination';
import styles from './TeamsStyles.module.scss';

const Tab = () => {
  const [currentPage, setCurrentPage] = useState (1);
  const [itemsPerPage] = useState (12);
  const totalPages = 20; // Total number of pages

  const handlePageChange = page => {
    setCurrentPage (page);
  };
  const [toggleState, setToggleState] = useState (1);
  const [filteredValue, setfilteredValue] = useState ('');

  const toggleTab = index => {
    setToggleState (index);
  };

  return (
    <div className={styles.right}>
      <div className={styles.tops}>
        <div className={styles.topleft}>
          <h1>Teams</h1>
          <div className={styles.teaminput}>
            <TbSearch className={styles.searchicon} />
            <input
              type="text"
              onChange={e => setfilteredValue (e.target.value)}
              placeholder="Search"
              className={styles.teamssearchbar}
            />
          </div>

        </div>
        {/* <Link to="/addteammember"> */}
        <div className={styles.topright}>
          <button>Add Team Member</button>
          {/* </Link> */}
        </div>
      </div>

      {/* <div className={styles.teamfilter}>
          <Tabination activeTab={activeTab} onTabChange={handleTabChange} />
        </div> */}

      <div className="team-container">
        <div className="team-bloc-tabs">
          <button
            className={toggleState === 1 ? 'tabs1 active-tabs1' : 'tabs1'}
            onClick={() => toggleTab (1)}
          >
            All (200)
          </button>
          <button
            className={toggleState === 2 ? 'tabs2 active-tabs2' : 'tabs2'}
            onClick={() => toggleTab (2)}
          >
            Admin (20)
          </button>
          <button
            className={toggleState === 3 ? 'tabs3 active-tabs3' : 'tabs3'}
            onClick={() => toggleTab (3)}
          >
            Analyst(180)
          </button>

        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? 'content  active-content' : 'content'
            }
          >
            <p>
              <TeamsTable value={filteredValue} />
            </p>
          </div>

          <div
            className={
              toggleState === 2 ? 'content  active-content' : 'content'
            }
          >

            <p>
              <AdminTable value={filteredValue} />
            </p>
          </div>

          <div
            className={
              toggleState === 3 ? 'content  active-content' : 'content'
            }
          >

            <p>
              <AnalystTable value={filteredValue} />
            </p>
          </div>

        </div>
      

      <div className={styles.paginationContainer}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          currentPageStyle={styles.currentPage}
        />
      </div>
      </div>
    </div>
  );
};
export default Tab;
