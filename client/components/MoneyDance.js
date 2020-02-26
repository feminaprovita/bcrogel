import React from 'react'

const MoneyDance = () => (
  <div id='money-dance-container' className='page-container'>
    <h1>💰💃 About the Money Dance 💰🕺</h1>
    <div id='money-dance-pic-div' className='page-pic-div'>
      {/* <img
      src='https://upload.wikimedia.org/wikipedia/commons/1/13/Cookie_table.jpg'
      className='small-image money-dance-img page-img'
      alt='money dance'
      /> */}
      <div id='money-dance-text'>
        <p>The money dance is a Slovak wedding tradition kept by the Rogels. In
          short: pay a dollar, take a shot, dance with the bride or groom.</p>
        <p>This <em>will</em> take the place of the receiving line.</p>
        <p>Here’s what it’ll look like in practice.</p>
        <ul><li>Line up for either the bride or the groom.</li>
          <li className='indented'>You're welcome to come back and hit up the other
          line or double up on the same line as desired; you’ll just have to wait again.</li>
        <li>When it’s your turn, put some money (bills, not coins) into the Money Bag.</li>
          <li className='indented'>Just $1 is customary. You will not get a longer
          dance for gifting a larger amount! Nor will you be turned away for having no cash.</li>
        <li>Then a bridesmaid or groomsman will offer you a shot of whiskey or schnapps,
          or perhaps of juice or sparkling water.</li>
          <li className='indented'>We use the word “shot” loosely; if a kid wants
          theirs, it'll be given to them with time to drink it.</li>
        <li>You’ll then get about 20 seconds of uninterrupted dancing (and conversation)
          with the bride/groom.</li>
          <li className='indented'>Yes, we’ll have someplace safe to put your adult
          beverage while you’re dancing.</li>
        <li>When your time is up, you’ll be welcomed onto the rest of the dance floor,
          to do as you please (within reason)!</li></ul>
        <p>The customary polka will be played exactly once, at the beginning of the
          money dance. The dance floor opens with/after the money dance.</p>
      </div>
    </div>
  </div>
)

export default MoneyDance
