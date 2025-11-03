import {
  CreateUserRequest,
  UpdateUserRequest,
  UserResponse,
  UsersResponse,
} from "@/types/user";
import { createApi } from "@reduxjs/toolkit/query/react";
import { urls } from "../constant/url_helper";
import { customFetchBaseQuery } from "../constant/api_helper";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: customFetchBaseQuery(),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query<
      UsersResponse,
      { page?: number; limit?: number; search?: string }
    >({
      query: ({ page = 1, limit = 10, search = "" }) =>
        `users?page=${page}&limit=${limit}&search=${search}`,
      providesTags: () => [{ type: "User", id: "LIST" }],
    }),
    getUser: builder.query<UserResponse, string>({
      query: (id) => urls.user.find(id),
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),

    createUser: builder.mutation<UserResponse, CreateUserRequest>({
      query: (userData: CreateUserRequest) => ({
        ...urls.user.create,
        body: userData,
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
    updateUser: builder.mutation<UserResponse, UpdateUserRequest>({
      query: ({ id, ...updateData }: UpdateUserRequest) => ({
        ...urls.user.update(id),
        body: updateData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "User", id }],
    }),

    deleteUser: builder.mutation<{ success: boolean; message: string }, string>(
      {
        query: (id) => ({
          ...urls.user.delete(id),
          method: "DELETE",
        }),
        invalidatesTags: (result, error, id) => [
          { type: "User", id },
          { type: "User", id: "LIST" },
        ],
      },
    ),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
