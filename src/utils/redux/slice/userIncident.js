import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USER_INCIDENTS_API } from "../../constant";
import axios from "axios";

const baseURL = USER_INCIDENTS_API;

export const getUserIncident = createAsyncThunk('users/getUserIncident',async(_,thunkAPI)=> {
    try {
        const response = await axios.get(baseURL);
        return response.data.usersIncident;
    } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong')
    }
})

const userIncidentSlice = createSlice({
    name: 'userIncident',
    initialState: {data:[],isLoading:false,error: ''},
    reducers: {},

    extraReducers:(builder)=> {
        builder
        .addCase(getUserIncident.pending,(state)=> {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getUserIncident.fulfilled,(state,action)=> {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(getUserIncident.rejected,(state,action)=> {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default userIncidentSlice.reducer;