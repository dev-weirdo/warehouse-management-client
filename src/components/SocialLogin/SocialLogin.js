import React from 'react';
import googleLogo from '../../assets/google.png'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

const SocialLogin = () => {
    const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';


    let errmsg;
    if (error) {
        errmsg = error.message;
    }

    const handleGoogleSignIn = async () => {
        await signInWithGoogle();
    }


    if (user) {
        const call = async () => {
            const email = user.email;
            console.log(email);
            const { data } = await axios.post('https://afternoon-river-04740.herokuapp.com/login', { email });
            localStorage.setItem('accessToken', data.accessToken);
            navigate(from, { replace: true });
        }
        call();
    }

    return (
        <div>
            <div className='flex items-center'>
                <hr className='border-black w-5/12' />
                <p className='w-2/12 text-center'>Or</p>
                <hr className='border-black w-5/12' />
            </div>
            <div className='mt-3'>
                <p onClick={handleGoogleSignIn} className='flex cursor-pointer justify-center items-center mx-auto text-white bg-slate-800 hover:bg-slate-900 p-1 rounded-md'><img className='w-4 h-4 mr-1' src={googleLogo} alt="" />Continue with Google</p>
            </div>
            <p className='text-center'>{errmsg}</p>
        </div>
    );
};

export default SocialLogin;