import { Flex, Text } from "@chakra-ui/react";

const Loading = () => {
  return (
    <>
      <Flex
        bgGradient="linear(to-br, #29DE69, #17803C)"
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
