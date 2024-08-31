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
        forgetPassword: builder.mutation({
            query: (body) => ({
                url: "/auth/forget_password",
                method: "POST",
                body,
            }),
        }),
        resetPassword: builder.mutation({
            query: (body) => ({
                url: "/auth/reset_password",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useLoginUserMutation, useRegisterUserMutation, useForgetPasswordMutation, useResetPasswordMutation } = signupApi;