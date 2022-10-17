import React, {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";

type CartContextProps = {
  cart: any;
  setCart: (product: any) => void;
  emptyCart: () => void;
  getCart: () => any;
};

const CartContext = createContext<CartContextProps>({
  cart: null,
  setCart: () => {},
  emptyCart: () => {},
  getCart: () => {},
});

const CartProvider = (props: PropsWithChildren) => {
  const [cart, updateCart] = useState<any>(null);

  const setCart = (product:any) => {
    updateCart(product);
    localStorage.setItem("cart", JSON.stringify(product));
  };

  const emptyCart = () => {
    updateCart(null);
  };

  const getCart = () => {
    return cart;
  };

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      updateCart(JSON.parse(cart));
    } else {
      updateCart(null);
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart, emptyCart, getCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
