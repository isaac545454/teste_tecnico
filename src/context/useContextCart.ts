import { useContext } from "react"
import { CartContext } from "./cartContext"

export function useCartContext() {
  return useContext(CartContext)
}
