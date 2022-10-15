import { Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { useLightBlue } from "../utils/theme";

const Navbar = () => {
  const lightBlue = useLightBlue();

  return (
    <>
      <Heading color={lightBlue}>Spotlist.</Heading>
    </>
  );
};

export default Navbar;
