import { configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "../features/counter/counterSlice"
import { cartSlice } from "../features/cart/cartSlice"
import { catalogSlice } from "../features/catalog/catalogSlice"
import { accountSlice } from "../features/account/accountSlice"

export const store = configureStore(
    {
        reducer: {
            counter: counterSlice.reducer,
            cart: cartSlice.reducer,
            catalog: catalogSlice.reducer,
            account: accountSlice.reducer
        }
        
    })

export type RootState = ReturnType<typeof store.getState> //geri döencek olan state tip
export type AppDispact = typeof store.dispatch




