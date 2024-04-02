import { useCartContext } from "../../context/useContextCart"
import * as S from "./style"

export const Cart = () => {
  const { cart, total } = useCartContext()
  console.log(cart)
  return <S.Container>Cart</S.Container>
}
