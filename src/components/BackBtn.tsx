import { Flex, Icon, Text } from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";
import { useDarkGray } from "../utils/theme";

const BackBtn = ({ text }: { text?: string }) => {
  const darkGray = useDarkGray();
  
  return (
    <>
      <Flex color={darkGray} _hover={{cursor: 'pointer', color: 'gray.800'}}>
        <Icon h={30} w={30} as={BiArrowBack} />
        {text ? (
          <Text ml={3} alignSelf={"center"} fontSize={20}>
            {text}
          </Text>
        ) : null}
      </Flex>
    </>
  );
};

export default BackBtn;
