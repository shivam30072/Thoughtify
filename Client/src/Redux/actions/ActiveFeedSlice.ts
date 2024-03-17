import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

type CounterState = {
  feed: string
}

const initialState: CounterState = {
  feed: localStorage.getItem("feed") || "",
}

export const ActiveFeedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    setFeed: (state, action: PayloadAction<string>) => {
      state.feed = action.payload
    },
  },
})

export const { setFeed } = ActiveFeedSlice.actions

export const activeFeed = (state: RootState) => state.activeFeed.feed

export default ActiveFeedSlice.reducer