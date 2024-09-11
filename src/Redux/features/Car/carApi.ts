import { baseApi } from "../Api/baseApi";


const carApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createACar: builder.mutation({
            query: ({ data }) => {
                return {
                    url: "/cars",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["cars"],
        }),
        getAllCar: builder.query({
            query: () => ({
                url: "/cars",
                method: "GET",
            }),
            providesTags: ["cars"],
        }),
        getSingleCar: builder.query({
            query: (carId) => ({
                url: `/cars/${carId}`,
                method: "GET",
            }),
            providesTags: ["cars"],
        }),
    }),
});

export const { useGetAllCarQuery, useGetSingleCarQuery } = carApi;