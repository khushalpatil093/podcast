import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        <div className="logo">
          <h2>PODCAST.</h2>
        </div>
        <div className="navigation">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link>Create Podcast</Link>
          <Link>Playlist</Link>
        </div>
        <div className="auth">
            <Link to="/signup">SignUp</Link>
            <Link to="/login">Log in</Link>
        </div>
    </div>
  )
}

export default Header;