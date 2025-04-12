import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USER_GUIDE_API } from "../../constant";
import axios from "axios";

const baseURL = USER_GUIDE_API;

export const getUserGuide = createAsyncThunk('users/getUserGuide',async(_,thunkAPI)=> {
    try {
        const response = await axios.get(baseURL);
        await new Promise(resolve => setTimeout(resolve, 3000));
        return response.data.userGuide;
    } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong')
    }
})

const userGuideSlice = createSlice({
    name: 'userGuide',
    initialState: {data:[],isLoading:false,error: ''},
    reducers: {},

    extraReducers:(builder)=> {
        builder
        .addCase(getUserGuide.pending,(state)=> {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getUserGuide.fulfilled,(state,action)=> {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(getUserGuide.rejected,(state,action)=> {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default userGuideSlice.reducer;