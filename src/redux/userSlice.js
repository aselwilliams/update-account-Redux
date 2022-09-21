import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const updateUser = createAsyncThunk('users/update', async (user) => {
    const res = await axios.post(
        'https://localhost:8800/api/users/1/update', user
    )
    return res.data
})

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: {
            name: 'Aiden',
            email: 'aiden@gmail.com'
        },
        pending: null,
        error: false,
    },
    reducers: {},
    extraReducers: {
        [updateUser.pending]: (state) => {
            state.pending = true;
            state.error = false;
        },
        [updateUser.fulfilled]: (state,action) => {
            state.pending = false;
            state.userInfo=action.payload;
        },
        [updateUser.rejected]: (state) => {
            state.pending = null;
            state.error = true;
        }
    
    },
})

export const { update, remove} = userSlice.actions;
export default userSlice.reducer;

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     name: "john",
//     email: "john@email.com",
//   },
//   reducers: {
//     update: (state, action) => {
//       state.name = action.payload.name;
//       state.email = action.payload.email;
//     },
//     remove: (state) => {
//       state = null;
//     },
//     addHelloToName : (state, action) =>{
//       state.name = "Hello " + action.payload.name
//     }
//   },
// });

// export const { update, remove } = userSlice.actions;

// export default userSlice.reducer;

////////////////////////////////////////////////////////

// import { createSlice } from "@reduxjs/toolkit";

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     userInfo: {
//       name: "john",
//       email: "john@email.com",
//     },
//     pending: false,
//     error: false,
//   },
//   reducers: {
//     updateStart: (state) => {
//       state.pending = true;
//     },
//     updateSuccess: (state, action) => {
//       state.pending = false;
//       state.userInfo = action.payload;
//     },
//     updateFailure: (state) => {
//       state.pending = false;
//       state.error = true;
//     },
//   },
// });

// export const { updateStart, updateSuccess, updateFailure } = userSlice.actions;

// export default userSlice.reducer;