import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USER_SLIDER } from "../../constant";
import axios from "axios";

const baseURL = USER_SLIDER;

export const getUserSlider = createAsyncThunk('users/getUserSlider',async(_,thunkAPI)=> {
    try {
        const response = await axios.get(baseURL);
        return response.data.usersSlider;
    } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong')
    }
})

const userSliderSlice = createSlice({
    name: 'userSlider',
    initialState: {data:[],isLoading:false,error: ''},
    reducers: {},

    extraReducers:(builder)=> {
        builder
        .addCase(getUserSlider.pending,(state)=> {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getUserSlider.fulfilled,(state,action)=> {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(getUserSlider.rejected,(state,action)=> {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default userSliderSlice.reducer;