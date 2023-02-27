import { createSlice } from "@reduxjs/toolkit";

const librarySlice = createSlice({
  name: 'library',
  initialState: {
    libraryList: []
  },
  reducers: {
    addGameToLibrary(state, action) {
      if (!state.libraryList.includes(action.payload)) {
        state.libraryList.push(action.payload);
      }
    }
  }
})

export const { addGameToLibrary } = librarySlice.actions;
export const libraryReducer = librarySlice.reducer;