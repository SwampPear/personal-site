import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { updateUrl } from '../../app/utils';


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

      switch (action.payload) {
        case NavOptions.work:
          updateUrl('/work')
          break
        case NavOptions.posts:
          updateUrl('/posts')
          break
        case NavOptions.contact:
          updateUrl('/contact')
          break
        default:
          updateUrl('')
      }
    }
  }
})

export const { switchPage } = navSlice.actions

export const selectNavPage = (state: RootState) => state.nav.page

export default navSlice.reducer
