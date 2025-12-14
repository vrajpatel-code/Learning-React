import React from 'react';
import { useParams } from 'react-router-dom';
function User(props) {
    const {id} = useParams()
    return (
        <div className='bg-blue-300 text-blue-950 p-2 m-2 text-lg'>
            User:{id}
        </div>
    );
}

export default User;