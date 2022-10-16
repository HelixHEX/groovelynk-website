import {
  Flex,
  Button,
  ButtonGroup,
  useColorModeValue,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ProductSimple from "./musiccard";

const Musicbox = () => {
  // create use states for the buttons so that when one is selected it shows a different page
  const [duration, setDuration] = useState("month");
  const Bg = useColorModeValue("white", "#6096FD");
  return (
    <>
      <Flex w={"100%"} h="100vh">
        <Flex h={"100vh"} w={"20%"} fontSize="9xl" flexDir={"column"} mt={10}>
          {/* <ButtonGroup flexDir="column" mt={10}> */}
          {/* <HStack flexDir={'column'} spacing=> */}
            <Button
              variant={duration === "month" ? "solid" : "ghost"}
              onClick={() => setDuration("month")}
              bg={duration === "month" ? Bg : "none"}
              rounded={0}
              borderTopLeftRadius={5}
              borderBottomLeftRadius={5}
            >
              Last Month
            </Button>
            <Button
              variant={duration === "sixmonths" ? "solid" : "ghost"}
              onClick={() => setDuration("sixmonths")}
              bg={duration === "sixmonths" ? Bg : "none"}
              rounded={0}
              borderTopLeftRadius={5}
              borderBottomLeftRadius={5}
            >
              Last 6 Months
            </Button>

            <Button
              variant={duration === "alltime" ? "solid" : "ghost"}
              onClick={() => setDuration("alltime")}
              bg={duration === "alltime" ? Bg : "none"}
              rounded={0}
              borderTopLeftRadius={5}
              borderBottomLeftRadius={5}
            >
              All Time
            </Button>
          {/* </HStack> */}
          {/* </ButtonGroup> */}
        </Flex>
        <Flex h="100vh" w={"80%"} bg={Bg} borderRadius="10px">
          <ProductSimple />
        </Flex>
      </Flex>
    </>
  );
};
export default Musicbox;
