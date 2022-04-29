import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-2/3'>
            {
                items.map(item => <Item key={item._id} item={item}></Item>)
            }
        </div>
    );
};

export default Items;