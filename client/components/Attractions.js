import React from 'react'

const Attractions = () => (
  <div id='attractions-container' className='page-container'>
    <h1>Pittsburgh Attractions</h1>
    <h2>Churches</h2>
      <h4>Sacred Heart</h4>
        <p>We're getting married at <a href='https://straphaelpgh.org/sacred-heart'>
          Sacred Heart</a> in Pittsburgh's historic Shadyside neighborhood. We've
          written up more about this gorgeous, detailed building <span className='sm-cap'>here</span>.
          Consider arriving early enough to look around, because there's so much to see!</p>
      <h4>St Anthony's (/shrines)</h4>
      <h4>St Mary of the Mount</h4>
      <h4>Most Precious Blood</h4>
      <h4>Oratory (Ryan Catholic Newman Center)</h4>
    <h2>Restaurants</h2>
      <h4>Primanti Bros</h4>
        <p>One of the foods Pittsburgh is known for is putting fries on sandwiches.
          (Try it on your next burger; it's better than you think!) <a
          href='https://primantibros.com/'>Primanti Brothers</a> started this trend,
          with their giant sandwiches of meat and cheese with cole slaw, tomato,
          and fries. The original restaurant is in the neighborhood called the
          Strip District, but there are now locations all over, with expanded menus.</p>
      <h4>Pamela's</h4>
        <p><a href='https://www.pamelasdiner.com/'>Pamela's Diner</a> is a beloved
        local establishment with a location conveniently at the little downtown
        strip closest to Sacred Heart.</p>
      <h4><em>Pittsburgh and Pierogis</em></h4>
        <p>Pittsburgh and pierogis go together like eggs and bacon. You can ask
          people where the best pierogis are, but in Claire's opinion it's less
          about that and more about the fact that pierogis are omnipresent: an
          appetizer at nearly every restaurant, a topping on your burger or sandwich,
          a popular pizza flavor... Enjoy them!</p>
      <h4><em>Pittsburgh and Pizza</em></h4>
        <p>Most American cities have a particular style of pizza to call their own,
          but not Pittsburgh! Every (small, locally owned) pizzeria here has its
          own totally distinct style, and every Yinzer has their own opinion about
          whose is best!</p>
        <p>Bill stans <a href='http://mineospizza.com/squirrel-hill.html'>Mineo's</a>,
          and while Claire has a lot of research yet to do, her top choice so far
          is <a href='http://www.vincentspizzapark.com/'>Vincent's</a>.</p>
    <h2>Sights of Pittsburgh</h2>
      <p>The Peak</p>
      <p>The Point</p>
      <p>The Museums</p>
      <p>Pittsburgh Zoo & PPG Aquarium</p>
      <p>The Ballparks</p>
    <h2>Day Trips</h2>
      <p>Kennywood</p>
    <h2>Further Reading</h2>
      <ul>
        <li className='wide-left'><a href='https://epicpew.com/if-you-love-the-catholic-church-and-good-food-pittsburg-is-your-next-pilgrimage-destination/'>
          If You Love the Catholic Church and Good Food, Pittsburgh Is Your Next
          Pilgrimage Destination</a></li>
        <li className='wide-left'><a href='https://epicpew.com/pittsburgh-pilgrimage/'>
          Even More Reasons to Pilgrimage to Pittsburgh</a></li>
        {/* <li className='wide-left'>Brandon's forthcoming book</li> */}
      </ul>
    <img
      className='under-construction small-image'
      src='./images/under_construction_geek_woman.png'
      alt='Under Construction'
      />
  </div>
)

export default Attractions
