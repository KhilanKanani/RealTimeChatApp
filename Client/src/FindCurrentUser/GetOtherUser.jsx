import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOtherUserData } from '../Redux/UserSlice';

const GetOtherUser = () => {

    const SERVER_URL = "http://localhost:1000";
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchOtherUser = async () => {
            try {
                const result = await axios.get(`${SERVER_URL}/api/user/otherUser`, { withCredentials: true });
                dispatch(setOtherUserData(result.data));
            }

            catch (err) {
                console.log("FetchUser Error : ", err.message);
            }
        }

        fetchOtherUser();

    }, []);
}

export default GetOtherUser
