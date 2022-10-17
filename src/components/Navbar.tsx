import { Flex, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { useLightBlue } from "../utils/theme";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { useColorModeValue } from "@chakra-ui/react";

const Navbar = () => {
  const lightBlue = "#6096FD";
  const bg = useColorModeValue("#F2F2F2", "#171923");

  return (
    <>
      <Flex bg={bg}>
        <Heading mt={3} ml={10} mb={-12} color={lightBlue}>Spotlist.</Heading>
        <ColorModeSwitcher  />
      </Flex>
    </>
  );
};

export default Navbar;
