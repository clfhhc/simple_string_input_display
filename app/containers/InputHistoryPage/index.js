import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectInputHistory,
  makeSelectLoading,
  makeSelectError,
} from 'containers/InputPage/selectors';
import withReducer from 'containers/InputPage/withReducer';
import { withFetchHistory } from 'containers/InputPage/withSaga';
import { fetchHistory } from 'containers/InputPage/actions';
import H2 from 'components/H2';
import List from 'components/List';
import ListItem from 'components/ListItem';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class InputHistoryPage extends React.PureComponent {
  componentDidMount() {
    this.props.fetchHistory();
  }

  render() {
    const { inputHistory, error, loading } = this.props;
    return (
      <section>
        <Helmet>
          <title>Input History Page</title>
          <meta name="description" content="Input History Page" />
        </Helmet>
        <H2>
          <FormattedMessage {...messages.header} />
        </H2>
        <p>
          <FormattedMessage {...messages.title} />
        </p>
        {(error && <p>something went wrong, please refresh</p>) ||
          (loading && <p>loading history</p>) || (
          <List items={inputHistory} component={ListItem} />
        )}
      </section>
    );
  }
}

InputHistoryPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  inputHistory: PropTypes.array,
  fetchHistory: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  inputHistory: makeSelectInputHistory(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    fetchHistory: () => dispatch(fetchHistory()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withFetchHistory,
  withConnect,
)(InputHistoryPage);
