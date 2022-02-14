import { configureStore } from '@reduxjs/toolkit'
import Cartslice from '../features/Cartslice'
import Checkingslice from '../features/Checkingslice'
import RestaurantUserSlice from '../features/RestaurantUserSlice'
import Userslice from '../features/Userslice'

export const store = configureStore({
  reducer: {cart:Cartslice,
            user:Userslice,
            restaurantuser:RestaurantUserSlice,
            check__user:Checkingslice},
})
