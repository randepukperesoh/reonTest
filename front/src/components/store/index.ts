import { configureStore } from '@reduxjs/toolkit'
import Slice from './Slice';

const store = configureStore({
  reducer: {
    todos: Slice,
  },
})

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch