import { useQueryListProducts } from "../../query/useQueryListProducts"

export const Home = () => {
  const { data, isLoading } = useQueryListProducts()
  return <div></div>
}
