import axios from 'axios'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setIsLoading, setOtherUserData, setSelectedUser, setUserdata } from '../Redux/UserSlice';
import { useEffect } from 'react';
import { SERVER_URL } from '../main';

const Logout = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const logout = async () => {
            try {
                dispatch(setIsLoading(true));
                await axios.get(`${SERVER_URL}/api/auth/logout`, { withCredentials: true });
                dispatch(setUserdata(null));
                dispatch(setOtherUserData(null));
                dispatch(setIsLoading(false));
                dispatch(setSelectedUser(null));

                toast.success("Logout Successfull...");
                navigate("/login");
            }

            catch (err) {
                console.log(err.message);
            }
        }

        logout();
    }, [dispatch])
}

export default Logout
