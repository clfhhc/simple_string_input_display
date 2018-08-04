import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class InputPage extends React.PureComponent {
  render() {
    return (
      <section>
        <Helmet>
          <title>Input Page</title>
          <meta name="description" content="Input Page" />
        </Helmet>
        <h2>
          <FormattedMessage {...messages.header} />
        </h2>
      </section>
    );
  }
}
