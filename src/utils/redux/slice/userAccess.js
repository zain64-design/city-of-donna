import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USER_ACCESS_API } from "../../constant";
import axios from "axios";

const baseURL = USER_ACCESS_API;

export const getUserAccess = createAsyncThunk('users/getUserAccess',async(_,thunkAPI)=> {
    try {
        const response = await axios.get(baseURL);
        return response.data.usersAccess;
    } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong')
    }
})

const userAccessSlice = createSlice({
    name: 'userAccess',
    initialState: {data:[],isLoading:false,error: ''},
    reducers: {},

    extraReducers:(builder)=> {
        builder
        .addCase(getUserAccess.pending,(state)=> {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getUserAccess.fulfilled,(state,action)=> {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(getUserAccess.rejected,(state,action)=> {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default userAccessSlice.reducer;