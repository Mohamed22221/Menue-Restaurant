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
    AddToCart : (state ,action) =>{
      const FindMenueIndex =  state.cartItem.findIndex((item) => item.id == action.payload.id)
      console.log(FindMenueIndex)
        if (FindMenueIndex >= 0) {
            state.cartItem[FindMenueIndex].quantityUp += 1 
        }else{
            const CartDistracture = {...action.payload ,quantityUp : 1}
            state.cartItem.push(CartDistracture)
            
            
        }
    }
  },
})

export const {AddToCart } = SliceCart.actions

export default SliceCart.reducer