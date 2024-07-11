import { ProductWithTotal } from '../../../models/ProductWithTotal'
import { TypeCreate } from '../TypeCreate'

export const totalCart = ({ set, item: items }: TypeCreate<Array<ProductWithTotal>>) => {
	const result = items.reduce((acc, obj) => acc + obj.total, 0)
	set({ total: result })
}
