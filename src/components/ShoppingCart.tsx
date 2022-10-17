import {
  Icon,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const ShoppingCart = () => {
  return (
    <>
      <Flex mr={2}>
        <Menu>
          <MenuButton>
            <Icon
              _hover={{ color: "blue.500", cursor: "pointer" }}
              as={CiShoppingCart}
              w={7}
              h={7}
            />
          </MenuButton>
          <MenuList>
            <MenuItem>Tbh Idk what to put here</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};
export default ShoppingCart;
