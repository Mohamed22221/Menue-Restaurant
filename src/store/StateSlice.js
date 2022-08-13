import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    popup:false,
    cartmeue : false,
    search : false,
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
     

   },
   ShowSearch(state, actions) {
    state.value.search = true
    state.value.overLay = true
    

  },

    Hide(state, actions) {
      state.value.popup = false
      state.value.cartmeue = false
      state.value.search = false
      state.value.overLay = false
      
    },

  },
})

export const {ShowPopUp ,ShowCart, ShowSearch,Hide } = StateSlice.actions
export default StateSlice.reducer