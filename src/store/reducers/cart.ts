import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurantes } from '../../pages/ListaHome'

type CartState = {
  itens: Restaurantes[]
}

const initialState: CartState = {
  itens: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Restaurantes>) => {
      state.itens.push(action.payload)
    }
  }
})

cartSlice.actions.add

export const { add } = cartSlice.actions
export default cartSlice.reducer
