import { InputHTMLAttributes, forwardRef } from "react"
import * as S from "./styles"

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <S.Input ref={ref} {...props} />
})
