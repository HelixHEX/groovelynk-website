import React, {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import axios, { AxiosResponse } from "axios";
import Cookies from "universal-cookie";
import Loading from "../components/Loading";
// import { Flex } from "@chakra-ui/react";
const cookies = new Cookies();

const CartContext = createContext({});

const CartProvider = (props: PropsWithChildren) => {
  const [cart, setCart] = useState<any>(null);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
