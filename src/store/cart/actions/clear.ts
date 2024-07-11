import { Product } from '../../../models/Product'
import { TypeCreate } from '../TypeCreate'

export const clear = ({ set }: Pick<TypeCreate<Product>, 'set'>) => {
	set({ cart: [], cartItemCount: 0, total: 0 })
}
