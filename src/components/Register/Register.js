import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    let errmsg;
    if (error) {
        errmsg = error.message;
    }

    if (loading) {
        return (
            <>
                <div className='w-full h-screen flex justify-center items-center'>
                    <svg role="status" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                    </svg>

                </div>
            </>
        )
    }

    if (user) {
        navigate(from, { replace: true })
    }



    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const cpassword = e.target.cpassword.value;

        if (password === cpassword) {
            createUserWithEmailAndPassword(email, password);
        }
    }

    return (
        <div className='bg-lime-300 my-3 mx-1 md:m-8 rounded-lg h-screen flex flex-col justify-center'>
            <form onSubmit={handleRegister} className='max-w-[400px] w-full mx-auto bg-lime-400 p-8 rounded-lg text-lg'>
                <p className='text-center text-3xl'>Register</p>
                <hr className='border-black my-2' />
                <div className='flex flex-col'>
                    <label>Email</label>
                    <input name='email' className='mt-2 p-2 bg-gray-200 focus:bg-white outline-none rounded-lg' type="email" required />
                </div>
                <div className='flex flex-col mt-2'>
                    <label>Password</label>
                    <input name='password' className='mt-2 p-2 bg-gray-200 focus:bg-white outline-none rounded-lg' type="password" required />
                </div>
                <div className='flex flex-col mt-2'>
                    <label>Confirm Password</label>
                    <input name='cpassword' className='mt-2 p-2 bg-gray-200 focus:bg-white outline-none rounded-lg' type="password" required />
                </div>
                <button type='submit' className='bg-slate-800 hover:bg-slate-900 text-white w-full my-5 py-2 rounded-md'>Register</button>
                <p className='text-center'>{errmsg}</p>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Register;