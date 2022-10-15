import { Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";
import {  useNavigate } from "react-router-dom";
import { useDarkGray, useTextColor } from "../utils/theme";

const BackBtn = ({ text }: { text?: string }) => {
  const darkGray = useDarkGray();
  const navigate = useNavigate();
  const textColor = useTextColor()
  return (
    <>
      <Flex
        onClick={() => navigate(-1)}
        color={textColor}
        _hover={{ cursor: "pointer", color: '#6096FD' }}
      >
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
