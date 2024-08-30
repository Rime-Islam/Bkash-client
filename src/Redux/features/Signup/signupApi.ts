import { baseApi } from "../Api/baseApi";


const signupApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (body) => ({
                url: "/auth/signin",
                method: "POST",
                body,
            }),
        }),
        registerUser: builder.mutation({
            query: (body) => ({
                url: "/auth/signup",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = signupApi;