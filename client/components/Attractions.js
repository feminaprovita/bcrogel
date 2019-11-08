import React from 'react'

const Attractions = () => (
  <div id='attractions-container' className='page-container'>
    <h1>Pittsburgh Attractions</h1>
    <h2>Churches</h2>
      <ul>
        <li>Sacred Heart</li>
        <li>St Anthony's</li>
        <li>St Mary of the Mount</li>
        <li>Most Precious Blood</li>
      </ul>
    <h2>Restaurants</h2>
      <ul>
        <li>Primanti Bros</li>
        <li>Pamela's</li>
        <li><em>[Pittsburgh and Pizza]</em></li>
        <li><em>[Pittsburgh and Pierogis]</em></li>
      </ul>
    <h2>Sights of Pittsburgh</h2>
      <ul>
        <li>The Peak</li>
        <li>The Point</li>
        <li>The Museums</li>
        <li>Pittsburgh Zoo & PPG Aquarium</li>
        <li>The Ballparks</li>
      </ul>
    <h2>Day Trips</h2>
      <ul>
        <li>Kennywood</li>
      </ul>
    <h2>Further Reading</h2>
      <ul>
        <li>Theresa's two articles</li>
        <li>Brandon's forthcoming article</li>
      </ul>
    <img
      className='under-construction small-image'
      src='./images/under_construction_geek_woman.png'
      alt='Under Construction'
      />
  </div>
)

export default Attractions
