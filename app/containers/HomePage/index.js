/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <section>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A Sample App for DMI Software Intro Assignment Home Page"
          />
        </Helmet>
        <h2>
          <FormattedMessage {...messages.header} />
        </h2>
      </section>
    );
  }
}
