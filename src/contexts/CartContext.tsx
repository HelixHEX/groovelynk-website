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
  loading: boolean;
};

const CartContext = createContext<CartContextProps>({
  cart: null,
  setCart: () => {},
  emptyCart: () => {},
  loading: true,
});

const CartProvider = (props: PropsWithChildren) => {
  const [cart, updateCart] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const setCart = (product:any) => {
    updateCart(product);
    localStorage.setItem("cart", JSON.stringify(product));
  };

  const emptyCart = () => {
    updateCart(null);
    localStorage.removeItem("cart");
  };

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setLoading(false);
      updateCart(JSON.parse(cart));
    } else {
      setLoading(false);
      updateCart(null);
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart, emptyCart, loading }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
