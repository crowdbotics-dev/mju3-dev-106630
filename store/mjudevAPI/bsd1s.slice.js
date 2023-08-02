import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_bsd1_list = createAsyncThunk(
  "bsd1s/api_v1_bsd1_list",
  async payload => {
    const response = await apiService.api_v1_bsd1_list(payload)
    return response.data
  }
)
export const api_v1_bsd1_create = createAsyncThunk(
  "bsd1s/api_v1_bsd1_create",
  async payload => {
    const response = await apiService.api_v1_bsd1_create(payload)
    return response.data
  }
)
export const api_v1_bsd1_retrieve = createAsyncThunk(
  "bsd1s/api_v1_bsd1_retrieve",
  async payload => {
    const response = await apiService.api_v1_bsd1_retrieve(payload)
    return response.data
  }
)
export const api_v1_bsd1_update = createAsyncThunk(
  "bsd1s/api_v1_bsd1_update",
  async payload => {
    const response = await apiService.api_v1_bsd1_update(payload)
    return response.data
  }
)
export const api_v1_bsd1_partial_update = createAsyncThunk(
  "bsd1s/api_v1_bsd1_partial_update",
  async payload => {
    const response = await apiService.api_v1_bsd1_partial_update(payload)
    return response.data
  }
)
export const api_v1_bsd1_destroy = createAsyncThunk(
  "bsd1s/api_v1_bsd1_destroy",
  async payload => {
    const response = await apiService.api_v1_bsd1_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const bsd1sSlice = createSlice({
  name: "bsd1s",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_bsd1_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bsd1_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bsd1_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bsd1_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bsd1_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bsd1_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bsd1_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bsd1_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bsd1_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bsd1_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bsd1_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bsd1_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bsd1_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bsd1_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bsd1_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bsd1_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bsd1_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bsd1_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_bsd1_list,
  api_v1_bsd1_create,
  api_v1_bsd1_retrieve,
  api_v1_bsd1_update,
  api_v1_bsd1_partial_update,
  api_v1_bsd1_destroy,
  slice: bsd1sSlice
}
