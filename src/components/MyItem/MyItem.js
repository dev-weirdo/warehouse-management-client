import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {

    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/myitems?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items, user])

    return (
        <div>
            {
                items?.length
            }
        </div>
    );
};

export default MyItem;