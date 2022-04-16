import userEvent from '@testing-library/user-event'
import React from 'react'
import '../UserProfile.css'

const UserProfile = ({user}) => {
  return (
    <div className='profile'>
        <div className="profile-card-container">
            <img className='user-avatar-img' src={user.avatar_url} alt="" />
            <h3 className='username'>{user.username}</h3>
        </div>
    </div>
  )
}

export default UserProfile