import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Home, OurStory, Registry, Photos, OurStoryLong, Former, Livestream, Schedule,
  Accommodations, Attractions, RSVP, CookieTable, Choir, FAQ, Baseball, MoneyDance,
  ScavengerHunt, Solid} from './components'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/ourstory" component={OurStory} />
    <Route exact path="/ourstorylong" component={OurStoryLong} />
    <Route exact path="/schedule" component={Schedule} />
    <Route exact path="/accommodations" component={Accommodations} />
    <Route exact path="/attractions" component={Attractions} />
    <Route exact path="/registry" component={Registry} />
    <Route exact path="/photos" component={Photos} />
    <Route exact path="/rsvp" component={RSVP} />
    <Route exact path="/cookietable" component={CookieTable} />
    <Route exact path="/choir" component={Choir} />
    <Route exact path="/faq" component={FAQ} />
    <Route exact path="/baseball" component={Baseball} />
    <Route exact path="/moneydance" component={MoneyDance} />
    <Route exact path="/scavengerhunt" component={ScavengerHunt} />
    <Route exact path="/former" component={Former} />
    <Route exact path="/livestream" component={Livestream} />
    <Route exact path="/solid" component={Solid} />
  </Switch>
)

// The `withRouter` wrapper makes sure that updates are not blocked when the url changes
export default withRouter(Routes)
