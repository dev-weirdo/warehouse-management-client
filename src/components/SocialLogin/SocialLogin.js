import React from 'react';
import googleLogo from '../../assets/google.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='flex items-center'>
                <hr className='border-black w-5/12' />
                <p className='w-2/12 text-center'>Or</p>
                <hr className='border-black w-5/12' />
            </div>
            <div className='mt-3'>
                <p className='flex cursor-pointer justify-center items-center mx-auto text-white bg-slate-800 hover:bg-slate-900 p-1 rounded-md'><img className='w-4 h-4 mr-1' src={googleLogo} alt="" />Continue with Google</p>
            </div>
        </div>
    );
};

export default SocialLogin;