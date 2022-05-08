import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {

    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/myitems?email=${email}`;
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items, user])

    const handleDeleteMyItem = (id) => {
        const agree = window.confirm('Delete this item?');
        if (agree) {
            const url = `http://localhost:5000/items/${id}`
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
        <div className='my-7'>
            <p className='text-center text-3xl mb-4'>My Items</p>
            <div className='flex justify-center'>
                <table className="table-auto w-3/4">
                    <thead>
                        <tr className='border'>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Supplier</th>
                        </tr>
                    </thead>
                    <tbody className='border'>
                        {
                            items.map(item => {
                                return (
                                    <tr className='py-3 text-center' key={item._id}>
                                        <td><img className='w-12' src={item.image} alt="" /></td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.supplier_name}</td>
                                        <button onClick={() => handleDeleteMyItem(item._id)} className='px-2 rounded-lg bg-red-500 text-white'>DELETE</button>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyItem;