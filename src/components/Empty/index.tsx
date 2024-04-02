import { Button } from "../Button"
import * as S from "./style"

type EmptyProps = {
  img: string
  title: string
  textButton: string
  onClick: () => void
}

//"Parece que não há nada por aqui :("
//"Recarregar página"

export const Empty = ({ img, onClick, title, textButton }: EmptyProps) => {
  return (
    <S.NotItens>
      <S.TextMessage>{title}</S.TextMessage>
      <img src={img} alt={title} />
      <S.ContainerButton>
        <Button onClick={onClick}>{textButton}</Button>
      </S.ContainerButton>
    </S.NotItens>
  )
}
