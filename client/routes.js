import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Home, OurStory, Schedule, Accommodations, Attractions, Registry, Photos, RSVP, Guestbook, CookieTable, Choir, RegistryThanks} from './components'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/ourstory" component={OurStory} />
    <Route exact path="/schedule" component={Schedule} />
    <Route exact path="/accommodations" component={Accommodations} />
    <Route exact path="/attractions" component={Attractions} />
    <Route exact path="/registry" component={Registry} />
    <Route exact path="/registrythanks" component={RegistryThanks} />
    <Route exact path="/photos" component={Photos} />
    <Route exact path="/rsvp" component={RSVP} />
    <Route exact path="/guestbook" component={Guestbook} />
    <Route exact path="/cookietable" component={CookieTable} />
    <Route exact path="/choir" component={Choir} />
  </Switch>
)

// The `withRouter` wrapper makes sure that updates are not blocked when the url changes
export default withRouter(Routes)
