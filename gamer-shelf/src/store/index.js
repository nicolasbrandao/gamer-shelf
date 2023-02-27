import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { dropDownsReducer, toggle } from './slices/dropDownSlice'
import { libraryReducer, addGameToLibrary } from './slices/librarySlice'
import { gamesApi } from './apis/gamesApi'
import { gameDetailApi } from './apis/gameDetailApi'

export const store = configureStore({
  reducer: {
    library: libraryReducer,
    dropdowns: dropDownsReducer,
    [gamesApi.reducerPath]: gamesApi.reducer

  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(gamesApi.middleware)
  }
})

setupListeners(store.dispatch)

export { toggle, addGameToLibrary }
export { useFetchGamesQuery } from './apis/gamesApi'