import { Product } from "../../models/Product"
import { api } from "../API"

export type ListProductsParams = {
  filter?: string
}

export const ListProducts = async ({
  filter,
}: ListProductsParams): Promise<Array<Product>> => {
  const { data } = await api.get<Array<Product>>("products")
  if (filter) {
    return data.filter((product) =>
      product.title.toLowerCase().includes(filter.toLowerCase())
    )
  }
  return data
}
