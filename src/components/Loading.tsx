import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <>
      <Flex bg="#6096FD" width="100%" h="100vh" justify={'center'} align="center">
          <Heading mr={5} pb={0.5} color={'white'}>Loading</Heading>
          <ScaleLoader color="white" />
      </Flex>
    </>
  );
};

export default Loading;
