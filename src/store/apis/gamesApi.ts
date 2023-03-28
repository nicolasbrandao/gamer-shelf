import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface QueryParams {
  headers: {
    'X-RapidAPI-Key': string
    'X-RapidAPI-Host': string
  }
  method: string
  params?: {
    id?: string
    tag?: string
  }
}

const queryHeaders = {
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY as string,
    'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST as string,
  },
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
      }),
      fetchGameDetails: builder.query({
        query: (id) => {
          const queryParams: QueryParams = {
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
      }),
      fetchFilteredGames: builder.query({
        query: (tag) => {
          const queryParams: QueryParams = {
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
