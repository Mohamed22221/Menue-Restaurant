import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  cartItem: [],
  itemOne: {},
  cartQuantity: 0,
  cartTotalAmount: 0
}

export const SliceCart = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    //add cart item
    AddToCart: (state, action) => {
      const FindMenueIndex = state.cartItem.findIndex((item) => item.id == action.payload.id)
      if (FindMenueIndex >= 0) {
        state.cartItem[FindMenueIndex].quantityUp += 1
      } else {
        const CartDistracture = { ...action.payload, quantityUp: 1 }
        state.cartItem.push(CartDistracture)
      }
    },
    //delete cart item
    deleteCart: (state, action) => {
      state.cartItem = state.cartItem.filter((cartitem) => cartitem.id != action.payload.id)

    },
    //increse and decrese quantity
    increseItem: (state, action) => {
      const FindMenueIndex = state.cartItem.findIndex((item) => item.id == action.payload.id)
      if (FindMenueIndex >= 0) {
        state.cartItem[FindMenueIndex].quantityUp += 1
      }
    },
    decreseItem: (state, action) => {
      const FindMenueIndex = state.cartItem.findIndex((item) => item.id == action.payload.id)
      if (FindMenueIndex >= 0) {
        state.cartItem[FindMenueIndex].quantityUp -= 1
      }



    },
    //cartTotalAmount cart item
    TotalAmount: (state, action) => {

      const { total, quantity } = state.cartItem.reduce((previtem, curentItem) => {
        const { price, quantityUp } = curentItem
        const TotalPrice = price * quantityUp // price 
        previtem.total += TotalPrice
        previtem.quantity += quantityUp
        return previtem
      }, {
        total: 0,
        quantity: 0
      });
      state.cartTotalAmount = total
      state.cartQuantity = quantity
    },
    //show one item
    ShowItemid: (state, action) => {
      state.itemOne = action.payload

    },
  },


})


export const { ShowItemid, AddToCart, deleteCart, TotalAmount, increseItem, decreseItem } = SliceCart.actions

export default SliceCart.reducer