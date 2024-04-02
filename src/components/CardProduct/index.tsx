import { Product } from "../../models/Product"
import * as S from "./style"

export const CardProduct = ({ id, image, price, title }: Product) => {
  return (
    <S.Container key={id}>
      <S.Image src={image} alt={title} />
      <S.Title>{title}</S.Title>
      <S.Price>{price}</S.Price>
    </S.Container>
  )
}
