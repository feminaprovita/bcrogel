import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <nav>
    <div id='navlink-container'>
      <Link to='/' id='navlink-home' className='navlink-one'>Home</Link>
      <Link to='/ourstory' id='navlink-ourstory' className='navlink-one'>Our Story</Link>
      <Link to='/photos' id='navlink-photos' className='navlink-one'>Photos</Link>
      <Link to='/weddingparty' id='navlink-weddingparty' className='navlink-one'>Wedding Party</Link>
      <Link to='/schedule' id='navlink-schedule' className='navlink-one'>Schedule</Link>
      <Link to='/accommodations' id='navlink-accommodations' className='navlink-one'>Accommodations</Link>
      <Link to='/registry' id='navlink-registry' className='navlink-one'>Registry</Link>
      <Link to='/rsvp' id='navlink-rsvp' className='navlink-one'>RSVP</Link>
    </div>
  </nav>
)

export default Navbar
