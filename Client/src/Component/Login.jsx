import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsLoading, setUserdata } from '../Redux/UserSlice';
import axios from 'axios';

const Login = () => {

    const SERVER_URL = "http://localhost:1000";    
    
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [loading, setloading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        setloading(true);

        try {
            if (email === "" || password === "") {
                toast.error("All Field Mandatory...");
                setloading(false);
                return;
            }

            const pattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
            if (!pattern.test(email)) {
                toast.error("Email Is Not Valid...");
                setloading(false);
                return;
            }

            dispatch(setIsLoading(true));
            const result = await axios.post(`${SERVER_URL}/api/auth/login`, { email, password }, { withCredentials: true });
            dispatch(setUserdata(result.data));
            dispatch(setIsLoading(false));

            toast.success("Login Successfull...");
            navigate(result?.data?.user.fullName !== "" ? "/" : "/profile");
            setloading(false);
            setemail("");
            setpassword("");
        }

        catch (error) {
            console.log("Login Error :", error.message);
            setloading(false);
            dispatch(setIsLoading(false));
            toast.error(error?.response?.data?.message);
        }
    }

    return (
        <div className='bg-green-100 h-[100vh] w-full flex items-center '>
            <div className='sm:w-[500px] w-[310px] border-1 border-green-800 sm:h-[570px] h-[510px] m-auto rounded-lg bg-white shadow-xl flex flex-col gap-10 items-center'>
                <div className='bg-green-800 sm:h-[200px] h-[160px] w-full text-center flex items-center justify-center rounded-b-[80px] gap-2 text-green-400 font-extrabold md:text-3xl text-2xl shadow-2xl rounded-l-lg rounded-e-lg'>Login To <span className='text-white'>Messenger</span></div>

                <div className='flex flex-col gap-5 items-center'>
                    <input className='p-2 border-2 border-green-800 rounded-lg shadow-lg sm:w-100 w-60 ' value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder='Email...' />
                    <input className='p-2 border-2 border-green-800 rounded-lg shadow-lg sm:w-100 w-60 ' value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder='Password...' />
                </div>

                <button className='p-2 rounded-lg shadow-lg w-30  bg-green-800 hover:shadow-2xl text-white mt-[-10px] hover:bg-green-600 transition-all duration-500' disabled={loading} onClick={handleLogin}>{loading == true ? "Loading..." : "Login"}</button>
                <p className='mt-[-25px] font-bold text-[14.5px] md:text-[16px] flex gap-1' onClick={() => navigate("/signup")}>Want To Create a New Account ?<span className='text-green-800 cursor-pointer' >Sign Up</span></p>
            </div>
        </div>
    )
}
export default Login
