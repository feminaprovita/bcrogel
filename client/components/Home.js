import React from 'react'
import countdown from '../countdown'

const Home = () => (
  <div id='homepage-container' className='page-container'>
  <h1>Watch our wedding on livestream!</h1>
    <div id='reschedule-div' className='reschedule-pic-div'>
      <img
        src='./images/engagement_9.jpg'
        className='med-image page-img'
        id='reschedule-img'
        alt='another of our favorite engagement photos'
      />
      <div id='reschedule-text'>
        <h2 id='countdown-text'>{countdown} #SwellToBeRogel</h2>
        <p>&#10087;  &#10087;  &#10087;  &#10087;  &#10087; &#10087;  &#10087;
          &#10087;  &#10087;  &#10087; &#10087;  &#10087;  &#10087;  &#10087;  &#10087;</p>
        <h2>Wedding Mass at 12 noon on Saturday, July 4&mdash;YouTube link coming soon</h2>
          <p>(Note the time change vs our original plans.)</p>
          <p>It will be one-way via YouTube, not two-way via Zoom. You won't have
            to worry about anybody seeing you watching us in your pajamas! Nonetheless...</p>
        <h2>Share pictures of your celebration with us!</h2>
          <p>Did you dress up pretty even though you're not going anywhere? Are you
            drinking a celebratory beverage? Eating cookies (as if from our cookie
            table)? Kids coloring the picture on the front of our Mass program? We
            want to see!</p>
          <p>Post to <a href='https://www.facebook.com/groups/swelltoberogel/'
          target='blank'>facebook</a> or <a href='emailto:bcrogel@gmail.com'
          target='blank'>email us</a> photos of your celebration! (Or anywhere on
          social media, really, tagged #SwellToBeRogel)</p>
        <h3>We can't wait to celebrate with you in person! (We'll let you know once
          we have a date for that...)
        </h3>
      </div>
    </div>
    <p className='purple'>For any questions you may have that we ourselves shouldn't
      know the answers to, you can email Claire's sister and matron of honor Theresa at <a
      href='mailto:theresag908@gmail.com'>theresag908@gmail.com</a>.</p>
    <p>Looking for something that used to be on our wedding website? It should all
      be listed <a href='/former'>here</a>.</p>
  </div>
)

export default Home
