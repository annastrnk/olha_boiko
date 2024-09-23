import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sendRequest from "../helpers/sendRequest"

const initialState = {
    data: []
}

export const dataFetch = createAsyncThunk("data/fetch", async () => {
    const response = await sendRequest("../../public/services.json")
    return response
})

const dataSlice = createSlice({
    name: "data",
    initialState,

    extraReducers: (builder) => {
        builder.addCase(dataFetch.fulfilled, (state, { payload }) => {
            state.data = payload
        })
    }
})
export default dataSlice.reducer

