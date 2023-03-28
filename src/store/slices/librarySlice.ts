import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface LibraryState {
  libraryList: string[]
}

const librarySlice = createSlice({
  name: 'library',
  initialState: {
    libraryList: [],
  } as LibraryState,
  reducers: {
    toggleGameInLibrary: (state, action: PayloadAction<string>): void => {
      const gameIsInLibrary = state.libraryList.includes(action.payload)

      if (!gameIsInLibrary) {
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
