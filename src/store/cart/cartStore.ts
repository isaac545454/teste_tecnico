import { create } from 'zustand'
import { CartState } from './cartState'
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'
import { remove } from './actions/remove'
import { add } from './actions/add'
import { clear } from './actions/clear'
import { totalCount } from './actions/totalCount'
import { totalCart } from './actions/totalCard'
import { removeCart } from './actions/removeCart'

const persistOptions: PersistOptions<CartState> = {
	name: 'food-storage',
	storage: createJSONStorage(() => sessionStorage),
}

export const useCartStore = create(
	persist(
		(set, get) => ({
			cart: [],
			total: 0,
			cartItemCount: 0,
			TotalResultsCart: items => totalCart({ get, set, item: items }),
			TotalCarItemCount: items => totalCount({ set, get, item: items }),
			AddItemCart: newItem => add({ get, set, item: newItem }),
			RemoveItemCart: item => remove({ get, set, item }),
			removeProductFromCart: item => removeCart({ get, set, item }),
			ClearCart: () => clear({ set }),
		}),
		persistOptions,
	),
)
