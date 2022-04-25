import { configureStore } from '@reduxjs/toolkit'
import SliceCart from './SliceCart'
export const Store = configureStore({
  reducer: {
      SliceCart : SliceCart
  },
  
})
