import {
  createSlice,
  createAsyncThunk,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import { axiosApi, patch, post } from "../api/constant/api_helper";
import { urls } from "../api/constant/url_helper";
import { RootState } from "..";

type InitialState = {
  isLoggedIn: boolean;
  user: any;
  token: string | null;
};

const initialState: InitialState = {
  isLoggedIn: false,
  user: {},
  token: null,
};

export const loginUser = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosApi.post(urls.auth.login.url, data);
      return response.data;
    } catch (err: any) {
      const message = err.response?.data?.message || "Login failed";
      return rejectWithValue(message);
    }
  },
);

export const resetPassword = createAsyncThunk(
  "user/reset-password",
  async (data) => {
    return post(`${urls.auth.resetPassword.url}`, data);
  },
);

export const changePassword = createAsyncThunk(
  "user/change-password",
  async (data) => {
    return post(`${urls.auth.changePassword.url}`, data);
  },
);

export const validateAccount = createAsyncThunk(
  "user/validate-account",
  async (data) => {
    return post(`${urls.auth.verifyEmail.url}`, data);
  },
);

export const updateUserProfile = createAsyncThunk(
  "user/profile/update",
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      await patch(`${urls.user.updateProfile.url}`, data);
      return fulfillWithValue(data);
    } catch (err: any) {
      const message = err.response?.data?.message || "Update failed";
      return rejectWithValue(message);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: () => {
      return initialState;
    },
    resetIsLoggedIn: (state) => {
      state.isLoggedIn = false;
      return state;
    },
    setUserSession: (_, action) => {
      const { user, token } = action.payload;
      return { user, token, isLoggedIn: true };
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<InitialState>) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const data = action.payload?.data;
      state.user = data?.user;
      state.isLoggedIn = !data?.user?.isPasswordTemporary;
      state.token = data?.payload?.token;
      localStorage.setItem("token", data?.payload?.token);
      return state;
    });
    builder.addCase(changePassword.fulfilled, (state, action) => {
      const data = action.payload?.data;
      state.user = data?.user;
      state.isLoggedIn = true;
      state.token = data?.payload?.token;
      return state;
    });
    builder.addCase(updateUserProfile.fulfilled, (state, action: any) => {
      const data = action.payload?.data;
      state.user = { ...state.user, ...data };
      return state;
    });
  },
});

export const selectProfile = (state: RootState) => state?.auth.user || {};
export const selectIsLoggedIn = (state: RootState) => state?.auth?.isLoggedIn;
export const selectAuthToken = (state: RootState) => state?.auth.token || "";

const { reducer } = authSlice;
export const { logoutUser, setUserSession, resetIsLoggedIn } =
  authSlice.actions;
export default reducer;
