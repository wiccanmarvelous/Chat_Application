import { createSlice } from '@reduxjs/toolkit';

const timeSlice = createSlice({
    name: 'time',
    initialState: { time: '' },
    reducers: {
        setTime(state, action) {
            state.time = action.payload;
        }
    }
})

export const timeActions = timeSlice.actions;
export default timeSlice.reducer;