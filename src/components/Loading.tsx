import { Flex, Text } from "@chakra-ui/react";

const Loading = () => {
  return (
    <>
      <Flex
        bg='#6096FD'
        width="100%"
        h="100vh"
        justify={"center"}
      >
        <Text color='white' fontSize={40} alignSelf={"center"}>
          Loading...
        </Text>
      </Flex>
    </>
  );
};

export default Loading;
