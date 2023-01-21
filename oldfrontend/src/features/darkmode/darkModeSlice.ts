import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


export interface DarkModeState {
  value: boolean;
  init: boolean;
}

const initialState: DarkModeState = {
  value: false,
  init: false
}

export const darkModeSlice = createSlice({
  name: 'darkmode',
  initialState,
  reducers: {
    toggle: (state) => {
      if (!state.init && !state.value) {
        state.init = true
      }

      state.value = !state.value
    }
  }
})

export const { toggle } = darkModeSlice.actions

export const selectDarkModeState = (state: RootState) => state.darkMode.value
export const selectDarkModeInit = (state: RootState) => state.darkMode.init

export default darkModeSlice.reducer
