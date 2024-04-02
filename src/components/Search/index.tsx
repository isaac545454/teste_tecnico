import { InputHTMLAttributes, forwardRef } from "react"
import * as S from "./styles"

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  onClick: () => void
}

export const Search = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { onClick, ...rest } = props
  return (
    <S.Container
      onSubmit={(e) => {
        e.preventDefault()
        onClick()
      }}
    >
      <S.Input ref={ref} {...rest} />
      <>
        <S.Icon size={24} onClick={onClick} />
      </>
    </S.Container>
  )
})
