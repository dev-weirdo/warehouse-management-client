import React from 'react';
import googleLogo from '../../assets/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';


    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='flex items-center'>
                <hr className='border-black w-5/12' />
                <p className='w-2/12 text-center'>Or</p>
                <hr className='border-black w-5/12' />
            </div>
            <div className='mt-3'>
                <p onClick={() => signInWithGoogle()} className='flex cursor-pointer justify-center items-center mx-auto text-white bg-slate-800 hover:bg-slate-900 p-1 rounded-md'><img className='w-4 h-4 mr-1' src={googleLogo} alt="" />Continue with Google</p>
            </div>
        </div>
    );
};

export default SocialLogin;