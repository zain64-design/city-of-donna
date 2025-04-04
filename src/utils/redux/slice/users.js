import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USERS_API } from "../../constant";
import axios from "axios";

const baseURL = USERS_API;

export const getUsers = createAsyncThunk('users/getUsers',async(_,thunkAPI)=> {
    try {
        const response = await axios.get(baseURL);
        await new Promise(resolve => setTimeout(resolve, 2000));
        // const simulateError = true;
        // if (simulateError) {
        //     throw new Error;
        // }
        return response.data.users;
    } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong')
    }
})

const userSlice = createSlice({
    name: 'users',
    initialState: {data:[],isLoading:false,error: ''},
    reducers: {},

    extraReducers:(builder)=> {
        builder
        .addCase(getUsers.pending,(state)=> {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getUsers.fulfilled,(state,action)=> {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(getUsers.rejected,(state,action)=> {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default userSlice.reducer;