import { useState } from "react"

//get items from localstorage in cart
export const useCart = () => {
  const [cart, setCart] = useState<any>({})

  const getCart = () => {
    setCart(localStorage.getItem('cart'))
    return cart
  }

  const deleteCart = () => {
    localStorage.removeItem('cart')
    setCart({})
    return
  }

  const addToCart = (product:any) => {
    if (!getCart) {
      localStorage.setItem('cart',product)
    }
    setCart(product)
  }

  return {
    cart,
    getCart,
    deleteCart,
    addToCart
  }
}