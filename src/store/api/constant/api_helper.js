import axios from "axios";

export const API_URL = `/api/v1`;
export const axiosApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

axiosApi.interceptors.request.use(
  async (config) => {
    const token = ""; //TO BE DEFINED
    config.headers = {
      Authorization: `Bearer ${token ? token : ""}`,
      Accept: "application/json",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

export async function get(url, config = {}) {
  return await axiosApi
    .get(url, { ...config })
    .then((response) => response.data);
}

export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function patch(url, data, config = {}) {
  return axiosApi
    .patch(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function del(url, data = {}) {
  return await axiosApi.delete(url, { data }).then((response) => response.data);
}
