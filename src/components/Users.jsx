import React from 'react'
import { useState, useEffect } from 'react'
import { getUsers } from '../utils/api'
import LoadingSpinner from './LoadingSpinner'

const Users = () => {
    const [isLoading, setIsLoading] = useState(false)

    const [users, setUsers] = useState([])
    useEffect(() => {
        setIsLoading(true)
        getUsers().then(res => {
            setUsers(res.users)
            setIsLoading(false)
        })
    }, [])

  if(users) return (
    <div className="users">
        <h1 className='users-title'>Users</h1>
        <div className='users-container'>
            {users && users.map(user => {
                return (
                    <ul key={user.username} className='users-list'>
                    <li className='users-li'>
                        <img className='user-avatar' src={user.avatar_url ? user.avatar_url : 'https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg'} alt={user.username} />
                        <h3>{user.name}</h3>
                        <h5>{user.username}</h5>
                    </li>
                </ul>
                )
            })}

            {isLoading && <LoadingSpinner />}
        </div>
    </div>
  )
}

export default Users