import React from 'react';

const Footer = () => {
    const thisYear = new Date().getFullYear();

    return (
        <div className='h-14 text-sm md:text-base bg-black text-white w-full flex justify-center items-center'>
            <p>&#169;{thisYear} Grocery Warehouse. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;