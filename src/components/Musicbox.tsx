import {
  Flex,
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";

const Musicbox = () => {
  return (
    <>
      <Flex w={"100%"} h="100vh">
        <Flex
          w={"20%"}
          h="100vh"
          flexDir={"column"}
          align="end"
          fontSize={"3xl"}
        >
          <Tabs variant={"unstyled"}>
            <TabList flexDir={"column"}>
              <Tab _selected={{ color: "white", bg: "blue.500" }}>One</Tab>
              <Tab _selected={{ color: "white", bg: "blue.500" }}>Two</Tab>
              <Tab _selected={{ color: "white", bg: "blue.500" }}>Three</Tab>
            </TabList>
        </Flex>
        <Flex w={["100%"]} h="100vh" bg="white" borderRadius={"5px"}>
          
            <TabPanels>
              <TabPanel>
                <Flex>
                  {/* <lastMonth /> */}
                  <h1>Last Month</h1>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex>
                  {/* <sixMonths /> */}
                  <h1>Six Months</h1>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex>
                  {/* <allTime /> */}
                  <h1>All Time</h1>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </>
  );
};
export default Musicbox;
