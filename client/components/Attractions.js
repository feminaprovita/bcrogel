import React from 'react'

const Attractions = () => (
  <div id='attractions-container' className='page-container'>
    <h1>Attractions</h1>
    <img
      className='under-construction small-image'
      src='./images/under_construction_geek_woman.png'
      alt='Under Construction'
      />
  <h1>Churches</h1>
    <ul>
      <li>Sacred Heart</li>
      <li>St Anthony's</li>
      <li>St Mary of the Mount</li>
      <li>Most Precious Blood</li>
    </ul>
  <h1>Restaurants</h1>
    <ul>
      <li>Primanti Bros</li>
      <li>Pamela's</li>
      <li><em>[Pittsburgh and Pizza]</em></li>
      <li><em>[Pittsburgh and Pierogis]</em></li>
    </ul>
  <h1>Sights of Pittsburgh</h1>
    <ul>
      <li>The Peak</li>
      <li>The Point</li>
      <li>The Museums</li>
      <li>Pittsburgh Zoo & PPG Aquarium</li>
      <li>The Ballparks</li>
    </ul>
  <h1>Day Trips</h1>
    <ul>
      <li>Kennywood</li>
    </ul>
  <h1>Further Reading</h1>
    <ul>
      <li>Theresa's two articles</li>
      <li>Brandon's forthcoming article</li>
    </ul>
  </div>
)

export default Attractions
