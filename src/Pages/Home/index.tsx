import { useQueryListProducts } from "../../service/query/useQueryListProducts"

export const Home = () => {
  const { data, isLoading } = useQueryListProducts()
  console.log(data)
  return (
    <div>
      <div>aaaaaaaa</div>
    </div>
  )
}
