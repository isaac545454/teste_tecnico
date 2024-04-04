import { useState } from "react"
import { Product } from "../models/Product"
import { ProductWithTotal } from "../models/ProductWithTotal"

export const useCart = () => {
  const [cart, setCart] = useState<Array<ProductWithTotal>>([])
  const [total, setTotal] = useState(0)
  const [cartItemCount, setCartItemCount] = useState(0)

  const TotalResultsCart = (items: Array<ProductWithTotal>) => {
    const MyCart = items
    const result = MyCart.reduce((acc, obj) => acc + obj.total, 0)

    setTotal(result)
  }

  const TotalCarItemCount = (items: Array<ProductWithTotal>) => {
    const MyCart = items
    const result = MyCart.reduce((acc, obj) => acc + obj.amount, 0)
    setCartItemCount(result)
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
      TotalCarItemCount(cartList)
      return
    }

    const data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    }

    setCart((products) => [...products, data])
    TotalResultsCart([...cart, data])
    TotalCarItemCount([...cart, data])
  }

  const removeProductFromCart = (Item: Product) => {
    const removeItem = cart.filter((item) => item.id !== Item.id)
    TotalResultsCart(removeItem)
    TotalCarItemCount(removeItem)
    setCart(removeItem)
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
      TotalCarItemCount(cartList)
      return
    }

    removeProductFromCart(Item)
  }

  const ClearCart = () => {
    setCart([])
    setCartItemCount(0)
    setTotal(0)
  }

  return {
    AddItemCart,
    RemoveItemCart,
    total,
    cart,
    cartItemCount,
    removeProductFromCart,
    ClearCart,
  }
}
