import React from 'react'
import countdown from '../countdown'

const Home = () => (
  <div id='homepage-container' className='page-container'>
  <h1>Watch our wedding on <a href='https://youtu.be/w0jbtiVQ0AY' target='blank'>livestream</a>!</h1>
    <div id='reschedule-div' className='reschedule-pic-div'>
      <img
        src='./images/engagement_9.jpg'
        className='med-image page-img'
        id='reschedule-img'
        alt='another of our favorite engagement photos'
      />
      <div id='reschedule-text'>
        {/* <h2 id='countdown-text'>{countdown} #SwellToBeRogel</h2> */}
        <h2>Today's the day! We're getting married today! #SwellToBeRogel</h2>
        <p>&#10087;  &#10087;  &#10087;  &#10087;  &#10087; &#10087;  &#10087;
          &#10087;  &#10087;  &#10087; &#10087;  &#10087;  &#10087;  &#10087;  &#10087;</p>
        <h2>Wedding Mass at 12 noon on Saturday, July 4&mdash;<a href='https://youtu.be/w0jbtiVQ0AY' target='blank'>Watch us on YouTube!</a></h2>
          <p>(Note the time change vs our original plans.)</p>
          <p>It will be one-way via YouTube, not two-way via Zoom. You won't have
            to worry about anybody seeing you watching us in your pajamas! Nonetheless...</p>
        <p>&#10087;  &#10087;  &#10087;  &#10087;  &#10087; &#10087;  &#10087;
          &#10087;  &#10087;  &#10087; &#10087;  &#10087;  &#10087;  &#10087;  &#10087;</p>
        <h2>Programs and Coloring Pages</h2>
          <h3><a href='https://drive.google.com/file/d/1O6oQabIetleIBY34p22yoFCyfNa9YYgp/view?usp=sharing' target='blank'>Printable program here</a></h3>
          <p>Be sure to print with the following 3 settings: Landscape, Double Sided,
            Flip on Short End</p>
          <h3><a href='livestream'>Phone-friendly program here</a></h3>
          <h3>Print and enjoy these coloring pages that we planned to offer at the
            reception:</h3>
            <p><a href='https://drive.google.com/file/d/1qc3tfJnf9lXU6gKP1FMkqkWmV-d0vbv3/view?usp=sharing'
            target='blank'>All manner of pups!</a> Ready for creative interpretations.</p>
            <p>Check out this lovely, if largely unclear, <a href='https://drive.google.com/file/d/1_46CHXzmyDSbE4Bhvg1uirVDa3dtRRjX/view?usp=sharing'
            target='blank'>drawing</a> I commissioned from the brilliant <a href='http://elyssadraws.com'
            target='blank'>Elyssa Hilton</a>.</p>
            <p>And finally, a larger version of the delightful image of the <a href='https://drive.google.com/file/d/1ckWL-E6LlZvsp0bURs2l188Ur8OChzBe/view?usp=sharing' target='blank'><em>Espousal of the Blessed Virgin
            Mary and St. Joseph</em></a> that's adorning our program, made by the
            wonderful <a href='http://matthewalderman.com' target='blank'>Matthew Alderman</a>.</p>
        <p>&#10087;  &#10087;  &#10087;  &#10087;  &#10087; &#10087;  &#10087;
          &#10087;  &#10087;  &#10087; &#10087;  &#10087;  &#10087;  &#10087;  &#10087;</p>
        <h2>Share pictures of your celebration with us!</h2>
          <p>Did you want to show off your wedding outfit? Are you drinking a celebratory
            beverage? Eating cookies (as if from our cookie table)? Kids colored
            some of our pictures? We want to see!</p>
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
    <p>Looking for something that was on our wedding website before? It should all
      be linked <a href='/former'>here</a>.</p>
  </div>
)

export default Home
