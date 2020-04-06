import React from 'react'
import countdown from '../countdown'

const Home = () => (
  <div id='homepage-container' className='page-container'>
    <p id='countdown-text'>{countdown} #SwellToBeRogel</p>
    <p className='coronavirus-home'>Well, God willing and pandemic permitting.</p>
    <p className='coronavirus-home'>We probably won't know till sometime in May
    whether and how we'll need to alter our plans...</p>
    <img
      id='homepage-pic'
      src='images/engagement_25.jpg'
      alt="One of our favorite engagement photos"
    />
    <p className='coronavirus-home'>So please reserve and <a
    href='http://swelltoberogel.rsvpify.com' target='blank'>RSVP</a> with hope!
    And <a href='mailto:bcrogel@gmail.com'>drop us a line</a> with anything else
    you may need.</p>
    <p>We're so excited to celebrate with you! Whenever we can. You're in our
      prayers! 🙏🏻🙏🏻</p>
  </div>
)

export default Home
