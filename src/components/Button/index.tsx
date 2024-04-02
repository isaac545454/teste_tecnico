import * as S from "./style"

type ButtonProps = React.ComponentProps<"button">

export const Button = ({ ...rest }: ButtonProps) => {
  return <S.Button {...rest} />
}
