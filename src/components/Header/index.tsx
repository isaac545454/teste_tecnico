import * as S from "./style"
import ImageCard from "/carrinho.svg"

export const Header = () => {
  return (
    <S.Container>
      <S.Title>WeMovies</S.Title>
      <S.ContainerCard>
        <S.ContentCard>
          <S.Mycart>Meu Carrinho</S.Mycart>
          <S.CartItems>0 itens</S.CartItems>
        </S.ContentCard>
        <img src={ImageCard} alt="icone de bolsa" />
      </S.ContainerCard>
    </S.Container>
  )
}
