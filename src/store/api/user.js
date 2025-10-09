import { createApi } from '@reduxjs/toolkit/query/react';
import { tag } from './constant/tag';
import { customFetchBaseQuery, urls } from './constant/url_helper';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: customFetchBaseQuery(),
  tagTypes: [tag.users],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (params) => {
        const searchParams = new URLSearchParams();

        Object.entries(params).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            value.forEach((v) => searchParams.append(key, v));
          } else if (value !== undefined && value !== null) {
            searchParams.append(key, value);
          }
        });

        return {
          url: `${urls.user.list}?${searchParams.toString()}`,
        };
      },
      providesTags: () => [tag.users],
    }),
    addUser: builder.mutation({
      query: (newUser) => ({
        url: urls.user.create,
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: [tag.users],
    }),
    updateUser: builder.mutation({
      query: (updatedUser) => ({
        url: urls.user.update,
        method: 'PATCH',
        body: updatedUser,
      }),
      invalidatesTags: [tag.users],
    }),
    deleteUser: builder.mutation({
      query: (body) => ({
        url: urls.user.delete,
        method: 'DELETE',
        body,
      }),
      invalidatesTags: [tag.users],
    }),
    changeUserPassword: builder.mutation({
      query: (body) => ({
        url: urls.user.changePassword,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: [tag.users],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useLazyGetUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useChangeUserPasswordMutation,
} = userApi;
