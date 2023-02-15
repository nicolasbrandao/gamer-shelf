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
            }
          }
        }
      )
    }
  }
})

export const { useFetchGamesQuery } = gamesApi;
export { gamesApi };

