import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    tags: [],
    isFiltered: false,
  },
  reducers: {
    updateFiltersSelection: (state, action) => {
      const payloadIsInTags = state.tags.includes(action.payload)

      if (payloadIsInTags) {
        const gameIndex = state.tags.indexOf(action.payload)
        state.tags.splice(gameIndex, 1)
      } else {
        state.tags.push(action.payload)
      }

      const isStateTagsEmpty = state.tags.length === 0 ? true : false
      state.isFiltered = isStateTagsEmpty ? false : true
    },
    updateQueryType: (state, action) => {
      state.isFiltered = action.payload
      if (!state.isFiltered) {
        state.tags = []
      }
    },
  },
})

export const { updateFiltersSelection, updateQueryType } =
  filtersSlice.actions
export const filtersReducer = filtersSlice.reducer
