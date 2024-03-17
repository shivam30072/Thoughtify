import { configureStore } from '@reduxjs/toolkit'
import activeFeedReducer from "./actions/ActiveFeedSlice"

export const store = configureStore({
  reducer: {
   activeFeed: activeFeedReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch