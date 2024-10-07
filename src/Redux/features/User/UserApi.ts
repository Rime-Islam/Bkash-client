import { baseApi } from "../Api/baseApi";


const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUser: builder.query({
            query: () => ({
                url: `/auth`,
                method: "GET"
            }),
            providesTags: ["user"]
        }),
        getSingelUser: builder.query({
            query: ({ userId }) => ({
                 url: `/auth/${userId}`,
                method: "GET"
            }),
            providesTags: ["user"]
        }),
        updateUser: builder.mutation({
            query: ({ userId, data }) => ({
                url: `/auth/${userId}`,
                method: "PATCH",
                body: data,
            }),
        }),
    }),
});

export const { useGetAllUserQuery, useGetSingelUserQuery, useUpdateUserMutation } = userApi;