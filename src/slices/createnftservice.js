import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCollectionApi } from "../collection/CollectionAPI";

const initialState = {
  collections: null,
  status: "idle",
  loading: "false",
  successMessage: null,
};

export const createCollectionAsync = createAsyncThunk("collection/create", async (data) => {
  const response = await createCollectionApi(data);
  return response.data;
});

export const collectionSlice = createSlice({
  name: "collection",
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

      .addCase(createCollectionAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCollectionAsync.fulfilled, (state, action) => {
        if (action?.payload?.code === 201) {
          state.signErr = action?.payload?.message;
        } else if (action?.payload?.code === 200) {
          state.collections = action.payload;
          state.signErr = "";
        }
        state.status = "idle";
        state.loading = false;
      })
    },
});

// export const { logout } = authSlice.actions;
export const storeCollection = (state) => state.collection.collections

export default collectionSlice.reducer;
