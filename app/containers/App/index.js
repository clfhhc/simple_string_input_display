/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import Header from 'containers/Header/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import ChangeInputPage from 'containers/ChangeInputPage/Loadable';
import InputHistoryPage from 'containers/InputHistoryPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s | Sample App" defaultTitle="Sample App">
        <meta
          name="description"
          content="A Sample App for DMI Software Intro Assignment"
        />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/change_input" component={ChangeInputPage} />
        <Route exact path="/input_history" component={InputHistoryPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
