import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit';

const FetchCurrentUser = createAsyncThunk('', async () => {
    const SERVER_URL = "http://localhost:1000";
    
    try {
        const result = await axios.get(`${SERVER_URL}/api/user/current`, { withCredentials: true });
        return result.data;
    }

    catch (err) {
        console.log("FetchCurrentUser Error : ", err.message);
    }
});

export default FetchCurrentUser
