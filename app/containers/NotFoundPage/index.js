/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H2 from 'components/H2';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class NotFound extends React.PureComponent {
  render() {
    return (
      <section>
        <Helmet>
          <title>Not Found</title>
          <meta name="description" content="Not Found Page" />
        </Helmet>
        <H2>
          <FormattedMessage {...messages.header} />
        </H2>
      </section>
    );
  }
}
