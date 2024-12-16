import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  itens: Cardapio[]
  isOpen: boolean
}

const initialState: CartState = {
  itens: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      const prato = state.itens.find((item) => item.id === action.payload.id)

      if (!prato) {
        state.itens.push(action.payload)
      } else {
        alert('Item já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.itens = []
      state.isOpen = false
    }
  }
})

cartSlice.actions.add

export const { add, open, close, remove, clear } = cartSlice.actions
export default cartSlice.reducer
