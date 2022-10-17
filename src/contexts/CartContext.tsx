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
};

const CartContext = createContext<CartContextProps>({
  cart: null,
  setCart: () => {},
  emptyCart: () => {},
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

  useEffect(() => {
    console.log(cart)
  }, [cart])

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      updateCart(JSON.parse(cart));
    } else {
      updateCart(null);
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart, emptyCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
