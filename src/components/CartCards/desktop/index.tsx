import { ProductWithTotal } from "../../../models/ProductWithTotal"
import RemoveImage from "/remove_item.svg"
import AddImage from "/add_item.svg"
import CrashImage from "/crash.svg"
import * as S from "./style"
import { useCartContext } from "../../../context/useContextCart"

export const CardDesktop = (props: ProductWithTotal) => {
  const { amount, id, image, price, title } = props
  const { AddItemCart, RemoveItemCart, removeProductFromCart } =
    useCartContext()
  return (
    <S.GridDesktop key={id}>
      <S.ItemGrid>
        <S.Image src={image} alt={title} />
        <S.ContainerTitle>
          <S.Title>{title}</S.Title>
          <S.Title>{price}</S.Title>
        </S.ContainerTitle>
      </S.ItemGrid>
      <S.ItemGrid>
        <S.ContainerCount>
          <S.Button>
            <img
              src={RemoveImage}
              alt="remover"
              onClick={() => RemoveItemCart({ id, image, price, title })}
            />
          </S.Button>
          <S.Count>{amount}</S.Count>
          <S.Button onClick={() => AddItemCart({ id, image, price, title })}>
            <img src={AddImage} alt="adicionar" />
          </S.Button>
        </S.ContainerCount>
      </S.ItemGrid>
      <S.ItemGrid>
        <S.ContainerTitle>
          <S.Title> R$ {price}</S.Title>
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
