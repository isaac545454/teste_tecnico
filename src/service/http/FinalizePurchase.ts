import { ProductWithTotal } from "../../models/ProductWithTotal"

export type FinalizePurchaseParams = {
  params: Array<ProductWithTotal>
}

export const FinalizePurchase = ({ params }: FinalizePurchaseParams) => {
  const data = new Promise((resolved) => {
    return resolved(params)
  })

  return data
}
