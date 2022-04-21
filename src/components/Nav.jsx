import React from 'react'
import { Link } from 'react-router-dom'
// import ChangeTheme from './ChangeTheme'

function Nav({user}) {
  return (
    <div className='navbar'>
        <div className="logo"><Link to='/'>Shrelington<br/><span className="news">News</span></Link></div>
        <div className="nav-links">
          {/* <ChangeTheme/> */}
            <Link className='nav-item' to='/topics'>Topics</Link>
            <Link className='nav-item' to='/articles'>Articles</Link>
            <Link className='nav-item' to='/users'>Users</Link>
            <Link className='user-profile' to={`/users/${user.username}`}><img src={user.avatar_url} alt="users avatar" /></Link>
        </div>
    </div>
  )
}

export default Nav