import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
    const { _id, name, image, desc, price, quantity, supplier_name } = item;
    const navigate = useNavigate();
    const handleItemDetails = (id) => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div className='my-7 py-4 px-3 mx-5 bg-lime-200 rounded-lg'>
            <div className='text-center'>
                <p className='font-bold'>{name}</p>
                <img className='w-2/5 mx-auto' src={image} alt="" />
                <p><small>{desc}</small></p>
                <div className='font-bold'>
                    <p>Price: &#2547;{price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier_name}</p>
                </div>
            </div>
            <div className='mt-3'>
                <button onClick={() => handleItemDetails(_id)} className='block mx-auto bg-gray-900 text-white py-1 px-2 rounded-md'>UPDATE</button>
            </div>
        </div>
    );
};

export default Item;