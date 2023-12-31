import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rtk-query-expense-tracker-server.onrender.com"
  }),
  tagTypes: ["Transactions"],
  endpoints: builder => ({
    gettAllTransactions: builder.query({
      query: () => "/transactions",
      providesTags: ["Transactions"]
    }),
    singleTransaction: builder.query({
      query: id => `/transactions/${id}`
    }),

    addTransaction: builder.mutation({
      query: data => ({
        url: `/transactions`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Transactions"]
    }),

    deleteTransaction: builder.mutation({
      query: id => ({
        url: `/transactions/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Transactions"]
    }),
    updateTransaction: builder.mutation({
      query: ({ id, data }) => ({
        url: `/transactions/${id}`,
        method: "PATCH",
        body: data
      }),
      invalidatesTags: ["Transactions"]
    })
  })
});
export const {
  useGettAllTransactionsQuery,
  useDeleteTransactionMutation,
  useUpdateTransactionMutation,
  useSingleTransactionQuery,
  useAddTransactionMutation
} = apiSlice;
