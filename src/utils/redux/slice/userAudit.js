import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {USER_AUDIT_API } from "../../constant";
import axios from "axios";

const baseURL = USER_AUDIT_API;

export const getUserAudit = createAsyncThunk('users/getUserAudit',async(_,thunkAPI)=> {
    try {
        const response = await axios.get(baseURL);
        return response.data.auditLogs;
    } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong')
    }
})

const userAuditSlice = createSlice({
    name: 'userAudit',
    initialState: {data:[],isLoading:false,error: ''},
    reducers: {},

    extraReducers:(builder)=> {
        builder
        .addCase(getUserAudit.pending,(state)=> {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getUserAudit.fulfilled,(state,action)=> {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(getUserAudit.rejected,(state,action)=> {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default userAuditSlice.reducer;