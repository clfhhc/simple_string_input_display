import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import H1 from 'components/H1/index';
import { makeSelectLocation } from 'containers/App/selectors';
import NavBar from './NavBar';
import NavBarLink from './NavBarLink';
import messages from './messages';

/*
for hot reloading, don't using SFC (stateless functional component)
add eslint disable line for SFC check
*/

const headerPaths = {
  home: '/',
  changeInput: '/change_input',
  inputHistory: '/input_history',
};

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <H1>
          <FormattedMessage {...messages.title} />
        </H1>
        <NavBar>
          {Object.keys(headerPaths).map(key => (
            <NavBarLink
              key={key}
              to={headerPaths[key]}
              selected={location.pathname === headerPaths[key]}
              selectedColor="lightgray"
            >
              <FormattedMessage {...messages[key]} />
            </NavBarLink>
          ))}
        </NavBar>
      </div>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

export default connect(mapStateToProps)(Header);
