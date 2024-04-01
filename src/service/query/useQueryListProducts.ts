import { useQuery } from "@tanstack/react-query"
import { ListProducts } from "../http/ListProducts"

export const useQueryListProducts = () => {
  return useQuery({
    queryKey: ["useQueryListProducts"],
    queryFn: ListProducts,
  })
}
