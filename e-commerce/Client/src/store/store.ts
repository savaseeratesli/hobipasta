import { configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "../pages/counter/counterSlice"
import { cartSlice } from "../pages/cart/cartSlice"

export const store = configureStore(
    {
        reducer: {
            counter: counterSlice.reducer,
            cart: cartSlice.reducer
        }
        
    })

export type RootState = ReturnType<typeof store.getState> //geri döencek olan state tip
export type AppDispact = typeof store.dispatch




