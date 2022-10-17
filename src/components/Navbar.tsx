import {
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { useColorModeValue } from "@chakra-ui/react";
import { useDarkGray } from "../utils/theme";
import ShoppingCart from "./ShoppingCart";
import { useLogout } from "../utils/auth";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
const Navbar = () => {
  const lightBlue = "#6096FD";
  const bg = useColorModeValue("#F2F2F2", "#171923");
  const textColor = useDarkGray();
  const { colorMode, toggleColorMode } = useColorMode();
  const {logout} = useLogout();

  const {user} = useContext(UserContext);
  const image = user?.images[0].url;
  
  return (
    <>
      <Flex bg={bg} flexDir={"row"} justify="space-between" pt={2} mb={-8}>
        <Flex ml={8} pt={2}>
          <Heading color={lightBlue}>Spotlist.</Heading>
        </Flex>
        <Flex bg={bg} justify={"end"} textColor={textColor} mr={8}>
          <HStack>
            <ShoppingCart />
            <Flex>
              <Menu>
                <MenuButton
                  py={2}
                  transition="all 0.3s"
                  _focus={{ boxShadow: "none" }}
                >
                  <HStack>
                    <Avatar
                      size={"md"}
                      src={image}
                    />
                    <VStack
                      display={{ base: "none", md: "flex" }}
                      alignItems="flex-start"
                      spacing="1px"
                      ml="2"
                    >
                      <Text fontSize="sm"> {user.display_name} </Text>
                    </VStack>
                    <Box display={{ base: "none", md: "flex" }}>
                      <FiChevronDown />
                    </Box>
                  </HStack>
                </MenuButton>
                <MenuList
                  bg={useColorModeValue("white", "gray.900")}
                  borderColor={useColorModeValue("gray.200", "gray.700")}
                >
                  <MenuItem onClick={toggleColorMode}>
                    Toggle {colorMode === "light" ? "Dark" : "Light"}
                  </MenuItem>
                  <MenuItem onClick={logout}>Log Out</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </HStack>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
