import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurantes } from '../pages/ListaHome'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<Restaurantes[], void>({
      query: () => 'restaurantes'
    }),
    getCardapios: builder.query<Restaurantes, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantQuery, useGetCardapiosQuery } = api

export default api
