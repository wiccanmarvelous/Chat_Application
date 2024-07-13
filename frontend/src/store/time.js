import { createSlice } from '@reduxjs/toolkit';

const timeSlice = createSlice({
    name: 'time',
    initialState: { time: null },
    reducers: {
        setTime(state, action) {
            state.time = action.payload;
        }
    }
})

export const timeActions = timeSlice.actions;
export default timeSlice.reducer;