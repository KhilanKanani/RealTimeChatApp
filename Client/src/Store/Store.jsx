import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../Redux/UserSlice"
import MessageSlice from "../Redux/MessageSlice"

const Store = configureStore({
    reducer: {
        user: UserSlice,
        message: MessageSlice
    },
})

export default Store