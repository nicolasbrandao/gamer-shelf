import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const gamesApi = createApi({
  reducerPath: 'games',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://free-to-play-games-database.p.rapidapi.com/api',
  }),
  endpoints(builder) {
    return {
      fetchGames: builder.query({
        query: () => {
          return {
            url: '/games',
            headers: {
              'X-RapidAPI-Key': 'ba04bccd52mshf12f07680608f6dp1bd76bjsn21b135893a7f',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            },
            method: 'GET'
          };
        },
        provides: (result) => ({
          data: result?.data,
          error: result?.error,
          isLoading: !result
        })
      }),
      fetchGameDetails: builder.query({
        query: (id) => {
          const queryParams = {
            headers: {
              'X-RapidAPI-Key': 'ba04bccd52mshf12f07680608f6dp1bd76bjsn21b135893a7f',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            },
            method: 'GET'
          };
          if (id) {
            queryParams.params = { id: id };
          }
          return {
            url: '/game',
            ...queryParams
          };
        },
        provides: (result) => ({
          data: result?.data,
          error: result?.error,
          isLoading: !result
        })
      }),
      fetchFilteredGames: builder.query({
        query: ({tag, platform}) => {
          const queryParams = {
            headers: {
              'X-RapidAPI-Key': 'ba04bccd52mshf12f07680608f6dp1bd76bjsn21b135893a7f',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            },
            method: 'GET'
          };
          if (tag || platform) {
            queryParams.params = { tag: tag, platform: platform };
          }
          return {
            url: '/filter',
            ...queryParams
          };
        },
        provides: (result) => ({
          data: result?.data,
          error: result?.error,
          isLoading: !result
        })
      })
    }
  }
})

export const { useFetchGamesQuery, useFetchGameDetailsQuery, useFetchFilteredGamesQuery } = gamesApi;
export { gamesApi };