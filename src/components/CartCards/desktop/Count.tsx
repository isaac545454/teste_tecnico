import RemoveImage from "/remove_item.svg"
import AddImage from "/add_item.svg"
import { useCartContext } from "../../../context/useContextCart"
import { ProductWithTotal } from "../../../models/ProductWithTotal"
import * as S from "./style"

export const Count = (props: ProductWithTotal) => {
  const { AddItemCart, RemoveItemCart } = useCartContext()
  return (
    <S.ContainerCount>
      <S.Button>
        <img
          src={RemoveImage}
          alt="remover"
          onClick={() => RemoveItemCart(props)}
        />
      </S.Button>
      <S.Count>{props.amount}</S.Count>
      <S.Button onClick={() => AddItemCart(props)}>
        <img src={AddImage} alt="adicionar" />
      </S.Button>
    </S.ContainerCount>
  )
}
