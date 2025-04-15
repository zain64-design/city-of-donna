import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USER_ACTIVITIES_API } from "../../constant";
import axios from "axios";

const baseURL = USER_ACTIVITIES_API;

export const getUserActivities = createAsyncThunk('users/getUserActivities',async(_,thunkAPI)=> {
    try {
        const response = await axios.get(baseURL);
        return response.data.usersActivities;
    } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong')
    }
})

const userActivitiesSlice = createSlice({
    name: 'UserActivities',
    initialState: {data:[],isLoading:false,error: ''},
    reducers: {},

    extraReducers:(builder)=> {
        builder
        .addCase(getUserActivities.pending,(state)=> {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getUserActivities.fulfilled,(state,action)=> {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(getUserActivities.rejected,(state,action)=> {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default userActivitiesSlice.reducer;