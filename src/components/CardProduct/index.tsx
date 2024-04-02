import { Product } from "../../models/Product"
import { Button } from "../Button"
import ImageNewCart from "/novo_item_no_carrinho.svg"
import * as S from "./style"

type CardProductProps = {
  onClick: (item: Product) => void
} & Product

export const CardProduct = (props: CardProductProps) => {
  const { id, image, price, title, onClick } = props
  return (
    <S.Container key={id}>
      <S.Image src={image} alt={title} />
      <S.Title>{title}</S.Title>
      <S.Price>{price}</S.Price>
      <Button onClick={() => onClick({ id, image, price, title })}>
        <S.TextButton>
          <S.ImageButton
            src={ImageNewCart}
            alt="icone de adicionar um novo item"
          />
          <span>0</span>
        </S.TextButton>
        ADICIONAR AO CARRINHO
      </Button>
    </S.Container>
  )
}
