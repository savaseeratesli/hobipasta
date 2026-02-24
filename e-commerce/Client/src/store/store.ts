import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore(
    {
        reducer: {

        }
        
    })

export type RootState = ReturnType<typeof store.getState> //geri döencek olan state tip
export type AppDispact = typeof store.dispatch




