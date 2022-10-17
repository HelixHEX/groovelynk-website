import React, { PropsWithChildren } from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";

const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  const bg = useColorModeValue('#F2F2F2', '#171923')
  return (
    <>
      <Flex
        flexDir={"column"}
        bg={bg}
        w="100%"
        minH="100vh"
        h='auto'
        p={8}
      >
        <Flex mt={4}>
        {children}
        </Flex>
      </Flex>
    </>
  );
};

export default PageContainer;
