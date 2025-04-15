import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USER_STATS_LOGS_API } from "../../constant";
import axios from "axios";

const baseURL = USER_STATS_LOGS_API;

export const getUserStats = createAsyncThunk('users/getUserStats',async(_,thunkAPI)=> {
    try {
        const response = await axios.get(baseURL);
        return response.data.usersStats;
    } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong')
    }
})

const userStatsSlice = createSlice({
    name: 'userStats',
    initialState: {data:[],isLoading:false,error: ''},
    reducers: {},

    extraReducers:(builder)=> {
        builder
        .addCase(getUserStats.pending,(state)=> {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getUserStats.fulfilled,(state,action)=> {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(getUserStats.rejected,(state,action)=> {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default userStatsSlice.reducer;