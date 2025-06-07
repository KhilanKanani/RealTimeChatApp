import { createSlice } from "@reduxjs/toolkit";
import FetchCurrentUser from "../FindCurrentUser/GetCurrentUser";

const UserSlice = createSlice({
    name: "user",

    initialState: {
        isLoading: false,
        userdata: null,
        otherUserData: null,
        selectedUser: null,
        socket: null,
        onlineUser: null
    },

    reducers: {
        setUserdata: (state, action) => {
            state.userdata = action.payload;
        },

        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },

        setOtherUserData: (state, action) => {
            state.otherUserData = action.payload;
        },

        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        },

        setSocket: (state, action) => {
            state.socket = action.payload;
        },

        setOnlineUser: (state, action) => {
            state.onlineUser = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(FetchCurrentUser.pending, (state) => {
                state.isLoading = true
            })

            .addCase(FetchCurrentUser.fulfilled, (state, action) => {
                state.userdata = action.payload
                state.isLoading = false;
            })

            .addCase(FetchCurrentUser.rejected, (state) => {
                state.isLoading = false;
            });
    }
});

export const { setUserdata, setIsLoading, setOtherUserData, setSelectedUser, setSocket, setOnlineUser } = UserSlice.actions
export default UserSlice.reducer