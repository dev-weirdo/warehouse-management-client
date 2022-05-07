import React from 'react';
import banner from '../../assets/banner.webp'



const Banner = () => {
    return (
        <div className='my-7'>
            <img className='w-full' src={banner} alt="" />
        </div>
    );
};

export default Banner;