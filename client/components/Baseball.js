import React from 'react'

const Baseball = () => (
  <div id='baseball-container' className='page-container'>
    <h1>Baseball Tickets</h1>
    <h3><em>These plans are based on the MLB schedule as it currently stands;
      we'll be keeping an eye on whether it restarts and what happens to the
      existing schedule if it does...</em></h3>
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
    <h5><em>We've got an inquiry out to Kevin about refunds in case of cancellation;
      watch this space (or ask us) for updates! <br />
      These tickets won't be released to
      the public; you have only other wedding guests to compete against for the best
      seats, so there's less of a rush.</em></h5>
    <img
      src='https://bcrogel.herokuapp.com/images/Pirates_game.jpg'
      className='med-image baseball-img page-img'
      alt="At PNC Park for Claire's first Pirates game"
      />
    <p className='blue'><a href='https://groupmatics.events/event/Gilliganrogel'
    target='blank'>See you at the ballpark!</a></p>
  </div>
)

export default Baseball
