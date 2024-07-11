import { ProductWithTotal } from '../../../models/ProductWithTotal'
import { TypeCreate } from '../TypeCreate'

export const totalCount = ({ set, item: items }: TypeCreate<Array<ProductWithTotal>>) => {
	const result = items.reduce((acc, obj) => acc + obj.amount, 0)
	set({ cartItemCount: result })
}
