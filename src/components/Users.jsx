import React from 'react'
import { useState, useEffect } from 'react'

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://shrelington-news.herokuapp.com/api/users').then(res => res.json()).then((res) => {
            setUsers(res.users)
        })
    }, [])

  if(users) return (
    <div className="users">
        <h1 className='users-title'>Users</h1>
        <div className='users-container'>
            {users.map(user => {
                return (
                    <ul key={user.username} className='users-list'>
                    <li className='users-li'>
                        <img className='user-avatar' src={user.avatar_url} alt={user.username} />
                        <h3>{user.name}</h3>
                        <h5>{user.username}</h5>
                    </li>
                </ul>
                )
            })}
        </div>
    </div>
  )
}

export default Users