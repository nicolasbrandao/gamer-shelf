import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {
  filtersReducer,
  toggleFilters,
  updateFiltersSelection,
  updateQueryType,
} from './slices/filtersSlice'
import { libraryReducer, toggleGameInLibrary } from './slices/librarySlice'
import { gamesApi } from './apis/gamesApi'
import { gitHubStatsApi } from './apis/gitHubStatsApi'

export const store = configureStore({
  reducer: {
    library: libraryReducer,
    filters: filtersReducer,
    [gamesApi.reducerPath]: gamesApi.reducer,
    [gitHubStatsApi.reducerPath]: gitHubStatsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(gamesApi.middleware)
      .concat(gitHubStatsApi.middleware)
  },
})

setupListeners(store.dispatch)

export {
  toggleGameInLibrary,
  toggleFilters,
  updateFiltersSelection,
  updateQueryType,
}

export {
  useFetchGamesQuery,
  useFetchGameDetailsQuery,
  useFetchFilteredGamesQuery,
} from './apis/gamesApi'
export { useFetchGitHubStatsQuery } from './apis/gitHubStatsApi'
