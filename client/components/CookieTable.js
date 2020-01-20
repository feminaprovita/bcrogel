import React from 'react'

const CookieTable = () => (
  <div id='cookie-table-container' className='page-container'>
    <h1>About the Pittsburgh Cookie Table</h1>
    <div id='cookie-pic-div'>
      <img
      src='https://upload.wikimedia.org/wikipedia/commons/1/13/Cookie_table.jpg'
      className='small-image cookie-img'
      alt='cookie table'
      />
      <div id='cookie-text'>
        <p>You're welcome to join us in preparing this beloved Pittsburgh tradition
          (or to just join in eating them; that's ok, too)! Family and friends of the
          bride and groom prepare cookies up to weeks in advance (often their most
          celebrated recipes), and bring them to the wedding reception, to be enjoyed
          by guests throughout the evening and brought home after the festivities are
          over!</p>
        <p>Pittsburghers who wish to make cookies for our cookie table should please
          either drop them off at the casino during business hours the week before
          the wedding OR leave them with the Rogels no later than Thursday night 7/2
          to be brought over.</p>
        <p>Out-of-town guests are likewise welcome to bring cookies for the cookie table!
          Just bring them with you to the reception; there staff members will be available
          to take your cookies and plate them on the big table.</p>
        <p>Read more about the cookie table and its history in <a href='https://www.post-gazette.com/life/food/2012/09/06/This-Is-Pittsburgh-Food-On-the-cookie-tables/stories/201209060367'>any </a>
        of <a href='https://archive.theincline.com/2018/04/16/the-pittsburgh-cookie-tables-history-mystery-and-etiquette/'>several </a>
        essays <a href='https://www.nytimes.com/2009/12/16/dining/16cookies.html'></a> and
        <a href='https://en.wikipedia.org/wiki/Cookie_table'> articles</a>.</p>
      </div>
    </div>
    <p><strong>Please contact <a href='mailto:bernadetteg19@gmail.com'>Bernadette</a></strong>,
    mother of the bride, <strong>about special diet cookies</strong> (including
    but not limited to a separate gluten-free cookie table)</p>
    <img
      className='under-construction small-image'
      src='./images/under_construction_geek_woman.png'
      alt='Under Construction'
      />
  </div>
)

export default CookieTable
