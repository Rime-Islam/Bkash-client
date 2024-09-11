import { baseApi } from "../Api/baseApi";


const carApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createACar: builder.mutation({
            query: (body) => ({
                url: "/cars",
                method: "POST",
                body,
            }),
            invalidatesTags: ["cars"],
        }),
        updateACar: builder.mutation({
            query: ({ id, data }) => {
                return {
                    url: `/cars/${id}`,
                    method: "PUT",
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
        deleteACar: builder.mutation({
            query: ({ carId }) => ({
                url: `/cars/${carId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["cars"],
        }),
    }),
});

export const { 
    useCreateACarMutation,
    useUpdateACarMutation,
    useGetAllCarQuery, 
    useGetSingleCarQuery,
    useDeleteACarMutation,

 } = carApi;