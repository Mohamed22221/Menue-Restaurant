import { configureStore   } from '@reduxjs/toolkit'
import SliceCart from './SliceCart'
import StateSlice from './StateSlice'


export const Store = configureStore({
  reducer: {
      SliceCart : SliceCart,
      ShowAndHide: StateSlice,
  },
  
})
