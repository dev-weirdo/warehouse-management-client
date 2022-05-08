import { async } from '@firebase/util';
import axios from 'axios';
import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const [remail, setRemail] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, rerror] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    if (user) {
        // navigate(from, { replace: true })
    }

    const handleSignIn = async e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('http://localhost:5000/login', { email });
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
    }


    return (
        <div className='bg-lime-300 my-3 mx-1 md:m-8 rounded-lg h-screen flex flex-col justify-center'>
            <form onSubmit={handleSignIn} className='max-w-[400px] w-full mx-auto bg-lime-400 p-8 rounded-lg text-lg'>
                <p className='text-center text-3xl'>Login</p>
                <hr className='border-black my-2' />
                <div className='flex flex-col'>
                    <label>Email</label>
                    <input onChange={e => setRemail(e.target.value)} name='email' className='mt-2 p-2 bg-gray-200 focus:bg-white outline-none rounded-lg' type="email" required />
                </div>
                <div className='flex flex-col mt-2'>
                    <label>Password</label>
                    <input name='password' className='mt-2 p-2 bg-gray-200 focus:bg-white outline-none rounded-lg' type="password" required />
                </div>
                <div className='flex justify-between my-3'>
                    <Link to='/register'>Need to register?</Link>
                    <p className='cursor-pointer' onClick={() => sendPasswordResetEmail(remail)}>Forgot password?</p>
                </div>
                <button type='submit' className='bg-slate-800 hover:bg-slate-900 text-white w-full mb-3 py-2 rounded-md'>Sign In</button>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Login;