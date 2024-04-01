import { Product } from "./Product"

export type ProductWithTotal = Product & {
  total: number
  amount: number
}
