import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const gameDetailApi = createApi({
  reducerPath: 'gameDetail',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
  }),
  endpoints(builder) {
    return {
      fetchGames: builder.query({
        query: () => {
            return {
              url: '/games',
              params: {id: '452'},
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

export const { useFetchGameDetailQuery } = gameDetailApi;
export { gameDetailApi };