import React, { useState } from "react";
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import OmitModel from "../OmitedModel/OmitModel";
import ModelIndex from "../Index";
import InactiveModel from "../OmitedModel/InactiveModel";

const ModelTabs = () => {
  return (
    <>
      <ModelIndex />
      <Tabs mt={5} size="sm" as="b">
        <TabList>
          <Tab _hover="black" as="b">
            All (2)
          </Tab>
          <Tab as="b">Active (1)</Tab>
          <Tab as="b"> Inactive (1)</Tab>
        </TabList>

        <TabPanels>
          <TabPanel
            m={0}
            display="inline-flex"
            flexDirection="row"
            justifyContent="center"
          >
            <OmitModel />
            <InactiveModel />
          </TabPanel>
          <TabPanel>
            <OmitModel />
          </TabPanel>

          <TabPanel>
            <InactiveModel />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default ModelTabs;
