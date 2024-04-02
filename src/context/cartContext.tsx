import React, { createContext } from "react"

import { useCart } from "./useCart"
import { ProductWithTotal } from "../models/ProductWithTotal"
import { Product } from "../models/Product"

type ICart = {
  cart: Array<ProductWithTotal>
  total: number
  cartItemCount: number
  AddItemCart: (newItem: Product) => void
  RemoveItemCart: (Item: Product) => void
  removeProductFromCart: (Item: Product) => void
  setCart: React.Dispatch<React.SetStateAction<ProductWithTotal[]>>
  setCartItemCount: React.Dispatch<React.SetStateAction<number>>
  setTotal: React.Dispatch<React.SetStateAction<number>>
}

export const CartContext = createContext<ICart>({} as ICart)

function CartProvider({ children }: React.PropsWithChildren) {
  const {
    AddItemCart,
    RemoveItemCart,
    cart,
    total,
    cartItemCount,
    removeProductFromCart,
    setCart,
    setCartItemCount,
    setTotal,
  } = useCart()

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        AddItemCart,
        RemoveItemCart,
        cartItemCount,
        removeProductFromCart,
        setCart,
        setCartItemCount,
        setTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
