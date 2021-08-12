import React, { useEffect, useState } from "react"

const Login = () => {
    const [user, setUser] = useState({})
    const [allUsers, setAllUsers] = useState([])

    const handleUserForm = (e) => {
        setUser({...user, [e.target.name]: e.target.value })
    }

    const handleUserLogin = () => {
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(res => (res.ok ? setStatus('User is logged in') : setStatus('User not found'))
        .catch(err => console.log(err))
        )}

    return (
            <>
            <h1>Returning User</h1>
            <input type="email" name="email" placeholder="Your Email Here" onChange={handleUserForm} />
            <input type="password" name="password" placeholder="Your Password Here" onChange={handleUserForm}/>
            <button type="submit" onClick={handleUserLogin}>Login</button> 
            </>
    )
}

export default Login
