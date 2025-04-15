import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USER_ERROR_LOGS_API } from "../../constant";
import axios from "axios";

const baseURL = USER_ERROR_LOGS_API;

export const getUserErrorLogs = createAsyncThunk('users/getUserErrorLogs',async(_,thunkAPI)=> {
    try {
        const response = await axios.get(baseURL);
        return response.data.errorLogs;
    } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong')
    }
})

const userErrorLogSlice = createSlice({
    name: 'userErrorLogs',
    initialState: {data:[],isLoading:false,error: ''},
    reducers: {},

    extraReducers:(builder)=> {
        builder
        .addCase(getUserErrorLogs.pending,(state)=> {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getUserErrorLogs.fulfilled,(state,action)=> {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(getUserErrorLogs.rejected,(state,action)=> {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default userErrorLogSlice.reducer;