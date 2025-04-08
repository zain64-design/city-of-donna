import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CURRENT_NOTIFICATION_API } from "../../constant";
import axios from "axios";

const baseURL = CURRENT_NOTIFICATION_API;

export const getUserNotification = createAsyncThunk('users/getUserNotification',async(_,thunkAPI)=> {
    try {
        const response = await axios.get(baseURL);
        return response.data.notification;
    } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong')
    }
})

const userNotificationSlice = createSlice({
    name: 'userNotification',
    initialState: {data:[],isLoading:false,error: ''},
    reducers: {},

    extraReducers:(builder)=> {
        builder
        .addCase(getUserNotification.pending,(state)=> {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getUserNotification.fulfilled,(state,action)=> {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(getUserNotification.rejected,(state,action)=> {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default userNotificationSlice.reducer;