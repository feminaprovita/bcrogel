import React from 'react'
import {Link} from 'react-router-dom'

const Former = () => (
  <div id='former-container' className='page-container'>
    <h3>Sections previously on our navbar, now hidden:</h3>
    <div id='former-links'>
      <Link to='/schedule' id='navlink-schedule'>Schedule</Link><br/>
      <Link to='/accommodations' id='navlink-accommodations'>Accommodations</Link><br/>
      <Link to='/faq' id='navlink-faq'>FAQ</Link><br/>
      <Link to='/attractions' id='navlink-attractions'>Attractions</Link><br/>
      <Link to='/registry' id='navlink-registry'>Registry</Link><br/>
      <a href='http://swelltoberogel.rsvpify.com' id='navlink-rsvp' target='blank'>RSVP</a>
    </div>
  </div>
)

export default Former
