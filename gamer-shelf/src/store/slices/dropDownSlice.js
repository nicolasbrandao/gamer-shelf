import { createSlice } from "@reduxjs/toolkit";

const dropDownSlice = createSlice({
  name: 'dropdowns',
  initialState: {
    isOpen: ''
  },
  reducers: {
    toggle(state, action) {
      // Assumption: action.payload === 'dropdown item.id'
      if (state.isOpen === action.payload) {
        state.isOpen = '';
      } else {
        state.isOpen = action.payload;
      }
    }
  }
})

export const { toggle } = dropDownSlice.actions;
export const dropDownsReducer = dropDownSlice.reducer;