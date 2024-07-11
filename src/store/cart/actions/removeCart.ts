import { Product } from '../../../models/Product'
import { TypeCreate } from '../TypeCreate'

export const removeCart = ({ get, item, set }: TypeCreate<Product>) => {
	const { cart, TotalResultsCart, TotalCarItemCount } = get()
	const newCart = cart.filter(cartItem => cartItem.id !== item.id)
	set({ cart: newCart })
	TotalResultsCart(newCart)
	TotalCarItemCount(newCart)
}
