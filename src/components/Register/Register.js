import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    return (
        <div className='bg-lime-300 my-3 mx-1 md:m-8 rounded-lg h-screen flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-lime-400 p-8 rounded-lg text-lg'>
                <p className='text-center text-3xl'>Register</p>
                <hr className='border-black my-2' />
                <div className='flex flex-col'>
                    <label>Email</label>
                    <input className='mt-2 p-2 bg-gray-200 focus:bg-white outline-none rounded-lg' type="email" required />
                </div>
                <div className='flex flex-col mt-2'>
                    <label>Password</label>
                    <input className='mt-2 p-2 bg-gray-200 focus:bg-white outline-none rounded-lg' type="password" required />
                </div>
                <div className='flex flex-col mt-2'>
                    <label>Confirm Password</label>
                    <input className='mt-2 p-2 bg-gray-200 focus:bg-white outline-none rounded-lg' type="password" required />
                </div>
                <button className='bg-slate-800 hover:bg-slate-900 text-white w-full my-5 py-2 rounded-md'>Register</button>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Register;