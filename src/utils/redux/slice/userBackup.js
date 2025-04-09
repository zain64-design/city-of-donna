import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USER_BACKUP_API} from "../../constant";
import axios from "axios";

const baseURL = USER_BACKUP_API;

export const getUserBackup = createAsyncThunk('users/getUserBackup',async(_,thunkAPI)=> {
    try {
        const response = await axios.get(baseURL);
        return response.data.userBackup;
    } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong')
    }
})

const userBackupSlice = createSlice({
    name: 'userBackup',
    initialState: {data:[],isLoading:false,error: ''},
    reducers: {},

    extraReducers:(builder)=> {
        builder
        .addCase(getUserBackup.pending,(state)=> {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getUserBackup.fulfilled,(state,action)=> {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(getUserBackup.rejected,(state,action)=> {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default userBackupSlice.reducer;