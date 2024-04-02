import { CardProduct } from "../../components/CardProduct"
import { useQueryListProducts } from "../../service/query/useQueryListProducts"
import * as S from "./style"

export const Home = () => {
  const { data: dataProducts, isLoading } = useQueryListProducts()

  return (
    <S.Grid>
      {dataProducts?.map((item) => <CardProduct {...item} key={item.id} />)}
    </S.Grid>
  )
}
