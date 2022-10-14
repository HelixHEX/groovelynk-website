import React, { PropsWithChildren } from "react";
import { Flex } from "@chakra-ui/react";
import { useLightGray } from "../utils/theme";

const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  const lightGray = useLightGray()
  return (
    <>
      <Flex flexDir={'column'} p={8} w="100%" h="auto" minH="100vh" bg={lightGray}>
        {children}
      </Flex>
    </>
  );
};

export default PageContainer;
