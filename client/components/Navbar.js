import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <nav>
    <div id='navlink-container'>
      <Link to='/' id='navlink-home' className='navlink-one'>Home</Link>
      <Link to='/ourstory' id='navlink-ourstory' className='navlink-one'>Our Story</Link>
      {/* <Link to='/photos' id='navlink-photos' className='navlink-one'>Photos</Link> */}
      <Link to='/schedule' id='navlink-schedule' className='navlink-one'>Schedule</Link>
      <Link to='/attractions' id='navlink-attractions' className='navlink-one'>Attractions</Link>
      <Link to='/registry' id='navlink-registry' className='navlink-one'>Registry</Link>
      <Link to='/rsvp' id='navlink-rsvp' className='navlink-one'>RSVP</Link>
      {/* <Link to='/guestbook' id='navlink-guestbook' className='navlink-one'>Guestbook</Link> */}
    </div>
  </nav>
)

export default Navbar
