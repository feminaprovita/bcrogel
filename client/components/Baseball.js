import React from 'react'

const Baseball = () => (
  <div id='baseball-container' className='page-container'>
    <h1>Coming Soon: Baseball Tickets</h1>
      <img
        className='under-construction small-image'
        src='./images/under_construction_geek_woman.png'
        alt='Under Construction'
        />
    <div id='baseball-pic-div' className='page-pic-div'>
      <img
        src='https://i.ytimg.com/vi/M1sesd4hHVk/hqdefault.jpg'
        className='small-image baseball-img page-img'
        alt='Boston Red Sox vs Pittsburgh Pirates'
        />
      <div id='baseball-text'>
        <p>Check back soon; we are close to having both a booking link and a phone
          number you can call directly (to save on booking fees) to reserve tickets
          within the block of tickets Bill reserved for this game!</p>
        <p>NB 1:00pm is only a projected time! The game might in reality be earlier
          or later.</p>
      <img
        src='./images/Pirates_game'
        className='small-image baseball-img page-img'
        alt="At PNC Park for Claire's first Pirates game"
        />
      </div>
    </div>
  </div>
)

export default Baseball
