import userEvent from '@testing-library/user-event'
import React from 'react'
import { useParams } from 'react-router-dom'
import '../UserProfile.css'

const UserProfile = ({user}) => {
  const {username} = useParams()
  return (
    <div className='profile'>
        <div className="profile-card-container">
            <img className='user-avatar-img' src={user.avatar_url} alt="" />
            <h3 className='username'>{username}</h3>
        </div>
    </div>
  )
}

export default UserProfile