import React, { useEffect, useState } from "react"

const Signup = () => {
    const [user, setUser] = useState({})
    const [allUsers, setAllUsers] = useState([])

    console.log(process.env)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/users`)
        .then(rawData => rawData.json())
        .then(allUsers => setAllUsers(allUsers))
        .catch(err => console.log(err))
    }, [])

    const handleUserPost = () => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(rawData => rawData.json())
        .then(data => localStorage.setItem('user', JSON.stringify(data)))
        .catch(err => console.log(err))

        //window.location.reload(false)
    }

    const handleUserForm = () => {

        setUser({...user, [e.target.name]: e.target.value })

    }

    return (
    <>
    <h2>Sign Up Here</h2>
    <span>{process.env.NODE_ENV}</span>
    <input type="text" name="fname" placeholder="First Name" onChange={handleUserForm} /> 
    <input type="text" name="lname" placeholder="Last Name" onChange={handleUserForm}/>
    <input type="email" name="email" placeholder="Your Email Here" onChange={handleUserForm}/>
    <input type="password" name="password" placeholder="Your Password Here" onChange={handleUserForm}/>
    <button type="submit" onClick={handleUserPost}>Sign Me Up!</button>

    {allUsers && allUsers.map(eachUser => {
        return (
            <div key={eachUser.id}>
            <span>{eachUser.fname}</span>
            <span>{eachUser.lname}</span>
            <span>{eachUser.email}</span>
            </div>
        )
    })}
    <button onClick={() => localStorage.clear()}>clear local storage</button>
    <button onClick={() => {
        //const localUser = localStorage.getItem('user')
        console.log(JSON.parse(localStorage.getItem('user')))
    }}>get local storage</button>
    </>
    )
}

export default Signup