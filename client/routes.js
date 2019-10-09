import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Home, OurStory, Schedule, Accommodations, WeddingParty, Registry, Photos, RSVP} from './components'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/ourstory" component={OurStory} />
    <Route exact path="/schedule" component={Schedule} />
    <Route exact path="/accommodations" component={Accommodations} />
    <Route exact path="/weddingparty" component={WeddingParty} />
    <Route exact path="/registry" component={Registry} />
    <Route exact path="/photos" component={Photos} />
    <Route exact path="/rsvp" component={RSVP} />
  </Switch>
)

// The `withRouter` wrapper makes sure that updates are not blocked when the url changes
export default withRouter(Routes)
