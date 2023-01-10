import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import darkModeReducer from '../features/darkmode/darkModeSlice'
import navReducer from '../features/nav/navSlice'


export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    nav: navReducer
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
