import { Product } from "../../models/Product"
import { api } from "../API"

export const ListProducts = async () => {
  const { data } = await api.get<Array<Product>>("products")
  return data
}
