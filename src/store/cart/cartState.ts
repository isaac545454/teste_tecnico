import { Product } from '../../models/Product'
import { ProductWithTotal } from '../../models/ProductWithTotal'

export type CartState = {
  cart: Array<ProductWithTotal>
  total: number
  cartItemCount: number
  AddItemCart: (newItem: Product) => void
  RemoveItemCart: (item: Product) => void
  removeProductFromCart: (item: Product) => void
  ClearCart: () => void
  TotalResultsCart: (items: Array<ProductWithTotal>) => void
  TotalCarItemCount: (items: Array<ProductWithTotal>) => void
}
