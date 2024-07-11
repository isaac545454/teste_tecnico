import { Product } from '../../../models/Product'
import { TypeCreate } from '../TypeCreate'

export const add = ({ get, item: newItem, set }: TypeCreate<Product>) => {
	const { cart, TotalResultsCart, TotalCarItemCount } = get()
	const indexItem = cart.findIndex(item => item.id === newItem.id)

	if (indexItem !== -1) {
		const cartList = [...cart]
		cartList[indexItem].amount += 1
		cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price

		set({ cart: cartList })
		TotalResultsCart(cartList)
		TotalCarItemCount(cartList)
		return
	}

	const data = {
		...newItem,
		amount: 1,
		total: newItem.price,
	}

	set(state => {
		const newCart = [...state.cart, data]
		TotalResultsCart(newCart)
		TotalCarItemCount(newCart)
		return { cart: newCart }
	})
}
