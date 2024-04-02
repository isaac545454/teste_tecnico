import { useQuery } from "@tanstack/react-query"
import { ListProducts, ListProductsParams } from "../http/ListProducts"

export const useQueryListProducts = (params: ListProductsParams) => {
  return useQuery({
    queryKey: ["useQueryListProducts"],
    queryFn: () => ListProducts(params),
  })
}
