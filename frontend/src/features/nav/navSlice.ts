import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


export enum NavOptions {
  home,
  work,
  posts,
  contact
}

export interface NavState {
  page: NavOptions
}

const initialState: NavState = {
  page: NavOptions.home
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    switchPage: (state, action: PayloadAction<NavOptions>) => {
      state.page = action.payload
    }
  }
})

export const { switchPage } = navSlice.actions

export const selectNavPage = (state: RootState) => state.nav.page

export default navSlice.reducer
