import { ProductWithTotal } from "../../../models/ProductWithTotal"
import CrashImage from "/crash.svg"
import * as S from "./style"
import { useCartContext } from "../../../context/useContextCart"
import { Count } from "./Count"
import { formatPrice } from "../../../utils/formatPrice"

export const CardDesktop = (props: ProductWithTotal) => {
  const { amount, id, image, price, title } = props
  const { removeProductFromCart } = useCartContext()
  return (
    <S.GridDesktop key={id}>
      <S.ItemGrid>
        <S.Image src={image} alt={title} />
        <S.ContainerTitle>
          <S.Title>{title}</S.Title>
          <S.Title>{formatPrice(price)}</S.Title>
        </S.ContainerTitle>
      </S.ItemGrid>
      <S.ItemGrid>
        <Count {...props} />
      </S.ItemGrid>
      <S.ItemGrid>
        <S.ContainerTitle>
          <S.Title>{formatPrice(price * amount)}</S.Title>
        </S.ContainerTitle>
      </S.ItemGrid>
      <S.ItemGrid>
        <S.Button
          onClick={() => removeProductFromCart({ id, image, price, title })}
        >
          <img src={CrashImage} alt="remover item" />
        </S.Button>
      </S.ItemGrid>
    </S.GridDesktop>
  )
}
