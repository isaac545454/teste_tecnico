import { useNavigate } from "react-router-dom"
import { useCartContext } from "../../context/useContextCart"
import * as S from "./style"
import ImageCard from "/carrinho.svg"
import { PATH } from "../../routes/path"

export const Header = () => {
  const { cartItemCount } = useCartContext()
  const navigate = useNavigate()

  return (
    <S.Container>
      <S.Title onClick={() => navigate(PATH.HOME)}>WeMovies</S.Title>
      <S.ContainerCard onClick={() => navigate(PATH.CART)}>
        <S.ContentCard>
          <S.Mycart>Meu Carrinho</S.Mycart>
          <S.CartItems>{cartItemCount} itens</S.CartItems>
        </S.ContentCard>
        <img src={ImageCard} alt="icone de bolsa" />
      </S.ContainerCard>
    </S.Container>
  )
}
