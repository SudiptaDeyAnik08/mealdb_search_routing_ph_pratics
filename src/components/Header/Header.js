import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
    
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/search'>Search</Link>
    </div>
  )
}

export default Header;