import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  cartItem : [] ,
  cartQuantity: 0 ,
  cartTotalAmount: 0 
}

export const SliceCart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //add cart item
    AddToCart : (state ,action) =>{
      const FindMenueIndex =  state.cartItem.findIndex((item) => item.id == action.payload.id)
        if (FindMenueIndex >= 0) {
            state.cartItem[FindMenueIndex].quantityUp += 1 
        }else{
            const CartDistracture = {...action.payload ,quantityUp : 1}
            state.cartItem.push(CartDistracture)
        }
    },
    //delete cart item
    deleteCart : (state ,action) =>{
      state.cartItem = state.cartItem.filter((cartitem) => cartitem.id != action.payload )
    }
    
  },
 
})

export const {AddToCart ,deleteCart} = SliceCart.actions

export default SliceCart.reducer