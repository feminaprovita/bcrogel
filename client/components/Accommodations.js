import React from 'react'

const Accommodations = () => (
  <div id='accommodations-container' className='page-container'>
    <h1>Accommodations</h1>
    <h4 className='teal'><em>Book your rooms early, as there's a big baseball game and a big convention that weekend as well as the holiday!</em></h4>
    <h2>Hotels</h2>
      <div id='hotel-indigo' className='hotel-info'>
        <a href='https://www.hotelindigo.com/redirect?path=hd&brandCode=IN&localeCode=en&regionCode=1&hotelCode=PITGH&_PMID=99801505&GPC=BCW&cn=no&viewfullsite=true'><img
          src='https://static.travelagewest.com/i/size/F/www.cfmedia.vfmleonardo.com/imageRepo/6/0/102/332/779/PITGH_5786147971_S.jpg'
          className='small-image hotel-image'
          alt='Hotel Indigo'
        /></a>
        <div className='hotel-details'>
          <a href='https://www.hotelindigo.com/redirect?path=hd&brandCode=IN&localeCode=en&regionCode=1&hotelCode=PITGH&_PMID=99801505&GPC=BCW&cn=no&viewfullsite=true'><h3>Hotel Indigo Pittsburgh Technology Center</h3></a>
          <p>329 Technology Drive<br />
          Pittsburgh, PA 15219<br />
          412-621-0880</p>
          <p>$139/night (king or two queens)<br />
          Parking $20/night</p>
          <p>Equidistant from church and reception</p>
          <a href='https://www.hotelindigo.com/redirect?path=hd&brandCode=IN&localeCode=en&regionCode=1&hotelCode=PITGH&_PMID=99801505&GPC=BCW&cn=no&viewfullsite=true'><p><em>Book here!</em></p></a>
        </div>
      </div>
      <div id='hilton' className='hotel-info'>
        <a href='http://hiltongardeninn.hilton.com/en/gi/groups/personalized/P/PITUCGI-GRW-20200703/index.jhtml'><img
          src='https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/01/05/1050/Hyatt-Place-Pittsburgh-North-Shore-P004-Exterior-Dusk.jpg/Hyatt-Place-Pittsburgh-North-Shore-P004-Exterior-Dusk.16x9.jpg?imwidth=960'
          className='small-image hotel-image'
          alt='Hilton Garden Inn'
        /></a>
        <div className='hotel-details'>
          <a href='http://hiltongardeninn.hilton.com/en/gi/groups/personalized/P/PITUCGI-GRW-20200703/index.jhtml'><h3>Hilton Garden Inn Pittsburgh University Place</h3></a>
          <p>3454 Forbes Avenue<br />
          Pittsburgh, PA 15213<br />
          412-683-2040</p>
          <p>$149-189/night (king, two queens, or luxury king)<br />
          Parking $20/night</p>
          <p>Equidistant from church and reception (slightly closer)</p>
          <a href='http://hiltongardeninn.hilton.com/en/gi/groups/personalized/P/PITUCGI-GRW-20200703/index.jhtml'><p><em>Book here!</em></p></a>
        </div>
      </div>
      <div id='hyatt' className='hotel-info'>
        <a href='https://www.hyatt.com/en-US/hotel/pennsylvania/hyatt-place-pittsburgh-north-shore/pitzn?corp_id=G-GIRO'><img
          src='https://pix10.agoda.net/hotelImages/69/0/45bf6f3bfdbf04196eabaacdfaae2ff4.jpg?s=1024x768'
          className='small-image hotel-image'
          alt='Hyatt Place'
        /></a>
        <div className='hotel-details'>
          <a href='https://www.hyatt.com/en-US/hotel/pennsylvania/hyatt-place-pittsburgh-north-shore/pitzn?corp_id=G-GIRO'><h3>Hyatt Place Pittsburgh North Shore</h3></a>
          <p>260 North Shore Drive<br />
          Pittsburgh, PA 15212<br />
          412-321-3000</p>
          <p>$229/night (king or two queens, both with sofa bed)<br />
          Parking $22/night</p>
          <p>Closest to reception</p>
          <a href='https://www.hyatt.com/en-US/hotel/pennsylvania/hyatt-place-pittsburgh-north-shore/pitzn?corp_id=G-GIRO'><p><em>Book here!</em></p></a>
        </div>
      </div>
      <h4><em>Hotel blocks are good through June 4, but we strongly encourage you to book earlier!</em></h4>
    <h2>AirBnB</h2>
    <p>...</p>
    <img
      className='under-construction small-image'
      src='./images/under_construction_geek_woman.png'
      alt='Under Construction'
      />

  </div>
)

export default Accommodations
