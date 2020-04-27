import React from 'react'
import countdown from '../countdown'

const Home = () => (
  <div id='homepage-container' className='page-container'>
  <h1>We're still getting married, but...</h1>
    <div id='reschedule-div' className='reschedule-pic-div'>
      <img
        src='./images/engagement_9.jpg'
        className='small-image reschedule-img page-img'
        alt='another of our favorite engagement photos'
      />
      <div id='reschedule-text'>
        <h2>The big reception is postponed indefinitely</h2>
          <p>Details to follow, when we have them (when it's clearly safe to gather
            in such large numbers).</p>
        <h2>We will not postpone the sacrament!</h2>
        <p>It'll be a very small ceremony (immediate family only), and we hope to
          livestream it.</p>
        <p>We will soon have an email signup page here, for those who want to be kept
          up-to-date.</p>
        <p>In the meantime, you can follow our <a href='https://www.facebook.com/groups/swelltoberogel/'
        target='blank'>facebook page</a> for the latest scoop.</p>
        <h2>We're sad to miss having you all on the day, but it's what we need to do
          to keep everyone safe!</h2>
        <p>We'll just have a helluva 1st (or 5th) anniversary party...</p>
      </div>
    </div>
    <p>Looking for something that used to be on our wedding website? It should all
      be listed <a href='/former'>here</a>.</p>
    <p id='countdown-text'>{countdown} #SwellToBeRogel</p>
  </div>
)

export default Home
