import { createSlice } from "@reduxjs/toolkit";

const MessageSlice = createSlice({
    name: "message",

    initialState: {
        messages: null
    },

    reducers: {
        setMessages: (state, action) => {
            state.messages = action.payload;
        },
    }
});

export const { setMessages } = MessageSlice.actions
export default MessageSlice.reducer