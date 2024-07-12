import { createSlice } from '@reduxjs/toolkit';

const messagesSlice = createSlice({
    name: 'messages',
    initialState: { messages: [] },
    reducers: {
        setMessages(state, action) {
            state.messages = action.payload;
        },
        pushMessages(state, action) {
            state.messages.push(action.payload);
        }
    }
})

export const messagesActions = messagesSlice.actions;
export default messagesSlice.reducer;