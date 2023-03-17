import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    isOpen: '',
    platform: 'all',
    tags: [],
    isFiltered: false
  },
  reducers: {
    toggleFilters(state, action) {
      if (state.isOpen === action.payload) {
        state.isOpen = ''
      } else {
        state.isOpen = action.payload
      }
    },
    updateFiltersSelection: (state, action) => {
      if (state.tags.includes(action.payload)) {
        const index = state.tags.indexOf(action.payload)
        state.tags.splice(index, 1)
      } else {
        state.tags.push(action.payload)
      }
      if (state.tags.length === 0){
        state.isFiltered = false
      } else {
        state.isFiltered = true
      }
    },
    updatePlatformSelection: (state, action) => {
      state.platform = action.payload
    },
    updateQueryType: (state, action) => {
      state.isFiltered = action.payload
      if (!state.isFiltered) {
        state.tags = []
      }
    }
  }
})

export const { toggleFilters, updateFiltersSelection, updatePlatformSelection, updateQueryType } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

