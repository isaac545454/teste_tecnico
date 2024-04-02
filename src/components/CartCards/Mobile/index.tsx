import { useCartContext } from "../../../context/useContextCart"
import { ProductWithTotal } from "../../../models/ProductWithTotal"
import { Count } from "../desktop/Count"
import * as S from "./style"
import CrashImage from "/crash.svg"

export const CardMobile = (props: ProductWithTotal) => {
  const { amount, id, image, price, title } = props
  const { removeProductFromCart } = useCartContext()
  return (
    <S.Container>
      <S.Image src={image} alt={title} />
      <S.Grid>
        <S.ContainerTilte>
          <S.Title>{title}</S.Title>
          <S.Title>
            R$ {price.toFixed(2)}
            <S.Button
              onClick={() => removeProductFromCart({ id, image, price, title })}
            >
              <img src={CrashImage} alt="remover item" />
            </S.Button>
          </S.Title>
        </S.ContainerTilte>
        <S.ContainerTilte>
          <Count {...props} />
          <S.ContainerPrice>
            <S.Subtitle>SUBTOTAL</S.Subtitle>
            <S.Price>R$ ${(amount * price).toFixed(2)}</S.Price>
          </S.ContainerPrice>
        </S.ContainerTilte>
      </S.Grid>
    </S.Container>
  )
}
