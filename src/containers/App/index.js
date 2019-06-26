
import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route } from 'react-router-dom'

import HomePage from 'containers/HomePage'
import NotFoundPage from 'containers/NotFoundPage'
import './style.scss'

const App = () => (
  <React.Fragment>
    <Helmet
      titleTemplate="%s Eiybnb"
      defaultTitle="Eiybnb"
    >
      <meta name="description" content="Search the most beautiful places with the best weather." />
    </Helmet>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </React.Fragment>
)

export default App
