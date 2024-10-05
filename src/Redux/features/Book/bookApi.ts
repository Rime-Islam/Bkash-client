import { baseApi } from "../Api/baseApi";


const bookApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addBook: builder.mutation({
            query: (data) => {
             return {
                url: "/bookings",
                method: "POST",
                body: data,
             };
            },
            invalidatesTags: ["booking"],
        }),
        getAllBook: builder.query({
            query: () => ({
                url: "/bookings",
                method: "GET",
            }),
            providesTags: ["booking"]
        }),
        getMyBook: builder.query({
            query: () => ({
                url: "/bookings/my-bookings",
                method: "GET",
            }),
             providesTags: ["booking"]
        }),
        deleteBook: builder.mutation({
            query: ({ bookedId}) => {
                return {
                    url: `/bookings/${bookedId}`,
                    method: "DELETE",
                }
            },
            invalidatesTags: ["booking"],
        }),
        IsApproved: builder.mutation({
            query: ({ bookingId }) => {
                return {
                    url: `/bookings/${bookingId}`,
                    method: "PATCH",
                }
            },
            invalidatesTags: ["booking"],
        }),
        carPayment: builder.mutation({
            query: ({ item }) => {
                return {
                    url: "/bookings/payment",
                    method: "POST",
                    body: item,
                }
            },
            invalidatesTags: ["booking"],
        }),
    }),
});

export const { 
   useAddBookMutation,
   useGetAllBookQuery,
   useGetMyBookQuery,
   useDeleteBookMutation,
   useIsApprovedMutation,
    useCarPaymentMutation
} = bookApi;