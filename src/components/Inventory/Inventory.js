import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Inventory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-river-04740.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items])

    const handleDeleteItem = (id) => {
        const agree = window.confirm('Delete this item?');
        if (agree) {
            const url = `https://afternoon-river-04740.herokuapp.com/items/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => { })

            const restItems = items.filter(item => item._id !== id);
            setItems(restItems);
        }
    }
    return (
        <div className='mt-7'>
            <p className='text-center text-3xl mb-4'>Manage Inventory</p>
            <div className='flex justify-center overflow-x-auto'>
                <table className="table-auto border lg:w-3/5">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Supplier</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => {
                                return (
                                    <tr className='py-3' key={item._id}>
                                        <td><img className='w-12' src={item.image} alt="" /></td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.supplier_name}</td>
                                        <button onClick={() => handleDeleteItem(item._id)} className='px-2 rounded-lg bg-red-500 text-white'>DELETE</button>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className='text-center my-6'>
                <Link to='/addnewitem' type='button' className='mt-2 bg-gray-900 text-white py-1 px-2 rounded-md'>Add New Item</Link>
            </div>
        </div>
    );
};

export default Inventory;