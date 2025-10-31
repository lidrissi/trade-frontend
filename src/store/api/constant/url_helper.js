import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const urls = {
  auth: {
    login: "/auth/login",
    resetPassword: "/auth/reset-password",
    changePassword: "/auth/change-password-web",
    confirmAccount: "/auth/confirm-account",
  },
  user: {
    create: "/users/create",
    update: "/users/update",
    profile: "/users/profile",
    updateProfile: "/users/profile/update",
    uploadImage: "/users/upload-profile",
    removeImage: "/users/remove-profile",
    delete: "/users/delete",
    list: "/users/list",
    changePassword: "/users/change-password",
  },
};

export const customFetchBaseQuery = () => {
  return fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
    prepareHeaders: (headers, {}) => {
      const token = "";
      headers.set("Authorization", `Bearer ${token}`);
      headers.set("Accept", "application/json");
      return headers;
    },
  });
};
