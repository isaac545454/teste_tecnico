import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { CartCard } from '../../components/CartCards'

import * as S from './style'

import { PATH } from '../../routes/path'
import { Empty } from '../../components/Empty'
import { useMutationFinalizePurchase } from '../../service/mutate/useMutationFinalizePurchase'
import { formatPrice } from '../../utils/formatPrice'
import { useCartStore } from '../../store/cart/cartStore'

export const Cart = () => {
  // const { cart: DataCart, total, ClearCart } = useCartContext()
  const { cart: DataCart, total, ClearCart } = useCartStore()
  const navigate = useNavigate()
  const { mutate } = useMutationFinalizePurchase({
    onSuccess: () => {
      ClearCart()
      navigate(PATH.PURCHASEMADE)
    },
  })

  if (DataCart.length === 0) {
    return <Empty type="back" onClick={() => navigate(PATH.HOME)} />
  }

  return (
    <S.Container>
      <S.GridHeader>
        <S.TextTotalPrice>PRODUTO</S.TextTotalPrice>
        <S.TextTotalPrice>QTD</S.TextTotalPrice>
        <S.TextTotalPrice>SUBTOTAL</S.TextTotalPrice>
        <S.TextTotalPrice></S.TextTotalPrice>
      </S.GridHeader>
      {DataCart.map((item) => (
        <CartCard {...item} key={item.id} />
      ))}
      <S.Line />
      <S.FooterCard>
        <S.ContainerButton>
          <Button onClick={() => mutate({ params: DataCart })}>
            FINALIZAR PEDIDO
          </Button>
        </S.ContainerButton>
        <S.ContainerTotalPrice>
          <S.TextTotalPrice>TOTAL</S.TextTotalPrice>
          <S.ValueTotalPrice>{formatPrice(total)}</S.ValueTotalPrice>
        </S.ContainerTotalPrice>
      </S.FooterCard>
    </S.Container>
  )
}
