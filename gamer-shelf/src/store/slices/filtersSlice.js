import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    isOpen: '',
    platform: 'all',
    category: '',
    tags: []
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
      if (state.tags.includes(action.payload)) {
        const index = state.tags.indexOf(action.payload)
        state.tags.splice(index, 1)
      } else {
        state.tags.push(action.payload); 
      }
    },
    updateCategorySelection: (state, action) => {
      state.category = action.payload
    },
    updatePlatformSelection: (state, action) => {
      state.platform = action.payload
    }
  }
})

export const { toggleFilters, updateFiltersSelection, updateCategorySelection, updatePlatformSelection } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

