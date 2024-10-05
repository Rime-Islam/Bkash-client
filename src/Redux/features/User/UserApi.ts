import { baseApi } from "../Api/baseApi";


const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUser: builder.query({
            query: () => ({
                url: `/user`,
                method: "GET"
            }),
            providesTags: ["user"]
        }),
        getSingelUser: builder.query({
            query: ({ userId }) => ({
                 url: `/user/${userId}`,
                method: "GET"
            }),
            providesTags: ["user"]
        }),
        updateUser: builder.mutation({
            query: ({ userId, data }) => ({
                url: `/user/${userId}`,
                method: "PATCH",
                body: data,
            }),
        }),
    }),
});

export const { useGetAllUserQuery, useGetSingelUserQuery, useUpdateUserMutation } = userApi;