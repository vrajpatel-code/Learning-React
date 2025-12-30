import React from 'react';
import UserContext from '../context/UserContext';
import { useContext } from 'react';


function Profile(props) {
    const {user} = useContext(UserContext)

    if (!user) return <div className="">Please Login</div>


    return <h2> Welcome {user.username}</h2>
}

export default Profile;