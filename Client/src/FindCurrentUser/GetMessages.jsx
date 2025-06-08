import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../Redux/MessageSlice';
import { useEffect } from 'react';
import { SERVER_URL } from '../main';

const GetMessages = () => {
    
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
