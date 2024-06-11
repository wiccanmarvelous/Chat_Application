import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
    name: 'nav',
    initialState: { navVal: 'home' },
    reducers: {
        setNav(state, action) {
            state.navVal = action.payload;
        }
    }
})

export const navActions = navSlice.actions;
export default navSlice.reducer;