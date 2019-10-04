import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  <nav>
    <div id='navlink-container'>
      <Link to='/' id='navlink-home'>Home</Link>
      <Link to='/ourstory' id='navlink-ourstory'>Our Story</Link>
      <Link to='/theday' id='navlink-theday'>The Day</Link>
      <Link to='/accommodations' id='navlink-accommodations'>Accommodations</Link>
      <Link to='/weddingparty' id='navlink-weddingparty'>Wedding Party</Link>
      <Link to='/registry' id='navlink-registry'>Registry</Link>
      <Link to='/photos' id='navlink-photos'>Photos</Link>
      <Link to='/rsvp' id='navlink-rsvp'>RSVP</Link>
    </div>
  </nav>
}

export default Navbar
