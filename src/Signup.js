import React, { useEffect, useState } from "react"
const Signup = () => {
    const [user, setUser] = useState({})
    const [allUsers, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then(rawData => rawData.json())
        .then(allUsers => console.log(allUsers))
        .catch(err => console.log(err))
    }, [])

    const handleUserPost = () => {
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => console.log('Success: ', data))
        .catch(err => console.log(err))
    }

    const handleUserForm = (e) => {

        setUser({...user, [e.target.name]: e.target.value })

    }

    return (
    <>
    <h2>Sign Up Here</h2>
    <input type="text" name="fname" placeholder="First Name" onChange={handleUserForm} /> 
    <input type="text" name="lname" placeholder="Last Name" onChange={handleUserForm}/>
    <input type="email" name="email" placeholder="Your Email Here" onChange={handleUserForm}/>
    <input type="password" name="password" placeholder="Your Password Here" onChange={handleUserForm}/>
    <button type="submit" onClick={handleUserPost}>Sign Me Up!</button>

    {allUsers && allUsers.map(eachUser => {
        return (
            <>
            <span>{eachUser.fname}</span>
            <span>{eachUser.lname}</span>
            <span>{eachUser.email}</span>
            </>
        )
    })}
    </>
    )
}

export default Signup