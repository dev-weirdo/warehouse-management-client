import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-river-04740.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 md:w-9/12 lg:w-2/3'>
                {
                    items.slice(0, 6).map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>
            <div className='text-center my-6'>
                <Link to='/inventory' type='button' className='mt-2 mx-auto bg-gray-900 text-white py-1 px-2 rounded-md'>Manage Inventory</Link>
            </div>
        </div>
    );
};

export default Items;