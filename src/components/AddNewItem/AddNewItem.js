import React from 'react';

const AddNewItem = () => {
    const handleAddNewItem = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;

    }
    return (
        <div className='w-full h-screen grid grid-cols-1'>
            <div className='bg-lime-200 flex flex-col justify-center'>
                <form onSubmit={handleAddNewItem} className='bg-lime-300 max-w-[400px] w-full mx-auto rounded-lg p-8 '>
                    <h2 className='text-4xl dark:text-black font-bold text-center'>
                        ADD NEW ITEM
                    </h2>
                    <div className='flex flex-col text-black py-2'>
                        <input className='rounded-lg bg-lime-100 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none' type="text" name="name" placeholder='Item name' autoComplete='off' />
                    </div>
                    <div className='flex flex-col text-black py-2'>
                        <input className='rounded-lg bg-lime-100 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none' type="text" name="image" placeholder='Item image url (i.e. imgbb)' autoComplete='off' />
                    </div>
                    <div className='flex flex-col text-black py-2'>
                        <textarea className='rounded-lg bg-lime-100 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none' name="description" id="" cols="20" rows="5" placeholder='Item description' autoComplete='off'></textarea>
                    </div>
                    <div className='flex flex-col text-black py-2'>
                        <input className='rounded-lg bg-lime-100 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none' type="number" name="price" placeholder='Item price' autoComplete='off' />
                    </div>
                    <div className='flex flex-col text-black py-2'>
                        <input className='rounded-lg bg-lime-100 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none' type="number" name="quantity" placeholder='Item quantity' autoComplete='off' />
                    </div>
                    <div className='flex flex-col text-black py-2'>
                        <input className='rounded-lg bg-lime-100 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none' type="text" name="supplier" placeholder='Supplier name' />
                    </div>
                    <button type='submit' className='w-full my-5 py-2 bg-teal-400 shadow-md hover:bg-teal-300 rounded-lg text-black'>
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNewItem;