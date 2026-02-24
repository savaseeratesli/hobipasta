import { configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "../pages/counter/counterSlice"

export const store = configureStore(
    {
        reducer: {
            counter: counterSlice.reducer
        }
        
    })

export type RootState = ReturnType<typeof store.getState> //geri döencek olan state tip
export type AppDispact = typeof store.dispatch




