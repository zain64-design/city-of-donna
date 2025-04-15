import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USER_CRASH_STATS } from "../../constant";
import axios from "axios";

const baseURL = USER_CRASH_STATS;

export const getUserCrashStats = createAsyncThunk('users/getUserCrashStats',async(_,thunkAPI)=> {
    try {
        const response = await axios.get(baseURL);
        return response.data.usersCrashStats;
    } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong')
    }
})

const userCrashStatsSlice = createSlice({
    name: 'userCrashStats',
    initialState: {data:[],isLoading:false,error: ''},
    reducers: {},

    extraReducers:(builder)=> {
        builder
        .addCase(getUserCrashStats.pending,(state)=> {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getUserCrashStats.fulfilled,(state,action)=> {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(getUserCrashStats.rejected,(state,action)=> {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default userCrashStatsSlice.reducer;