import React from 'react'

const Baseball = () => (
  <div id='baseball-container' className='page-container'>
    <h1>Baseball Tickets</h1>
    <div id='baseball-pic-div' className='page-pic-div'>
      <img
        src='https://i.ytimg.com/vi/M1sesd4hHVk/hqdefault.jpg'
        className='small-image baseball-img page-img'
        alt='Boston Red Sox vs Pittsburgh Pirates'
        />
      <div id='baseball-text'>
        <p>Head <a href='https://groupmatics.events/event/Gilliganrogel'
        target='blank'>here</a> to see details and buy your discount tickets to
        Sunday's baseball game! We only reserved 70 (and have invited far more than
        70 of you to the wedding), so if you want to guarantee that you get seats,
        you'd better act fast!</p>
        <p>$39 + $6* fee - $10 concession credit = <strong>$35*/ea</strong></p>
        <p>*Our contact, Kevin, has offered that anyone booking 4 or more tickets
          together can call him to book over the phone (sans fee).</p>
        <p>We look forward to enjoying this game with you! <strong>Go Bucs!</strong></p>
      </div>
    </div>
    <p className='blue'><a href='https://groupmatics.events/event/Gilliganrogel' target='blank'>See you at the ballpark!</a></p>
    <img
      src='https://bcrogel.herokuapp.com/images/Pirates_game.jpg'
      className='med-image baseball-img page-img'
      alt="At PNC Park for Claire's first Pirates game"
      />
  </div>
)

export default Baseball
