import React from 'react'
import countdown from '../countdown'

const Home = () => (
  <div id='homepage-container' className='page-container'>
    <p id='countdown-text'>{countdown} #SwellToBeRogel</p>
    <img
      id='homepage-pic'
      src='images/engagement_25.jpg'
      alt="One of our favorite engagement photos"
    />
    <p>Well, hopefully&mdash;we're keeping an eye on COVID&ndash;19, neither canceling
      anything prematurely nor exposing you foolhardily to each other's germs before
      medical authorities deem that safe. The best way to keep on top of our changes
      is to <a href='http://swelltoberogel.rsvpify.com' target='blank'>RSVP</a> with
      an email address.</p>
    <p>We're so excited to celebrate with you! All the stuff you'll need should
      be here. If not, <a href='mailto:bcrogel@gmail.com'>drop us a line</a>!</p>
  </div>
)

export default Home
