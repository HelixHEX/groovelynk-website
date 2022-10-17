import {
  Icon,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
const ShoppingCart = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <>
      <Flex mr={2}>
        <Center>
          <Flex
            onClick={() => navigate("/checkout")}
            _hover={{ color: "#6096FD", cursor: "pointer" }}
          >
            <Icon as={CiShoppingCart} w={7} h={7} />
            {cart ? (
              <Flex
                justify={"center"}
                w={23}
                h={23}
                ml={-3}
                mt={-1}
                rounded={100}
                bg="#6096FD"
              >
                <Text color="white" alignSelf={"center"}>
                  1
                </Text>
              </Flex>
            ) : null}
          </Flex>
        </Center>
      </Flex>
    </>
  );
};
export default ShoppingCart;
