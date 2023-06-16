import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001"
  }),
  tagTypes: ["Transactions"],
  endpoints: builder => ({
    gettAllTransactions: builder.query({
      query: () => "/transactions",
      providesTags: "Transactions"
    }),
    deleteTransaction: builder.mutation({
      query: id => ({
        url: `/transactions/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Transactions"]
    })
  })
});
export const {
  useGettAllTransactionsQuery,
  useDeleteTransactionMutation
} = apiSlice;
