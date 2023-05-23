import React from 'react'
import { Link } from 'react-router-dom';

import './Header.css'

function Header() {
  return (
    <div>
    
        <Link className='link' to='/home'>Home</Link>
        <Link className='link' to='/about'>About</Link>
        <Link className='link' to='/search'>Search</Link>
    </div>
  )
}

export default Header;