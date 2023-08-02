import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_bsd2_list = createAsyncThunk(
  "bsd2s/api_v1_bsd2_list",
  async payload => {
    const response = await apiService.api_v1_bsd2_list(payload)
    return response.data
  }
)
export const api_v1_bsd2_create = createAsyncThunk(
  "bsd2s/api_v1_bsd2_create",
  async payload => {
    const response = await apiService.api_v1_bsd2_create(payload)
    return response.data
  }
)
export const api_v1_bsd2_retrieve = createAsyncThunk(
  "bsd2s/api_v1_bsd2_retrieve",
  async payload => {
    const response = await apiService.api_v1_bsd2_retrieve(payload)
    return response.data
  }
)
export const api_v1_bsd2_update = createAsyncThunk(
  "bsd2s/api_v1_bsd2_update",
  async payload => {
    const response = await apiService.api_v1_bsd2_update(payload)
    return response.data
  }
)
export const api_v1_bsd2_partial_update = createAsyncThunk(
  "bsd2s/api_v1_bsd2_partial_update",
  async payload => {
    const response = await apiService.api_v1_bsd2_partial_update(payload)
    return response.data
  }
)
export const api_v1_bsd2_destroy = createAsyncThunk(
  "bsd2s/api_v1_bsd2_destroy",
  async payload => {
    const response = await apiService.api_v1_bsd2_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const bsd2sSlice = createSlice({
  name: "bsd2s",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_bsd2_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bsd2_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bsd2_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bsd2_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bsd2_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bsd2_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bsd2_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bsd2_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bsd2_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bsd2_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bsd2_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bsd2_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bsd2_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bsd2_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bsd2_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bsd2_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bsd2_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bsd2_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_bsd2_list,
  api_v1_bsd2_create,
  api_v1_bsd2_retrieve,
  api_v1_bsd2_update,
  api_v1_bsd2_partial_update,
  api_v1_bsd2_destroy,
  slice: bsd2sSlice
}
