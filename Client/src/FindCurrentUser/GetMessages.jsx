import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../Redux/MessageSlice';
import { useEffect } from 'react';

const GetMessages = () => {

    const SERVER_URL = "https://real-time-chat-app-seven-tan.vercel.app";
    
    const dispatch = useDispatch();
    const selectedUser = useSelector(state => state.user.selectedUser);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                if(selectedUser){
                    const result = await axios.get(`${SERVER_URL}/api/message/getMessage/${selectedUser?._id}`, { withCredentials: true });
                    dispatch(setMessages(result.data?.Messages));
                }
            }

            catch (err) {
                console.log("FetchMessage Error : ", err.message);
            }
        }

        fetchMessages();

    }, [selectedUser]);
}

export default GetMessages
