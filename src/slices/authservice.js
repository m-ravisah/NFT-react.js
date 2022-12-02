import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerApi, loginApi, updateApi, fetchApi } from "../services/authAPI";

const initialState = {
  user: null,
  user1: null,
  status: "idle",
  signErr: null,
  emailData: null,
  loading: "false",
  successMessage: null,
};

export const registerAsync = createAsyncThunk("auth/register", async (data) => {
  const response = await registerApi(data);
  return response.data;
});

export const loginAsync = createAsyncThunk("auth/login", async (data) => {
  const response = await loginApi(data);
  console.log(response);
  return response.data;
});

export const updateAsync = createAsyncThunk("auth/update", async (data) => {
  const response = await updateApi(data);
  console.log(response);
  return response.data;
});

export const getAsync = createAsyncThunk("auth/get", async (data) => {
  const response = await fetchApi(data);
  // console.log(response, 'fgwedfiud');
  return response.data;
});



export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.forgetPassword = null;
      state.sendOtp = null;
      state.status = "idle";
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(registerAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        if (action?.payload?.code === 201) {
          state.signErr = action?.payload?.message;
        } else if (action?.payload?.code === 200) {
          state.user1 = action.payload;
          state.signErr = "";
        }
        state.status = "idle";
        state.loading = false;
      })

      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "idle";
        state.loading = false;
        state.error1 = "invalid credential";
      })

      .addCase(getAsync.pending,(state)=>{
        state.loading =true;
      })
      .addCase(getAsync.fulfilled, (state, action)=>{
        state.status = "idle";
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getAsync.rejected,(state, action)=>{
        state.status = "idle";
        state.loading = false;
        state.error = 'invalid credential';
      })

      .addCase(updateAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAsync.fulfilled, (state, action) => {
        if (action?.payload?.code === 200) {
          state.successMessage = action?.payload?.message;
        }
        state.status = "idle";
        state.user = action.payload;
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export const selectAuth = (state) => state.auth.user;
export const usersRegister = (state) => state.auth.user1;
// export const selectAuthForgetPassword = (state) => state.auth;
export const userLogin = (state) => state.auth.user1;
export const fetchUsers = (state) => state.auth.user;
export const updateUsers = (state) => state.auth.user;


export default authSlice.reducer;
