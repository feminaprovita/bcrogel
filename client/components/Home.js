import React from 'react'
import countdown from '../countdown'

const Home = () => (
  <div id='homepage-container' className='page-container'>
    <p id='countdown-text'>{countdown} #SwellToBeRogel</p>
    <img
      id='homepage-pic'
      src='images/Gill_wedding.jpg'
      alt="Bill and Claire at Claire's sister Theresa's wedding in Charlotte"
    />
    <p>All the stuff you'll need will be here. Sooner or later. We're so excited to celebrate with you!</p>
  </div>
)

export default Home
