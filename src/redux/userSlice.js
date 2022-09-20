import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'Aiden',
        email: 'aiden@gmail.com'
    },
    reducers: {
        update: (state, action) => {
            
        }
    }
})