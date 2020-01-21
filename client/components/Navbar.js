import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <nav>
    <div id='navlink-container'>
      <Link to='/' id='navlink-home' className='navlink-one'>Home</Link>
      <Link to='/ourstory' id='navlink-ourstory' className='navlink-one'>Our Story</Link>
      <Link to='/photos' id='navlink-photos' className='navlink-one'>Photos</Link>
      <Link to='/schedule' id='navlink-schedule' className='navlink-one'>Schedule</Link>
      <Link to='/accommodations' id='navlink-accommodations' className='navlink-one'>Accommodations</Link>
      <Link to='/faq' id='navlink-faq' className='navlink-one'>FAQ</Link>
      <Link to='/attractions' id='navlink-attractions' className='navlink-one'>Attractions</Link>
      <Link to='/registry' id='navlink-registry' className='navlink-one'>Registry</Link>
      <a href='http://swelltoberogel.rsvpify.com' id='navlink-rsvp' className='navlink-one' target='blank'>RSVP</a>
    </div>
  </nav>
)

export default Navbar
