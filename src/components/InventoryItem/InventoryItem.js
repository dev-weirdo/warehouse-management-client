import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});



    useEffect(() => {
        const url = `http://localhost:5000/items/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data);
            })
    }, [id, item])

    // console.log(typeof item.quantity, item.quantity);

    const handleQuantityAfterDeliver = () => {
        const quan = item.quantity;
        if (quan > 0) {
            const quantity = parseInt(quan) - 1;
            const updatedQuantityAfterDeliever = { quantity };
            const url = `http://localhost:5000/items/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedQuantityAfterDeliever)
            })
                .then(res => res.json())
                .then(data => { })
        }

    }

    const handleUpdateQuantity = e => {
        e.preventDefault();
        const inputQuantity = e.target.quantity.value;
        if (inputQuantity > 0) {
            const quantity = parseInt(inputQuantity) + parseInt(item.quantity);
            const updatedQuantity = { quantity };
            const url = `http://localhost:5000/items/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedQuantity)
            })
                .then(res => res.json())
                .then(data => { })
        }
        else {
            alert('Input quantity should be 1 or more!')
        }
        e.target.reset();
    }

    const { name, image, desc, price, quantity, supplier_name } = item;
    return (
        <div>
            <div className='w-2/5 mx-auto my-7 py-4 px-3 bg-lime-200 rounded-lg'>
                <div className='text-center'>
                    <p className='font-bold'>{name}</p>
                    <img className='w-2/5 mx-auto' src={image} alt="" />
                    <p><small>{desc}</small></p>
                    <div className='font-bold'>
                        <p>Price: &#2547;{price}</p>
                        <p>Quantity: {quantity > 0 ? quantity : <span className='text-red-600'>Stock Out</span>}</p>
                        <p>Supplier: {supplier_name}</p>
                    </div>
                </div>
                <div className='mt-3'>
                    <button onClick={handleQuantityAfterDeliver} className='block mx-auto bg-gray-900 text-white py-1 px-2 rounded-md'>DELIVERED</button>
                </div>
            </div>
            <div className='text-center my-6'>
                <Link to='/inventory' type='button' className='mt-2 mx-auto bg-gray-900 text-white py-1 px-2 rounded-md'>Manage Inventory</Link>
            </div>
            <div className='mx-auto my-8 py-2 w-2/3 flex flex-col items-center bg-lime-500 rounded-lg'>
                <p className='text-3xl'>Stock Item</p>
                <form onSubmit={handleUpdateQuantity} className='my-3'>
                    <input name='quantity' className='block py-2 px-3 rounded-lg' type="number" placeholder='Quantity of your item' />
                    <button className='mt-2 block mx-auto bg-gray-900 text-white py-1 px-2 rounded-md' type='submit'>RESTOCK</button>
                </form>
            </div>
        </div>
    );
};

export default InventoryItem;