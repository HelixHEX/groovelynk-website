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
import { FiBell, FiChevronDown } from "react-icons/fi";
import { useColorModeValue } from "@chakra-ui/react";
import { useDarkGray } from "../utils/theme";
import ShoppingCart from "./ShoppingCart";

const Navbar = () => {
  const lightBlue = "#6096FD";
  const bg = useColorModeValue("#F2F2F2", "#171923");
  const textColor = useDarkGray();
  const { colorMode, toggleColorMode } = useColorMode();

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
                      src={
                        "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                      }
                    />
                    <VStack
                      display={{ base: "none", md: "flex" }}
                      alignItems="flex-start"
                      spacing="1px"
                      ml="2"
                    >
                      <Text fontSize="sm"> Elias </Text>
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
                  <MenuItem >Log Out</MenuItem>
                  <MenuItem onClick={toggleColorMode}>
                    Toggle {colorMode === "light" ? "Dark" : "Light"}
                  </MenuItem>
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

