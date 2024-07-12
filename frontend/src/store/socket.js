import { createSlice } from '@reduxjs/toolkit';

const socketSlice = createSlice({
    name: 'socket',
    initialState: { socketId: null },
    reducers: {
        setSocketId(state, action) {
            state.socketId = action.payload;
        }
    }
})

export const socketActions = socketSlice.actions;
export default socketSlice.reducer;