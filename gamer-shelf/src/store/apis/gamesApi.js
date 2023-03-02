import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const gamesApi = createApi({
  reducerPath: 'games',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://free-to-play-games-database.p.rapidapi.com/api',
  }),
  endpoints(builder) {
    return {
      fetchGames: builder.query({
        query: (category) => {
          const queryParams = {
            headers: {
              'X-RapidAPI-Key': 'ba04bccd52mshf12f07680608f6dp1bd76bjsn21b135893a7f',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            },
            method: 'GET'
          };
          if (category) {
            queryParams.params = { category: category };
          }
          return {
            url: '/games',
            ...queryParams
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
      })
    }
  }
})

export const { useFetchGamesQuery, useFetchGameDetailsQuery } = gamesApi;
export { gamesApi };