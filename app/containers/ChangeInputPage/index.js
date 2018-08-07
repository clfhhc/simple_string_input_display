import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectStringToInput,
  makeSelectLoading,
  makeSelectError,
} from 'containers/InputPage/selectors';
import withReducer from 'containers/InputPage/withReducer';
import { withInsertInput } from 'containers/InputPage/withSaga';
import { changeInput, insertInput } from 'containers/InputPage/actions';
import H2 from 'components/H2';
import Form from './Form';
import InputBox from './InputBox';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class ChangeInputPage extends React.PureComponent {
  render() {
    const {
      stringToInput,
      error,
      loading,
      onChangeInput,
      onInsertInput,
    } = this.props;
    return (
      <section>
        <Helmet>
          <title>Change Input Page</title>
          <meta name="description" content="Change Input Page" />
        </Helmet>
        <H2>
          <FormattedMessage {...messages.header} />
        </H2>
        <Form onSubmit={onInsertInput}>
          <label htmlFor="stringToInput">
            <FormattedMessage {...messages.inputLabel} />
            <InputBox
              id="stringToInput"
              type="text"
              placeholder="any string"
              value={stringToInput}
              onChange={onChangeInput}
            />
          </label>
        </Form>
        {(error && <p>something went wrong, please try again</p>) ||
          (loading && <p>inserting input</p>) ||
          ''}
      </section>
    );
  }
}

ChangeInputPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  stringToInput: PropTypes.string,
  onChangeInput: PropTypes.func,
  onInsertInput: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  stringToInput: makeSelectStringToInput(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeInput: event => dispatch(changeInput(event.target.value)),
    onInsertInput: event => {
      if (event !== undefined && event.preventDefault) {
        event.preventDefault();
      }
      dispatch(insertInput());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withInsertInput,
  withConnect,
)(ChangeInputPage);
