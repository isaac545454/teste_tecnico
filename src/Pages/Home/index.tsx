import { CardProduct } from "../../components/CardProduct"
import { useCartContext } from "../../context/useContextCart"
import { useQueryListProducts } from "../../service/query/useQueryListProducts"
import * as S from "./style"

export const Home = () => {
  const { data: dataProducts, isLoading } = useQueryListProducts()
  const { AddItemCart } = useCartContext()

  return (
    <S.Grid>
      {dataProducts?.map((item) => (
        <CardProduct
          {...item}
          key={item.id}
          onClick={(item) => AddItemCart(item)}
        />
      ))}
    </S.Grid>
  )
}
