import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FiltersState {
  tags: string[]
  isFiltered: boolean
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    tags: [],
    isFiltered: false,
  } as FiltersState,
  reducers: {
    updateFiltersSelection: (state, action: PayloadAction<string>) => {
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
    updateQueryType: (state, action: PayloadAction<boolean>) => {
      state.isFiltered = action.payload
      if (!state.isFiltered) {
        state.tags = []
      }
    },
  },
})

export const { updateFiltersSelection, updateQueryType } = filtersSlice.actions
export const filtersReducer = filtersSlice.reducer
