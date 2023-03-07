import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    isOpen: '',
    currentSelection: 'shooter'
  },
  reducers: {
    toggleFilters(state, action) {
      if (state.isOpen === action.payload) {
        state.isOpen = ''
      } else {
        state.isOpen = action.payload;
      }
    },
    updateFiltersSelection: (state, action) => {
      state.currentSelection.push(action.payload); 
    }
  }
})

export const { toggleFilters, updateFiltersSelection } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

