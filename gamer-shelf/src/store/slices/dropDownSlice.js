import { createSlice } from "@reduxjs/toolkit";

const dropDownSlice = createSlice({
  name: 'dropdowns',
  initialState: {
    isOpen: '',
    currentSelection: ''
  },
  reducers: {
    toggle(state, action) {
      if (state.isOpen === action.payload) {
        state.isOpen = '';
      } else {
        state.isOpen = action.payload;
      }
    },
    updateSelection: (state, action) => {
      state.currentSelection = action.payload
    }
  }
})

export const { toggle, updateSelection } = dropDownSlice.actions;
export const dropDownsReducer = dropDownSlice.reducer;