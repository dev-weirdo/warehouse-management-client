import React from 'react';

const Review = ({ review }) => {
    const { name, img, desc } = review;
    return (
        <div className="max-w-sm rounded-lg shadow-md bg-gray-200 p-5 m-3">
            <img className="p-2 mx-auto rounded-lg" src={img} alt='' />
            <p className='text-2xl my-1 text-center text-black'>{name}</p>
            <div className="px-5 my-2 pb-5">
                <h5 className="text-base text-black text-center">{desc}</h5>
            </div>
        </div>

    );
};

export default Review;