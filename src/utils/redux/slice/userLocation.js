import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USER_LOCATION } from "../../constant";
import axios from "axios";

const baseURL = USER_LOCATION;

export const getUserLocation = createAsyncThunk('users/getUserLocation',async(_,thunkAPI)=> {
    try {
        const response = await axios.get(baseURL);
        return response.data.usersLocation;
    } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong')
    }
})

const userLocationSlice = createSlice({
    name: 'userLocation',
    initialState: {data:[],isLoading:false,error: ''},
    reducers: {},

    extraReducers:(builder)=> {
        builder
        .addCase(getUserLocation.pending,(state)=> {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getUserLocation.fulfilled,(state,action)=> {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(getUserLocation.rejected,(state,action)=> {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default userLocationSlice.reducer;