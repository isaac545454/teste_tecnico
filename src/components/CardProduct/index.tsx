import { Product } from "../../models/Product"
import { Button } from "../Button"
import ImageNewCart from "/novo_item_no_carrinho.svg"
import * as S from "./style"
import { formatPrice } from "../../utils/formatPrice"

type CardProductProps = {
  onClick: (item: Product) => void
  countItens: number
} & Product

export const CardProduct = (props: CardProductProps) => {
  const { id, image, price, title, onClick, countItens } = props
  return (
    <S.Container key={id}>
      <S.Image src={image} alt={title} />
      <S.Title>{title}</S.Title>
      <S.Price>{formatPrice(price)}</S.Price>
      <Button
        isActive={!!countItens}
        onClick={() => onClick({ id, image, price, title })}
      >
        <S.TextButton>
          <S.ImageButton
            src={ImageNewCart}
            alt="icone de adicionar um novo item"
          />
          <span>{countItens}</span>
        </S.TextButton>
        ADICIONAR AO CARRINHO
      </Button>
    </S.Container>
  )
}
