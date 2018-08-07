import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import InputHistory from '../index';
import messages from '../messages';

describe('<InputHistory />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<InputHistory />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toEqual(true);
  });
});
