import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1/index';
import NavBar from './NavBar';
import NavBarLink from './NavBarLink';
import messages from './messages';

/*
for hot reloading, don't using SFC (stateless functional component)
add eslint disable line for SFC check
*/

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <H1>
          <FormattedMessage {...messages.title} />
        </H1>
        <NavBar>
          <NavBarLink to="/">
            <FormattedMessage {...messages.home} />
          </NavBarLink>
          <NavBarLink to="/change_input">
            <FormattedMessage {...messages.changeInput} />
          </NavBarLink>
          <NavBarLink to="/input_history">
            <FormattedMessage {...messages.inputHistory} />
          </NavBarLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
