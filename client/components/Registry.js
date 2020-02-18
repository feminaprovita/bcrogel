import React from 'react'

const Registry = () => (
  <div id='registry-container' className='page-container'>
    <h1>Choose from among Three Registry Categories</h1>
    <h2>Donate to the ____ fund:</h2>
    <div id='money-categories'>
      <div id='dishwasher' className='registry registry-hover'>
        <a href='https://www.donsappliances.com/product/bosch-800-series-24-built-in-dishwasher-stainless-steel-shp878wd5n-103858' target='blank'>
          <img
            className='registry-block small-image'
            id='dishwasher-img'
            src='https://cdn.avbportal.com/magento-media/catalog/product/s/h/shp878wd5n1.png?w=640'
            alt='dishwasher'
            />
        </a>
        <h4>Goal: $1750</h4>
        <p><em>for dishwasher and installation</em></p>
      </div>
      <div id='couch' className='registry registry-hover'>
        <img
          className='registry-block small-image'
          id='couch-img'
          src='./images/couch.png'
          alt='couch'
          />
        <h4>Goal: $2100</h4>
        <p><em>couch, recliner, and loveseat all need replacing</em></p>
      </div>
      <div id='honeymoon' className='registry registry-hover'>
        <img
          className='registry-block small-image'
          id='honeymoon-img'
          src='https://www.britainexpress.com/images/attractions/editor2/lagavulin-2.jpg'
          alt='honeymoon'
          />
        <h4>Goal: $6800</h4>
        <p><em>Current honeymoon plan: Islay, Scotland</em></p>
        <p>You're welcome to flag some or all of your gift for a particular distillery:<br />
        <ul id='distillery-list'><strong>
          <li>❑ <a href='https://www.ardbeg.com/en-int' target='blank'>Ardbeg</a></li>
          <li>❑ <a href='https://www.malts.com/en-us/distilleries/lagavulin/' target='blank'>Lagavulin</a></li>
          <li>❑ <a href='https://www.laphroaig.com/' target='blank'>Laphroaig</a></li>
          <li>❑ <a href='http://www.bowmore.com/node/16' target='blank'>Bowmore</a></li>
          <li>❑ <a href='https://www.bruichladdich.com/' target='blank'>Bruichladdich</a></li>
          <li>❑ <a href='https://www.malts.com/en-us/distilleries/caol-ila/' target='blank'>Caol Ila</a></li>
          <li>❑ <a href='https://bunnahabhain.com/' target='blank'>Bunnahabhain</a></li>
          <li>❑ <a href='https://ardnahoedistillery.com/' target='blank'>Ardnahoe</a></li>
          <li>❑ <a href='https://kilchomandistillery.com/' target='blank'>Kilchoman</a></li></strong></ul></p>
          {/* check mark: ✓ */}
      </div>
    </div>
    <h3>3 ways to reach us:</h3>
    <div id='money-links'>
      <div id='easy-money'>
        <div id='paypal' className='registry'>
          <a href='https://paypal.me/feminaprovita' target='blank'>
            <img
              className='registry-block icon'
              src='https://www.paypalobjects.com/webstatic/mktg/logo/AM_SbyPP_mc_vs_dc_ae.jpg'
              alt='Gift us via PayPal (or credit card)'
            />
          </a>
        </div>
        <div id='venmo' className='registry'>
          <a href='https://venmo.com/feminaprovita' target='blank'>
            <img
              className='registry-block icon'
              src='https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/1f/34/74/1f34746c-054a-560c-640c-a9816c5bd3b1/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.png/246x0w.png'
              alt='Gift us via Venmo'
            />
          </a>
        </div>
      </div>
      <div id='check' className='registry'>
        <img
          className='check icon'
          src='https://www.investopedia.com/thmb/cH0ymcRX6Z4RSEvyUQMcDoxDqug=/2583x1163/filters:fill(auto,1)/GettyImages-528413731-5654919b5f9b5843e123c9ec.jpg'
          alt='check'
        />
        <h4>Check made out to "Bill Rogel" and/or "Claire Gilligan"</h4>
        <p>(Avoid "Bill and Claire Rogel"; it's romantic but impractical, as name change
          paperwork takes <em>forever</em>)</p>
      </div>
    </div>
    <h2>Shop at:</h2>
    <div id='traditional-registries'>
      <div id='zola-registry' className='registry'>
        <a href='https://www.zola.com/registry/swelltoberogel' target='blank'>
          <img
            className='registry-block small-image'
            id='zola-img'
            src='https://images.zola.com/7a478860-56ec-4bf6-8e59-5c1df3539374?h=400'
            alt='Zola Wedding Registry: Anything for Love'
            />
        </a>
        <p>Your traditional registry items are mostly right here</p>
      </div>
      <div id='bbb-registry' className='registry'>
        <a href='https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/548270669?eventType=Wedding' target='blank'>
          <img
            className='registry-block small-image'
            id='bbb-img'
            src='http://www.orrwedding.com/wp-content/uploads/2016/07/bbb-1.png'
            alt='Bed Bath & Beyond: The Wedding & Gift Registry'
            />
        </a>
        <p>This one has the Kitchenaid stuff! Also a lot of fun sports-branded
          kitchenware and household items</p>
      </div>
      <div id='ikea-registry' className='registry'>
        <a href='https://info.ikea-usa.com/giftregistry/en-us/registry/5c757d9d-e026-45c4-a760-f3d8167b66c7' target='blank'>
          <img
            className='registry-block small-image'
            id='ikea-img'
            src='https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/30/e2/17/30e217c1-e9e8-33f4-0247-77bfc745a5cd/AppIcon-0-1x_U007emarketing-0-0-85-220-0-5.jpeg/246x0w.jpg'
            alt='Ikea Gift Registry'
            />
        </a>
        <p>Our bookcases of choice are here (along with their extra shelves),
          plus some important affordable kitchenware</p>
      </div>
      <div id='amazon-registry' className='registry'>
        <a href='https://www.amazon.com/wedding/share/swelltoberogel' target='blank'>
          <img
            className='registry-block small-image'
            id='amazon-img'
            src='https://i.pinimg.com/originals/fd/49/ff/fd49ff0383a2a9cf414aef95d7139bb5.png'
            alt='Amazon.com Wedding Registry'
            />
        </a>
        <p>Here is everything else, including atypical registry items like board
          games, as well as far, far too many spatulas (don't ask)</p>
      </div>
    </div>
    <h2>Give Us Copies of Your Favorite:</h2>
    <div id='guest-favorites'>
      <div id='marriage-books' className='registry'>
        <h3>Marriage Books</h3>
        <img
          className='registry-block small-image'
          id='marriage-books-img'
          src='https://cdn.pixabay.com/photo/2017/04/20/16/28/books-2246196_1280.jpg'
          alt='marriage books'
          />
        <p>With a note about what makes this book shine, so we know when to pick it up!</p>
      </div>
      <div id='cookbooks'  className='registry'>
        <h3>Cookbooks</h3>
        <img
          className='registry-block small-image'
          id='cookbooks-img'
          src='https://images.pexels.com/photos/446399/pexels-photo-446399.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
          alt='cookbooks'
          />
        <p>With your favorite dozen or so recipes dog-eared, please!</p>
      </div>
      <div id='whiskeys'  className='registry'>
        <h3>Whiskeys</h3>
        <img
          className='registry-block small-image'
          id='whiskeys-img'
          src='https://www.inquirer.com/resizer/UZP1HHtKI9gNymqz26uC0bbFw3c=/1400x932/smart/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/CGXYIUB5ZBBA7LFZXDB3O27A6Y.jpg'
          alt='whiskeys'
          />
        <p>Especially locally made or other uncommon whiskeys that we probably
          haven't gotten to try!</p>
      </div>
    </div>
  </div>
)

export default Registry
