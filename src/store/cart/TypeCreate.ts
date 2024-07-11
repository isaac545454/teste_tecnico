import { SetState } from 'zustand'
import { CartState } from './cartState'

export type TypeCreate<TypeItem> = {
	set: SetState<CartState>
	get: () => CartState
	item: TypeItem
}
