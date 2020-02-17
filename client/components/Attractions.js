import React  from 'react'
import ScrollingWrapper from './ScrollingWrapper'

const Attractions = () => (
  <ScrollingWrapper>
    <div id='attractions-container' className='page-container'>
      <h1 id='top'>Pittsburgh Attractions</h1>
      <div id='button-container'>
        <a href='#churches'><button type='button'>Churches</button></a>
        <a href='#restaurants'><button type='button'>Restaurants</button></a>
        <a href='#booze'><button type='button'>Booze</button></a>
        <a href='#sightseeing'><button type='button'>Sightseeing</button></a>
        <a href='#further-reading'><button type='button'>Even More</button></a>
      </div>
      <h2 id='churches'>Churches</h2>
        <div id='sacred-heart' className='one-attraction'>
          <img
            src='https://i.pinimg.com/originals/19/56/0a/19560a28308423add707fef41b0d876d.jpg'
            className='small-image attr-img'
            alt='Sacred Heart exterior'
          />
          <div className='attr-details'>
            <h3>Sacred Heart</h3>
            <p>We're getting married at <a href='https://straphaelpgh.org/sacred-heart'>
              Sacred Heart</a> in Pittsburgh's historic Shadyside neighborhood. We will soon
              write up more about this gorgeous, detailed building <span className='sm-cap'>here</span>.
              Consider arriving early enough to look around, because there's so much to see!</p>
            <p>That’s why we created our silly scavenger hunt, to try and invite you all into some
              of our favorite details!</p>
          </div>
        </div>
        <div id='st-anthonys' className='one-attraction-reverse'>
          <div className='attr-details'>
            <h3>Saint Anthony Chapel</h3>
            <p>Perhaps the most widely known of the six "<a href='https://23091.sites.ecatholic.com/'
              target='blank'>shrines of Pittsburgh</a>," St Anthony Chapel holds <a href='https://23091.sites.ecatholic.com/primer'
              target='blank'>over 5,000 relics</a>, the largest public collection outside the Vatican.
              While the church contains binders listing names and locations of saints, we highly recommend
              a tour (<a href='https://www.saintanthonyschapel.org/planning-logistics' target='blank'>1pm
              on weekends</a> or <a href='https://d2y1pz2y630308.cloudfront.net/2523/documents/2015/5/Saint%20Anthony%20Chapel%20Tour.mp3'
              target='blank'>prerecorded audio tour</a>), as the sheer volume of relics is dizzying!
              They're practically guaranteed to have a relic of your obscure patron.</p>
          </div>
          <img
            src='https://aleteiaen.files.wordpress.com/2018/03/web3-saint-anthony-chapel-relics-pittsburgh-main-altar-perrant-cc-by-3-0.jpg?quality=100&strip=all&w=620&h=310&crop=1'
            className='small-image attr-img'
            alt="St Anthony Chapel"
          />
        </div>
        <div id='st-marys' className='one-attraction'>
          <img
            src='https://i1.trekearth.com/photos/152731/te141208.jpg'
            className='small-image attr-img'
            alt='St Mary of the Mount'
          />
          <div className='attr-details'>
            <h3>Saint Mary of the Mount</h3>
            <p>This <a href='https://princeofpeacepittsburgh.com/' target='blank'>lovely mountaintop chapel</a> is
              beautiful in its own right, and its foyer is open 24/7 for prayer, with a pew and kneeler looking into
              the beautifully lit church. It’s also one of the very best places to see the entire city and her rivers!
              You can even take the <a href='https://monongahelaincline.com/' target='blank'>Mon (Monongahela) incline</a> up
              the mountain and enjoy the picturesque walk over (you’ll walk right pat several little Scenic Overlooks on
              the way). It’s just gorgeous.</p>
          </div>
        </div>
        <div id='precious-blood' className='one-attraction-reverse'>
          <div className='attr-details'>
            <h3>Most Precious Blood</h3>
            <p>A humble but vibrant parish, <a href='https://www.institute-christ-king.org/pittsburgh-home'
            target='blank'>Most Precious Blood</a> is run by the canons of the Institute of
            Christ the King. If you're looking for a Latin Mass while you're in town,
            this is the place to go!</p>
          </div>
          <img
            src='https://1.bp.blogspot.com/-thh9pDeIZ14/XSYtrNGzlkI/AAAAAAAACYI/IIK9ZzijGXIgwwbOGjuZg4abBneVPoBLgCLcBGAs/s1600/MostPreciousBloodJesusParish-2.jpg'
            className='small-image attr-img'
            alt='Most Precious Blood'
          />
        </div>
        <div id='oratory' className='one-attraction'>
          <img
            src='https://i.pinimg.com/originals/9c/46/55/9c4655b7ae31f372dc330f688024c146.jpg'
            className='small-image attr-img'
            alt='Pittsburgh Oratory'
          />
          <div className='attr-details'>
            <h3>Oratory (Ryan Catholic Newman Center)</h3>
            <p>The Oratorians of St Philip Neri run the campus ministry for Pitt, and its chapel serves the
              community as a perpetual adoration chapel (except during <a href='https://www.thepittsburghoratory.org/mass-confessions'
              target='blank'>Mass times</a>) (overnight access, 10pm-6am, is limited to adorers with key
              cards, sorry). They also offer Confession every day. Bill has been one of their scheduled
              adorers for a couple years.</p>
          </div>
        </div>
        <div id='fus' className='one-attraction-reverse'>
          <div className='attr-details'>
            <h3>Franciscan University</h3>
            <p>Claire’s <a href='https://franciscan.edu/visit-franciscan/' target='blank'>alma mater</a> is
            less than 1h west of the city! She most notably recommends the perpetual adoration chapel
            (“the port”) (not pictured), a replica of St Francis’ portiuncula chapel in Assisi, the one
            he built by hand when God first told him to “Rebuild my church” and he took it literally.</p>
          </div>
          <img
            src='https://steubenvilleconferences.com/wp-content/uploads/2016/04/23386872391_b9a451cf5e_o-e1460138113401-1180x590.jpg'
            className='small-image attr-img'
            alt='Franciscan University'
          />
        </div>
        <div id='latrobe' className='one-attraction'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/4/4c/St._Vincent_Archabbey_Basilica.jpg'
            className='small-image attr-img'
            alt='Saint Vincent Archabbey'
          />
          <div className='attr-details'>
            <h3>Saint Vincent Archabbey</h3>
            <p>Under an hour southeast of the city is the <a href='http://saintvincentarchabbey.org/'
              target='blank'>first Benedictine abbey</a> in the United States. This lovely
              basilica and its beautiful grounds includes a university, on whose grounds
              they host the Steelers training camp every year!</p>
            <p>It's also an active monastery, with over 150 monks in residence, and
              a picturesque place of prayer and retreat into the beauty of nature. It comes
              <a href='https://www.onlyinyourstate.com/pennsylvania/st-vincent-archabbey-pa/'
              target='blank'> highly recommended</a>.</p>
          </div>
        </div>


      <h2 id='restaurants'>Restaurants</h2>
        <div id='primantis' className='one-attraction-reverse'>
          <div className='attr-details'>
            <h3>Primanti Bros</h3>
            <p>One of the foods Pittsburgh is known for is putting fries on sandwiches.
              (Try it on your next burger; it's better than you think!) <a
              href='https://primantibros.com/'>Primanti Brothers</a> started this trend,
              with their <em>giant</em> sandwiches of meat and cheese with cole slaw, tomato,
              and fries. The original restaurant is in the neighborhood called the
              Strip District, but there are now locations all over, with expanded menus.</p>
            <p>And come hungry! Seriously, if you're not splitting a Primanti's
              sandwich with someone, consider skipping the meal before it. Those
              puppies are <em>gigantic</em>!</p>
            <p>It's neither Bill's nor Claire's #1 favorite Pittsburgh culinary experience,
              but it's certainly our most famous one, and it's definitely worth trying!</p>
          </div>
          <img
            src='https://primantibros.com/files/images/PBROS_PUNCHH_POS_r5-A-BS-menu-feature-03_660px.png'
            className='small-image attr-img'
            alt='Primanti Brothers sandwich'
          />
        </div>
        <div id='pamelas' className='one-attraction'>
          <img
            src='https://blogs.gcc.edu/insider/wp-content/uploads/sites/3/2018/03/pamelas-diner-pittsburgh.jpg'
            className='small-image attr-img'
            alt="Pamela's"
          />
          <div className='attr-details'>
            <h3>Pamela's</h3>
            <p><a href='https://www.pamelasdiner.com/'>Pamela's Diner</a> is a beloved
              local establishment with a location conveniently at the little downtown
              strip close to Sacred Heart (5227 Walnut St).</p>
            <p>Note: They are cash only.</p>
          </div>
        </div>
        <div id='burgatory' className='one-attraction-reverse'>
          <div className='attr-details'>
            <h3>Burgatory</h3>
            <p>A delicious local chain not unlike New York's Bareburger,
              <a href='https://burgatorybar.com/'> Burgatory</a> is a winner if you're
              looking for delightful gluten-free food, vegetarian/vegan options, exotic
              meats, or really just any filling, satisfying, tasty meal. Or for a decadent
              milkshake!</p>
            <p>An old favorite of Bill's ("questionable theology,
              delicious burgers"), and one Claire was sold on immediately!</p>
          </div>
          <img
            src='https://www.tripsavvy.com/thmb/Ll78iS5prcVShq73_gWuhBzCAr8=/960x960/filters:no_upscale():max_bytes(150000):strip_icc()/burgatory-bar-56a731fd5f9b58b7d0e7ce45.jpg'
            className='small-image attr-img'
            alt='Burgatory'
          />
        </div>
        <div id='onion-maiden' className='one-attraction'>
          <img
            src='https://ksr-ugc.imgix.net/assets/015/128/154/58b4f92d542438b68a972dd5a14f0a6b_original.jpg?ixlib=rb-2.1.0&w=680&fit=max&v=1484101486&auto=format&gif-q=50&q=92&s=1e5fa973651b296a50516d8933911083'
            className='small-image attr-img'
            alt='Onion Maiden'
          />
          <div className='attr-details'>
            <h3>Onion Maiden</h3>
            <p>A short cab ride outside the neighborhoods of the wedding, <a href='https://www.onionmaiden.com/'
              target='blank'>Onion Maiden</a> is a vegan restaurant whose foods are 1) quite
              tasty and 2) punning on Iron Maiden songs! Was a bit of a gamble the
              first time friends took us there, but it's a delight. Highly recommended,
              even for carnivores like us!</p>
            <p>Note: They are cash only.</p>
          </div>
        </div>
        <div id='church-brew-works' className='one-attraction-reverse'>
          <div className='attr-details'>
            <h3>Church Brew Works</h3>
            <p>Another interesting, delicious place that's worth the cab fare, <a
              href='https://churchbrew.com/' target='blank'>Church Brew Works</a> is
              a microbrewery housed in the shell of a former Catholic church
              (more detailed history on their <a href='https://churchbrew.com/history/'
              target='blank'>website</a>).</p>
            <p>But it's not just the novelty of drinking beer in church... well ok,
              maybe it is mostly that. But still! They lean into it well.</p>
          </div>
          <img
            src='https://thelifeofaeatingmonster.files.wordpress.com/2012/07/dsc2646.jpg'
            className='small-image attr-img'
            alt='Church Brew Works'
          />
        </div>
        <div id='bakn' className='one-attraction'>
          <img
            src='https://i.imgur.com/pqtUlEL.png'
            className='small-image attr-img'
            alt='Bakn Carnegie'
          />
          <div className='attr-details'>
            <h3>Bakn</h3>
            <p>So all our notable eateries are a little bit of a drive! You nonetheless
              want to consider this one, the <a href='https://eatbakn.com/' target='blank'>Carnegie*
              location</a>.</p>
            <p>In case the name didn't make it obvious, the whole restaurant is bacon-
              themed! There are a few meatless and other-meat options, but the vast
              majority of the menu is bacon (and the décor is just delightful)!</p>
            <p><em>* To avoid outing yourself as a tourist, remember that, around these
              parts, Carnegie is pronounced as the man himself said it, with the emphasis
              on the middle syllable (car-NAY-gee / car-NEG-ee).</em></p>
          </div>
        </div>
        <div id='shady-grove' className='one-attraction-reverse
        '>
          <div className='attr-details'>
            <h3 id='shady-grove'>Shady Grove</h3>
            <p>This bar (near our church) has excellent burgers, pierogi pizza, all
              kinds of good stuff&mdash;yet their salads are so brilliant that both
              Bill and Claire (but especially Bill) usually end up getting a salad!
              Come, taste the miracle in action!</p>
          </div>
          <img
            src='https://cooksandeats.com/wp-content/uploads/2009/12/IMG_3177-768x1024.jpg'
            className='small-image attr-img'
            alt='Shady Grove'
          />
        </div>
        <div id='yard' className='one-attraction'>
          <img
            src='https://dtjew9b6f6zyn.cloudfront.net/wp-content/uploads/2019/02/2-133.jpg'
            className='small-image attr-img'
            alt='The Yard'
          />
          <div className='attr-details'>
            <h3>The Yard</h3>
            <p>This excellent brewpub, also near our church, specializes in grilled
              cheese. And count those taps (frequently rotating)! Need I say more?</p>
          </div>
        </div>
        <div id='pierogi' className='one-attraction-reverse'>
          <div className='attr-details'>
            <h3><em>Pittsburgh and Pierogies</em></h3>
            <p>Pittsburgh and pierogies go together like eggs and bacon. You can ask
              people <a href='https://goodfoodpgh.wpengine.com/take-ultimate-pittsburgh-pierogi-road-trip/'
              target='blankl'>where the best pierogies are</a>, but in Claire's opinion
              it's less about that contest and more about the fact that pierogies are
              omnipresent: an appetizer at nearly every restaurant, a topping on your
              burger or sandwich, even a popular pizza flavor... Enjoy them!</p>
            <p>The most convenient place to look for pierogi pizza will be <a href='#shady-grove'>Shady Grove</a>.</p>
          </div>
          <img
            src='https://live.staticflickr.com/1296/1084082305_b4f2231676_b.jpg'
            className='small-image attr-img'
            alt='pierogi'
          />
        </div>
        <div id='pizzas' className='one-attraction'>
          <img
            src='https://zagat-photos.imgix.net/ChIJtY8Z0ynsNIgR_61FtNNqVHU/7d32c1d99a8fa8fe2ab973465f9e5a58.jpg?fit=crop&crop=center&max-w=384&max-h=384&auto=format'
            className='small-image attr-img'
            alt="Vincent's pepperoni pizza"
          />
          <div className='attr-details'>
            <h3><em>Pittsburgh and Pizza</em></h3>
            <p>Most American cities have a particular style of pizza to call their own,
              but not Pittsburgh! Every (small, locally owned) pizzeria here has its
              own totally distinct style, and every Yinzer has their own opinion about
              whose is best! As of 2014, Pittsburgh is reputed to have "<a href='https://www.thedailybeast.com/the-case-for-pittsburgh-pizza' target='blank'>the highest pizzeria density
              of any American city except Orlando</a>."</p>
            <p>Bill loves <a href='http://mineospizza.com/squirrel-hill.html'>Mineo's</a> (not toooo far
              from our church), and, while Claire has a lot of research yet to do, her top choice so far
              is <a href='http://www.vincentspizzapark.com/'>Vincent's</a> (pictured). Both of us quite
              enjoy pierogi pizza, although our favorite, Lelulo's, is too far outside the city to be
              relevant to wedding events. </p>
          </div>
        </div>


      <h2 id='booze'>Booze</h2>
        <div id='breweries' className='one-attraction'>
        <img
            src='https://pittsburghbreweries.com/wp-content/themes/pbg/dist/assets/images/pbg-logo.svg'
            className='small-image attr-img'
            alt='Breweries'
            />
        <div className='attr-details'>
          <h3>Breweries</h3>
          <p>Pittsburgh is a great city for beer, with over 30 breweries in the city
            and environs! Most of them are a small drive away from the wedding hotels,
            but worth it. The <a href='https://pittsburghbreweries.com/' target='blank'>Pittsburgh
            Brewers Guild</a> has put together this great list (and a passport for
            trying to visit them all).</p>
          </div>
        </div>
        <div id='wineries' className='one-attraction-reverse'>
          <div className='attr-details'>
            <h3>Wineries</h3>
            <p>It's not just beer; there's plenty of good wine around, too! Just be
              sure to pop addresses into a map before making plans based on
              this <a href='https://www.discovertheburgh.com/pittsburgh-wineries/'
              target='blank'>delightful list</a>, as it freely jumps between city
              and suburban wineries (with a link to wine bars at the bottom).</p>
          </div>
          <img
            src='https://beveragedynamics.com/wp-content/uploads/2015/04/Generic-Wine-for-GB1.jpg'
            className='small-image attr-img'
            alt='Wineries'
            />
        </div>
        <div id='distilleries' className='one-attraction'>
        <img
            src='https://media.architecturaldigest.com/photos/574e04fbfd771365462050e3/master/w_4256,h_2841,c_limit/craft-distilleries-03.jpg'
            className='small-image attr-img'
            alt='Distilleries'
            />
        <div className='attr-details'>
          <h3>Distilleries</h3>
          <p>We've spent more time at the distilleries thatn either of the above,
            and the Burgh has its fair share! The top 4 <a href='https://www.nextpittsburgh.com/eatdrink/8-pittsburgh-distilleries/'
            target='blank'>here</a> are in the city, and the <a href='https://www.mclaughlindistillery.com/'
            target='blank'>very last one</a> on their list is our favorite (though
            it's 15mi north of the city), with an incredibly diverse selection of
            whiskeys and moonshines of great quality! You may even notice that they
            made a small donation to our wedding decor...</p>
          </div>
        </div>
        <div id='pennsylvania-libations' className='one-attraction-reverse'>
          <div className='attr-details'>
            <h3>Pennsylvania Libations</h3>
            <p>All stores that sell liquor are owned by the state here&mdash;except for
              this recently opened innovator! At <a href='https://pennsylvanialibations.com/manufacturers'
              target='blank'>Pennsylvania Libations</a>, you can purchase (and usually
              taste) spirits distilled all across the state.</p>
          </div>
            <img
              src='https://pennsylvanialibations.com/wp-content/uploads/2017/06/pa_white-1a-1.png'
              className='small-image attr-img'
              alt='Pennsylvania Libations'
            />
        </div>


      <h2 id='sightseeing'>Sightseeing</h2>
        <div id='point' className='one-attraction-reverse'>
          <div className='attr-details'>
            <h3>The Point</h3>
            <p>A ten-minute walk from our reception (and across the river, technically),
              <a href='https://www.dcnr.pa.gov/StateParks/FindAPark/PointStatePark/Pages/default.aspx'
              target='blank'> Point State Park</a> and its fountain mark where the Ohio,
              Allegheny, and Monongahela Rivers meet. The remnants of Fort Pitt and
              Fort Duquesne are also in this immediate area (more cool history
              <a href='https://popularpittsburgh.com/pittsburghs-heart-point-state-park/'
              target='blank'>here</a>). This is where the fireworks will be shot off, so
              it'll be busy on our Big Day, but it's a delightful walk, even if perhaps
              less quiet than typically. Very scenic.</p>
          </div>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/a/a8/PittSkyline082904.jpg'
            className='small-image attr-img'
            alt='The Point'
          />
        </div>
        <div id='incline' className='one-attraction'>
          <img
            src='https://www.visitpittsburgh.com/imager/s3_amazonaws_com/visit-pittsburgh/CMS/1920X1080/incline-1_0e0c2af7508504893e6015e513d5aec0.jpg'
            className='small-image attr-img'
            alt='Mt Washington and the Incline'
          />
          <div className='attr-details'>
            <h3>Mt Washington (and the Incline)</h3>
            <p>If you want a birds-eye view of the whole city, Mt Washington is the
              place to go! You can drive up and park on the street, or you can take
              one of two historic <a href='https://www.tripsavvy.com/exploring-mt-washington-2708253'
              target='blank'>inclines</a>: the <a href='http://www.duquesneincline.org/'
              target='blank'>Duquesne</a> or the <a href='https://monongahelaincline.com/' target='blank'>Mon
              (Monongahela)</a>. The Mon has the better view for walking (more about
              this <a href='#st-marys'>above</a>.</p>
          </div>
        </div>
        <div id='museums' className='one-attraction'>
          <img
            src='https://media-cdn.tripadvisor.com/media/photo-s/04/3a/ad/cc/carnegie-museum-of-natural.jpg'
            className='small-image attr-img'
            alt='The Museums'
          />
          <div className='attr-details'>
            <h3>The Museums</h3>
            <p>This city has a number of great museums around! The <a href='https://carnegiemuseums.org/'
            target='blank'>Carnegie Museums</a> are perhaps the most notable (and
            the Science Center is right next to the Casino), but the <a href='https://www.heinzhistorycenter.org/'
            target='blank'>Heinz History Museum</a> is a cool history of Pittsburgh,
            the <a href='https://www.pittsburghzoo.org/' target='blank'>zoo</a> is
            delightful, and we've got <a href='https://www.discovertheburgh.com/unusual-museums-in-pittsburgh/'
            target='blank'>several weirder options</a> as well. The world is your oyster!</p>
          </div>
        </div>
        <div id='kennywood' className='one-attraction-reverse'>
          <div className='attr-details'>
            <h3>Kennywood</h3>
            <p>This beloved local <a href='https://www.kennywood.com' target='blank'>theme
            park</a> is well under an hour southeast of the city. It boasts "6 coasters,
            a 14-ride Kiddieland, and several attractions," and is a smaller park, but
            a great one. Most lifelong Yinzers (Pittsburghers) have numerous childhood
            memories of Kennywood, and Bill and Claire currently have season tickets.</p>
          </div>
          <img
            src='https://media.thetab.com/blogs.dir/115/files/2016/06/roadsign1-blastcoaster-e1465899287271.jpg'
            className='small-image attr-img'
            alt='Kennywood'
          />
        </div>
        <div id='ballparks' className='one-attraction'>
          <img
            src='https://images.squarespace-cdn.com/content/v1/5ba1407b9d5abbcd46c597a6/1546552392574-SSJ4DNOQQMC6TA1KL9K3/ke17ZwdGBToddI8pDm48kKf4q2_pEHkS5KDxm2bm030UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcyOho2e0NVAkIlv2u-pApubBCP9-_2M7_jQz05G2v8uoyy77yJ5HZ0VKRV9aKCidC/1+Sports+copy.jpg'
            className='small-image attr-img'
            alt='The Ballparks'
          />
          <div className='attr-details'>
            <h3>The Ballparks</h3>
            <p>Pittsburgh is a city that loves its sports! The only one likely to be open now is PNC Park,
              where the Pirates play their baseball games (and <a href='/baseball'>you're welcome to join
              us at the game the next day</a>), but also notable are Heinz Field, where the Steelers play
              football, PPG Paints Arena, where the Penguins play hockey, and  Highmark Field, where the
              Riverhounds play soccer. You can expect to see most of the city in black and gold on any
              given game day!</p>
          </div>
        </div>
        <div id='city-of-asylum' className='one-attraction-reverse'>
          <div className='attr-details'>
            <h3>City of Asylum Bookstore</h3>
            <p>This <a href='https://www.cityofasylumbooks.org/' target='blank'>nonprofit
              bookstore</a> features a lot of works that are difficult to find elsewhere,
              including local authors and people who can't write in their home country
              for fear of persecution. Their selection also includes a robust children's
              section and a large sale section of donated books.</p>
          </div>
          <img
            src='https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/20170117rldCasellula02-1-1568551198.jpg'
            className='small-image attr-img'
            alt='City of Asylum Bookstore'
          />
        </div>
        <div id='flaherty-fardo' className='one-attraction'>
          <img
            src='./images/flaherty_fardo.png'
            className='small-image attr-img'
            alt='Flaherty, Fardo, Rogel, & Amick'
          />
          <div className='attr-details'>
            <h3>Flaherty, Fardo, Rogel, & Amick</h3>
            <p>About half a mile from the church you can find the offices of this
              Very Important law firm (<em>can you tell Bill let Claire write these?</em>)&mdash;in
              case you want to get a photo op next to our name on the door or something!</p>
            <p>Also the Mexican place next door is pretty tasty, and <a href='#pamelas'>Pamela's</a>, <a
            href='#shady-grove'>Shady Grove</a>, and <a href='#yard'>the Yard</a> are
              just around the corner and down the block; it's a whole cute little
              downtown area.</p>
          </div>
        </div>


      <h2 id='further-reading'>Even More</h2>
        <div id='further-reading' className='one-attraction'>
        <p><a href='https://www.discovertheburgh.com/the-ultimate-pittsburgh-guide/' target='blank'>The
        Ultimate Pittsburgh Guide</a> (this one is <em>seriously</em> detailed)</p>
        <p><a href='https://epicpew.com/if-you-love-the-catholic-church-and-good-food-pittsburg-is-your-next-pilgrimage-destination/' target='blank'>
          If You Love the Catholic Church and Good Food, Pittsburgh Is Your Next
          Pilgrimage Destination</a></p>
        <p><a href='https://epicpew.com/pittsburgh-pilgrimage/' target='blank'>
          Even More Reasons to Pilgrimage to Pittsburgh</a></p>
        {/* <p>Brandon's forthcoming book</p> */}
        </div>
    </div>
  </ScrollingWrapper>
)

export default Attractions
