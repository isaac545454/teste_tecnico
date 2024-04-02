import * as S from "./style"

type ButtonProps = React.ComponentProps<"button"> & S.ButtonParams

export const Button = ({ ...rest }: ButtonProps) => {
  return <S.Button {...rest} />
}
