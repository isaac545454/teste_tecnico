import React, { createContext } from "react"

import { useCart } from "./useCart"
import { ProductWithTotal } from "../models/ProductWithTotal"
import { Product } from "../models/Product"

type ICart = {
  cart: Array<ProductWithTotal>
  total: number
  AddItemCart: (newItem: Product) => void
  RemoveItemCart: (Item: Product) => void
}

export const CartContext = createContext<ICart>({} as ICart)

function CartProvider({ children }: React.PropsWithChildren) {
  const { AddItemCart, RemoveItemCart, cart, total } = useCart()
  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        AddItemCart,
        RemoveItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
