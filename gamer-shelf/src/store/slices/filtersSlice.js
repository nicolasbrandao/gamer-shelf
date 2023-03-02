import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    isOpen: '',
    currentSelection: ''
  },
  reducers: {
    toggleFilters(state, action) {
      // Assumption: action.payload === 'dropdown item.id'
      if (state.isOpen === action.payload) {
        state.isOpen = ''
      } else {
        state.isOpen = action.payload;
      }
    },
    updateFiltersSelection: (state, action) => {
      state.currentSelection = action.payload
    }
  }
})

export const { toggleFilters, updateFiltersSelection } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;