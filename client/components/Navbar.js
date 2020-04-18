import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <nav>
    <div id='navlink-container'>
      <Link to='/' id='navlink-home' className='navlink-one'>Home</Link>
      <Link to='/ourstory' id='navlink-ourstory' className='navlink-one'>Our Story</Link>
      <Link to='/photos' id='navlink-photos' className='navlink-one'>Photos</Link>
      <Link to='/registry' id='navlink-registry' className='navlink-one'>Registry</Link>
      {/* <Link to='/livestream' id='navlink-livestream' className='navlink-one'>Livestream</Link> */}
    </div>
  </nav>
)

export default Navbar
