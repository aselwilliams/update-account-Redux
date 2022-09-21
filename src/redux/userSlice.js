import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'Aiden',
        email: 'aiden@gmail.com'
    },
    reducers: {
        update: (state, action) => {
            state.name= action.payload.name;
            state.email=action.payload.email;
        },
        remove: (state) => {
            state= null;
        }
    },
})

export const {update, remove } = userSlice.actions;
export default userSlice.reducer;