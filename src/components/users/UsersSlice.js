import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk("fetchAllUsers", async () => { 
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data;
})


const initialState = {
    values: [],
    status: 'idle',
    error: null
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => { 
        builder.addCase(fetchUsers.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => { 
            state.status = 'succeeded'
            state.values = action.payload
        })
        builder.addCase(fetchUsers.rejected, (state, action) => { 
            state.status = 'failed'
            state.error = action.error.message
        })
    }
});

export default usersSlice.reducer;