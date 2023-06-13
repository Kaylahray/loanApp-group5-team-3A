/* eslint-disable react/prop-types */
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import "./Settings.scss";
import MyProfile from "./MyProfile";
import CompanyProfile from "./CompanyProfile";
const TabItem = ({ name }) => (
  <span className="tabItem">
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);
const Settings = () => {
  return (
    <div>
      <Tabs className="chakra">
        <TabList className="divOne">
          <h1>Settings</h1>
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

        <TabPanels className="divTwo">
          <TabPanel>
            <CompanyProfile />
          </TabPanel>
          <TabPanel>
            <MyProfile />
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
