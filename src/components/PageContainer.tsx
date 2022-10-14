import React, { PropsWithChildren } from "react";
import { Flex } from "@chakra-ui/react";

const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Flex p={8} w="100%" h="auto" minH="100vh" bg="#F2F2F2">
        {children}
      </Flex>
    </>
  );
};

export default PageContainer;
