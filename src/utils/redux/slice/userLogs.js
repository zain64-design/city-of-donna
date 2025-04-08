import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USER_LOG_API } from "../../constant";
import axios from "axios";

const baseURL = USER_LOG_API;

export const getUserLogs = createAsyncThunk('users/getUserLogs',async(_,thunkAPI)=> {
    try {
        const response = await axios.get(baseURL);
        return response.data.activityLogs;
    } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong')
    }
})

const userLogSlice = createSlice({
    name: 'userLogs',
    initialState: {data:[],isLoading:false,error: ''},
    reducers: {},

    extraReducers:(builder)=> {
        builder
        .addCase(getUserLogs.pending,(state)=> {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getUserLogs.fulfilled,(state,action)=> {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(getUserLogs.rejected,(state,action)=> {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default userLogSlice.reducer;