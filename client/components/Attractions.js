import React from 'react'

const Attractions = () => (
  <div id='attractions-container' className='page-container'>
    <h1>Pittsburgh Attractions</h1>
    <h2>Churches</h2>
      <ul>
        <li className='wide-left'>Sacred Heart</li>
        <li className='wide-left'>St Anthony's (/shrines)</li>
        <li className='wide-left'>St Mary of the Mount</li>
        <li className='wide-left'>Most Precious Blood</li>
        <li className='wide-left'>Oratory (Ryan Catholic Newman Center)</li>
      </ul>
    <h2>Restaurants</h2>
      <ul>
        <li className='wide-left'>Primanti Bros</li>
        <li className='wide-left'>Pamela's</li>
        <li className='wide-left'><em>[Pittsburgh and Pierogis]</em></li>
        <li className='wide-left'><em>[Pittsburgh and Pizza]</em></li>
      </ul>
    <h2>Sights of Pittsburgh</h2>
      <ul>
        <li className='wide-left'>The Peak</li>
        <li className='wide-left'>The Point</li>
        <li className='wide-left'>The Museums</li>
        <li className='wide-left'>Pittsburgh Zoo & PPG Aquarium</li>
        <li className='wide-left'>The Ballparks</li>
      </ul>
    <h2>Day Trips</h2>
      <ul>
        <li className='wide-left'>Kennywood</li>
      </ul>
    <h2>Further Reading</h2>
      <ul>
        <li className='wide-left'>Theresa's two articles</li>
        <li className='wide-left'>Brandon's forthcoming article</li>
      </ul>
    <img
      className='under-construction small-image'
      src='./images/under_construction_geek_woman.png'
      alt='Under Construction'
      />
  </div>
)

export default Attractions
