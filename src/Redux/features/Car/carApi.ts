import { baseApi } from "../Api/baseApi";


const CarApi = baseApi.injectEndpoints({
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
            query: ({ id, Data}) => {
                   return {
                    url: `/cars/${id}`,
                    method: "PATCH",
                    body: Data,
                   }
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
        returnCar: builder.mutation({
            query: ({ data }) => {
                return {
                    url: '/bookings/return',
                    method: "PUT",
                    body: data,
                }
            }
        })
    }),
});


export const { 
    useCreateACarMutation,
    useUpdateACarMutation,
    useGetAllCarQuery, 
    useGetSingleCarQuery,
    useDeleteACarMutation,
    useReturnCarMutation,

 } = CarApi;

