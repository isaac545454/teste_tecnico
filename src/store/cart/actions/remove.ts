import { Product } from '../../../models/Product'
import { TypeCreate } from '../TypeCreate'

export const remove = ({ get, set, item }: TypeCreate<Product>) => {
	const { cart, TotalResultsCart, TotalCarItemCount, removeProductFromCart } = get()
	const indexItem = cart.findIndex(cartItem => cartItem.id === item.id)

	if (cart[indexItem]?.amount > 1) {
		const cartList = [...cart]
		cartList[indexItem].amount -= 1
		cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price

		set({ cart: cartList })
		TotalResultsCart(cartList)
		TotalCarItemCount(cartList)
		return
	}

	removeProductFromCart(item)
}
