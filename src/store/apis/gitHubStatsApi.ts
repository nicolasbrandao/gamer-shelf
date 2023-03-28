import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const gitHubStatsApi = createApi({
  reducerPath: 'gitHubStats',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/repos/nicolasbrandao',
  }),
  endpoints(builder) {
    return {
      fetchGitHubStats: builder.query({
        query: () => {
          return {
            url: '/gamer-shelf',
            method: 'GET',
          }
        },
      }),
    }
  },
})

export const { useFetchGitHubStatsQuery } = gitHubStatsApi
export { gitHubStatsApi }
