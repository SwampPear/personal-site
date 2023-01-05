import { createSlice } from '@reduxjs/toolkit';
import { stat } from 'fs';
import { RootState } from '../../app/store';


export interface DarkModeState {
  value: boolean;
  status: 'light' | 'dark';
}

const initialState: DarkModeState = {
  value: false,
  status: 'light',
}

export const darkModeSlice = createSlice({
  name: 'darkmode',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value
    }
  }
})

export const { toggle } = darkModeSlice.actions

export const selectDarkModeState = (state: RootState) => state.darkMode.value

export default darkModeSlice.reducer
