import { ElementRef, useRef, useState } from 'react'
import { useQueryListProducts } from '../../service/query/useQueryListProducts'

import { Product } from '../../models/Product'
import { useCartStore } from '../../store/cart/cartStore'

export const useHome = () => {
  const [filter, setFilter] = useState('')

  const {
    data: dataProducts,
    isLoading: isLoadingProducts,
    isError: ProductsError,
    refetch: ProductsRefetch,
  } = useQueryListProducts({ filter })

  const { AddItemCart, cart } = useCartStore()
  const InputRef = useRef<ElementRef<'input'>>(null)

  const verifyCount = (data: Product): number => {
    const filterCart = cart.find((item) => item.id === data.id)
    return filterCart?.amount ?? 0
  }

  const handleReloadProducts = async () => {
    await setFilter('')
    ProductsRefetch()
  }

  return {
    filter,
    setFilter,
    verifyCount,
    dataProducts,
    isLoadingProducts,
    ProductsError,
    ProductsRefetch,
    AddItemCart,
    handleReloadProducts,
    InputRef,
  }
}
