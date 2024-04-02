import { ProductWithTotal } from "../../models/ProductWithTotal"
import { CardMobile } from "./Mobile"
import { CardDesktop } from "./desktop"

export const CartCard = (props: ProductWithTotal) => {
  return (
    <div>
      <CardDesktop {...props} />
      <CardMobile {...props} />
    </div>
  )
}
