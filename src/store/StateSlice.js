import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    popup:false,
    cartmeue : false,
    overLay: false,
  }
}

const StateSlice = createSlice({
  name: 'ShowAndHide',
  initialState,
  reducers: {
    ShowPopUp(state, actions) {
      state.value.popup = true
      state.value.overLay = true

    },
    ShowCart(state, actions) {
     state.value.cartmeue = true
     state.value.overLay = true
     console.log(actions)

   },

    Hide(state, actions) {
      state.value.popup = false
      state.value.cartmeue = false
      state.value.overLay = false
      
    },

  },
})

export const {ShowPopUp ,ShowCart, Hide } = StateSlice.actions
export default StateSlice.reducer