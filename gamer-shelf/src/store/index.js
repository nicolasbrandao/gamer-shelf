import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { dropDownsReducer, toggle, updateSelection } from './slices/dropDownSlice'
import { libraryReducer, toggleGameInLibrary } from './slices/librarySlice'
import { filtersReducer, toggleFilters, updateFiltersSelection } from './slices/filtersSlice'
import { gamesApi } from './apis/gamesApi'
import { gitHubStatsApi } from './apis/gitHubStatsApi'

export const store = configureStore({
  reducer: {
    library: libraryReducer,
    dropdowns: dropDownsReducer,
    filters: filtersReducer,
    [gamesApi.reducerPath]: gamesApi.reducer,
    [gitHubStatsApi.reducerPath]: gitHubStatsApi.reducer

  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(gamesApi.middleware)
      .concat(gitHubStatsApi.middleware)
  }
})

setupListeners(store.dispatch)

export {
  toggleGameInLibrary,  
  toggle,
  updateSelection, 
  toggleFilters, 
  updateFiltersSelection 
}

export { useFetchGamesQuery, useFetchGameDetailsQuery, useFetchFilteredGamesQuery } from './apis/gamesApi'
export { useFetchGitHubStatsQuery } from './apis/gitHubStatsApi'