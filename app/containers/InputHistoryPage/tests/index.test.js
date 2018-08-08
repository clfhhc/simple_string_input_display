import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import { InputHistoryPage } from '../index';
import messages from '../messages';

describe('<InputHistoryPage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<InputHistoryPage />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toEqual(true);
  });
});
