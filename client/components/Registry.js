import React from 'react'

const Registry = () => (
  <div id='registry-container' className='page-container'>
    <h1>Registries in the Time of Coronavirus</h1>
    <div className='registry-div'>
      <img
        src='./images/engagement_17.jpg'
        className='small-image page-img'
        alt='another of our favorite engagement photos'
      />
      <div id='registry-coronavirus'>
        <h2>So, now what?</h2>
        <p>There isn't really set ettiquette for this!</p>
        <p>We are still getting married on July 4. We are still holding a reception, just a
          very delayed one.</p>
        <p>If you want to still give us something, we're honored! Mailing address is
          below (in footer), and also on all the registries.</p>
        <p>If not, that's chill, too! Just please don't buy something off the registry
          now and save it for the reception.</p>
        <p>But do note that, come July, we'll start to buy the essentials off the
          registry that we haven't yet received (just being practical).</p>
        <p>We love you, we miss you, and we're praying for you!</p>
      </div>
    </div>
    <div className='registry-div-two'>
      <div id='registry-explanation'>
        <p>You may be wondering, why do they even have a registry? They're both grown
          adults who've lived on their own for many years...</p>
        <p>Ah, but it has been many years! We've got things that need replacing, in
          some cases pretty desperately.</p>
        <p>Also a few fun things that we just like. Because we wanted to offer you
          the opportunity to give us fun things without having to guess!</p>
      </div>
      <img
        src='./images/engagement_55.jpg'
        className='small-image page-img'
        alt='a silly engagement photos'
        />

    </div>
    <h2>Cash Donation</h2>
    <div id='cash-donation'>
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
          <p>Bill's dishwasher is... <em>desperately</em> in need of replacement!
          And, seeing as how Claire just lived for 7 years with no dishwasher
          (thanks, NYC), and it was the modern convenience she was most looking
          forward to having access to again... Please help us buy a new dishwasher!</p>
        </div>
          <div id='couch' className='registry registry-hover'>
          <img
            className='registry-block small-image'
            id='couch-img'
            src='./images/couch.png'
            alt='couch'
            />
          <h4>Goal: $2100</h4>
          <p>The couch set, like the dishwasher, had been used by the family for
            some years before Bill bought the house from his mom! It was a great
            couch set, but it was past its prime long before Claire entered the
            picture. (The pro of which is that she gets to help choose what it'll
            look like...)</p>
        </div>
      </div>
      <h3>3 ways to reach us here and now:</h3>
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
              src='https://www.technobuffalo.com/sites/technobuffalo.com/files/styles/mediumplus/public/wp/2018/01/venmo-logo-wide.png'
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
        <p>(Avoid "Bill and Claire Rogel"; it's romantic but impractical,
          as name change paperwork takes <em>forever</em>)</p>
      </div>
    </div>
  </div>
    <h2>Traditional Registries</h2>
    <div id='traditional-registries'>
      <div id='bbb-registry' className='registry'>
        <a href='https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/548270669?eventType=Wedding' target='blank'>
          <img
            className='registry-block small-image'
            id='bbb-img'
            src='http://www.orrwedding.com/wp-content/uploads/2016/07/bbb-1.png'
            alt='Bed Bath & Beyond: The Wedding & Gift Registry'
            />
        </a>
        <p>A lot of traditional registry items, Kitchenaid and its
          accessories, and some fun sports-branded household items</p>
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
        <p>Here we've got a mixture of household items that weren't on the other
          sites and atypical registry items like board games and books</p>
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
        <p>This may seem a weird place for a registry, but Ikea makes the best
          bookcases. And we own so many books! (Ask Rege how many books we own,
          really.) Please buy us these bookcases!</p>
      </div>
    </div>
    <h2>Off-Registry Suggestions (Your Favorite...)</h2>
    <div id='guest-favorites'>
      <div id='marriage-books' className='registry'>
        <h3>Marriage Books</h3>
        <img
          className='registry-block small-image'
          id='marriage-books-img'
          src='https://cdn.pixabay.com/photo/2017/04/20/16/28/books-2246196_1280.jpg'
          alt='marriage books'
          />
        <p>With a note about what makes this book shine, so we know when
          to pick it up!</p>
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
        <p>Especially locally made or other uncommon whiskeys that we
          probably haven't gotten to try!</p>
      </div>
    </div>
  </div>
)

export default Registry
