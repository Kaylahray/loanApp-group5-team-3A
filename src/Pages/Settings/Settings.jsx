import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import styles from "./Settings.module.scss";
const TabItem = ({ name }) => (
  <span className={styles.tabItem}>
    {name}{" "}
    <svg
      width="9"
      height="16"
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.999999 1L8 8L1 15"
        stroke="#9E9E9E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
  
    </svg>
  </span>
);
const Settings = () => {
  return (
    <div>
      <Tabs className={styles.chakra}>
        <TabList className={styles.divOne}>
          <Tab>
            <TabItem name="Company’s Profile" />
          </Tab>
          <Tab>
            <TabItem name="My Profile" />
          </Tab>
          <Tab>
            <TabItem name="Password" />
          </Tab>
          <Tab>
            <TabItem name="Notification" />
          </Tab>
          <Tab>
            <TabItem name="Maintain Roles" />
          </Tab>
        </TabList>

        <TabPanels className={styles.divTwo}>
          <TabPanel>
            <p>Company's Profile</p>
          </TabPanel>
          <TabPanel>
            <p>My Profile</p>
          </TabPanel>
          <TabPanel>
            <p>Password</p>
          </TabPanel>
          <TabPanel>
            <p>Notification</p>
          </TabPanel>
          <TabPanel>
            <p>Maintain Roles</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Settings;
