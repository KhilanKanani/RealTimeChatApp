import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit';

const FetchCurrentUser = createAsyncThunk('', async () => {
    const SERVER_URL = "https://real-time-chat-app-seven-tan.vercel.app";
    
    try {
        const result = await axios.get(`${SERVER_URL}/api/user/current`, { withCredentials: true });
        return result.data;
    }

    catch (err) {
        console.log("FetchCurrentUser Error : ", err.message);
    }
});

export default FetchCurrentUser
