import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-lime-300 grid grid-cols-1 md:grid-cols-2 h-20 py-1'>
            <div className='mx-auto flex items-center'>
                <p className='text-2xl font-bold'>Grocery Warehouse</p>
            </div>
            <div className='w-4/5 md:w-3/5 mx-auto flex justify-around items-center'>
                <Link to='/'>HOME</Link>
                <Link to='/inventory'>INVENTORY</Link>
                <Link to='/login'>LOGIN</Link>
                <Link to='/register'>REGISTER</Link>
            </div>
        </div>
    );
};

export default Header;