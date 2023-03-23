import { createSlice } from '@reduxjs/toolkit'

const librarySlice = createSlice({
  name: 'library',
  initialState: {
    libraryList: [],
  },
  reducers: {
    toggleGameInLibrary(state, action) {
      const gameIsInLibrary = state.libraryList.includes(action.payload)

      if (!state.libraryList.includes(action.payload)) {
        state.libraryList.push(action.payload)
      } else {
        const index = state.libraryList.indexOf(action.payload)
        state.libraryList.splice(index, 1)
      }
    },
  },
})

export const { toggleGameInLibrary } = librarySlice.actions
export const libraryReducer = librarySlice.reducer
