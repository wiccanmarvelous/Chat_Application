import { createSlice } from "@reduxjs/toolkit";

const getInitialUser = () => JSON.parse(localStorage.getItem('chat-user')) || null
const authSlice = createSlice({
    name: 'auth',
    initialState: getInitialUser(),
    reducers: {
        setAuthUser(state, action) {
            state.authUser = action.payload;
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;