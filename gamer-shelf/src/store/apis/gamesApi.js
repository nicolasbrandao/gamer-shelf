import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const queryHeaders = {
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST,
  }
}

const URL = import.meta.env.VITE_GAMES_API_BASE_URL

const gamesApi = createApi({
  reducerPath: 'games',
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints(builder) {
    return {
      fetchGames: builder.query({
        query: () => {
          return {
            url: '/games',
            ...queryHeaders,
            method: 'GET',
          }
        },
        provides: (result) => ({
          data: result?.data,
          error: result?.error,
          isLoading: !result,
        }),
      }),
      fetchGameDetails: builder.query({
        query: (id) => {
          const queryParams = {
            ...queryHeaders,
            method: 'GET',
          }
          if (id) {
            queryParams.params = { id: id }
          }
          return {
            url: '/game',
            ...queryParams,
          }
        },
        provides: (result) => ({
          data: result?.data,
          error: result?.error,
          isLoading: !result,
        }),
      }),
      fetchFilteredGames: builder.query({
        query: (tag) => {
          const queryParams = {
            ...queryHeaders,
            method: 'GET',
          }
          if (tag) {
            queryParams.params = { tag: tag }
          }
          return {
            url: '/filter',
            ...queryParams,
          }
        },
        provides: (result) => ({
          data: result?.data,
          error: result?.error,
          isLoading: !result,
        }),
      }),
    }
  },
})

export const {
  useFetchGamesQuery,
  useFetchGameDetailsQuery,
  useFetchFilteredGamesQuery,
} = gamesApi
export { gamesApi }
