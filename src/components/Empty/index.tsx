import { Button } from "../Button"
import { TypeEmpity, optionsEmpty } from "./options"
import * as S from "./style"

type EmptyProps = {
  type: TypeEmpity
  onClick: () => void
}

export const Empty = ({ onClick, type }: EmptyProps) => {
  const { img, textButton, title } = optionsEmpty[type]
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
