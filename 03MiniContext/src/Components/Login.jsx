import React,{useState,useContext} from 'react';
import UserContext from '../context/UserContext';

function Login(props) {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const checkL = (e) => {
        setUser({username,password})
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text" value={username} 
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'/>
            <input type="text" value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password' />

            <button onClick={checkL}>Login</button>
        </div>
    );
}

export default Login;