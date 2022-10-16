import { useEffect, useState } from "react"

//get items from localstorage in cart
export const useCart = () => {
  const getCart = () => {
    return localStorage.getItem('cart')
  }

  const deleteCart = () => {
    localStorage.removeItem('cart')
    return
  }

  const addToCart = (product:any) => {
    if (!getCart) {
      localStorage.setItem('cart',product)
    }
    return
  }

  return {
    getCart,
    deleteCart,
    addToCart
  }
}