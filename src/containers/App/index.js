/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage';
import './style.scss';

const App = () => (
  <div className="app-container">
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
  </div>
);

export default App;
