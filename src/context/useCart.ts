import { useState } from "react"
import { Product } from "../models/Product"
import { ProductWithTotal } from "../models/ProductWithTotal"

export const useCart = () => {
  const [cart, setCart] = useState<Array<ProductWithTotal>>([])
  const [total, setTotal] = useState(0)

  const TotalResultsCart = (items: Array<ProductWithTotal>) => {
    const MyCart = items
    const result = MyCart.reduce((acc, obj) => acc + obj.total, 0)
    setTotal(parseFloat(result.toFixed(2)))
  }

  function AddItemCart(newItem: Product) {
    const indexItem = cart.findIndex((item) => item.id === newItem.id)

    if (indexItem !== -1) {
      const cartList = cart

      cartList[indexItem].amount = cartList[indexItem].amount + 1
      const totalPrince = cartList[indexItem].amount * cartList[indexItem].price
      cartList[indexItem].total = totalPrince

      setCart(cartList)
      TotalResultsCart(cartList)
      return
    }

    const data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    }

    setCart((products) => [...products, data])
    TotalResultsCart([...cart, data])
  }

  const RemoveItemCart = (Item: Product) => {
    const indexItem = cart.findIndex((item) => item.id === Item.id)
    if (cart[indexItem]?.amount > 1) {
      const cartList = cart

      const totalPrice = cartList[indexItem].total - cartList[indexItem].price
      cartList[indexItem].amount = cartList[indexItem].amount - 1
      cartList[indexItem].total = totalPrice

      setCart(cartList)
      TotalResultsCart(cartList)
      return
    }

    const removeItem = cart.filter((item) => item.id !== Item.id)
    TotalResultsCart(removeItem)
    setCart(removeItem)
  }

  return { AddItemCart, RemoveItemCart, total, cart }
}